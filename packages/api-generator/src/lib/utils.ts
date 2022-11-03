import axios from 'axios'
import fs from 'fs'
import _path from 'path'
import ejs from 'ejs'
import _ from 'lodash'
import { ApiController, ApiData, ApiMethod, Enum, EnumItem, Model, NswagOptions, Parameter, Propertie, Type } from './types'
import https from 'https'

/**
 * 获取Swagger的JSON数据
 * @param {*} swaggerUrl
 */
function getSwaggerData(swaggerUrl: string) {
  const agent = new https.Agent({
    rejectUnauthorized: false
  })
  return new Promise((resolve, reject) => {
    axios.get(swaggerUrl, { httpsAgent: agent }).then(response => {
      if (response.status === 200) {
        const d = response.data
        if (typeof d === 'string') {
          // tslint:disable-next-line:no-eval
          const obj = eval('(' + d + ')')
          resolve(obj)
        } else {
          resolve(d)
        }
      } else {
        reject(new Error('获取swagger数据失败'))
      }
    })
  })
}

/**
 * 删除文件夹
 * @param path 地址
 */
function removeDirSync(path: string) {
  let files = []
  /**
   * 判断给定的路径是否存在
   */
  if (fs.existsSync(path)) {
    /**
     * 返回文件和子目录的数组
     */
    files = fs.readdirSync(path)
    files.forEach(function (file) {
      const curPath = _path.join(path, file)
      /**
       * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
       */
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        removeDirSync(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    /**
     * 清除文件夹
     */
    fs.rmdirSync(path)
  } else {
    console.log('给定的路径不存在，请给出正确的路径')
  }
}

/**
 * 创建目录
 * @param path 目录
 */
function markDirsSync(path: string) {
  try {
    if (!fs.existsSync(path)) {
      let pathtmp = ''
      path.split(/[/\\]/).forEach(dirname => {
        // 这里指用/ 或\ 都可以分隔目录  如  linux的/usr/local/services   和windows的 d:\temp\aaaa
        if (pathtmp) {
          pathtmp = _path.join(pathtmp, dirname)
        } else {
          pathtmp = dirname || '/'
        }
        if (!fs.existsSync(pathtmp)) {
          fs.mkdirSync(pathtmp)
        }
      })
    }
    return true
  } catch (e) {
    console.log('创建目录出错', e)
    return false
  }
}

/**
 * 生成代码
 * @param tplPath 模板绝对地址
 * @param data 数据
 * @param outPath 文件存放绝对地址
 * @param fileName 文件名称
 */
function codeRender(tplPath: string, data: any, outPath: string, fileName: string) {
  if (markDirsSync(outPath)) {
    const fileText = ejs.render(fs.readFileSync(tplPath, 'utf-8'), data)
    const savePath = _path.join(outPath, fileName)
    fs.writeFileSync(savePath, fileText)
  }
}

/**
 * 去掉换行
 * @param str 字符串
 */
function removeLineBreak(str: string) {
  return str ? str.replace(/[\r\n]/g, '') : ''
}

/**
 * 格式化模拟数据
 * @param properties 当前需要模拟的对象
 * @param models 接口全部对象
 * @param fm 格式化模拟数据函数
 * @param deep 递归层级，防止对象父子嵌套导致死循环 默认递归5级
 */
function formatMock(properties: Type, models: Array<Model>, fm: Function, deep: number = 1): any {
  let model = _.find(models, { Name: properties.Ref })
  if (model) {
    let mock: any = {}
    model.Properties.forEach((p:any) => {
      // 'string' | 'number' | 'boolean' | 'file' | 'array' | 'enum' | 'schema'
      let v: any = ''
      switch (p.Type.TypeOf) {
        case 'string':
          v = '@ctitle(10, 20)'
          break
        case 'number':
          v = '@integer(0, 100)'
          break
        case 'boolean':
          v = '@boolean'
          break
        case 'file':
          v = ''
          break
        case 'array':
          v = deep > 5 ? [] : [formatMock(p.Type, models, fm, deep + 1)]
          break
        case 'enum':
          v = p.Type.TsType[0]
          break
        case 'schema':
          v = deep > 5 ? null : formatMock(p.Type, models, fm, deep + 1)
          break
      }
      mock = fm(v, p, mock)
    })
    return mock
  } else {
    return ''
  }
}

/**
 * 参数名称处理
 * @param {*} oldName
 */
function getParameterName(oldName: string) {
  let newName = oldName
  // 关键词处理
  if (oldName === 'number') {
    newName = 'num'
  }
  if (oldName === 'string') {
    newName = 'str'
  }
  newName = _.camelCase(oldName)
  return newName
}

/**
 * 处理重名问题
 * @param name 当前名称
 * @param list 列表，对象必须有Name属性才行
 */
function reName(name: string, list: Array<any>) {
  // 方法名称-重名处理
  if (_.findIndex(list, { Name: name }) !== -1) {
    let i = 1
    while (true) {
      if (_.findIndex(list, { Name: name + '_' + i }) !== -1) {
        i++
      } else {
        name = name + '_' + i
        break
      }
    }
  }
  return name
}

/**
 * 格式化属性
 * @param properties 属性
 * @param options 配置
 */
function convertType(properties: any, options: NswagOptions): any {
  let type: Type = {
    TypeOf: 'string',
    TsType: 'void',
    Ref: ''
  }
  if (!properties) {
    return type
  }
  if (properties.hasOwnProperty('oneOf')) {
    return convertType(properties.oneOf[0], options)
  }
  if (properties.hasOwnProperty('allOf')) {
    return convertType(properties.allOf[0], options)
  }
  if (properties.hasOwnProperty('schema')) {
    return convertType(properties.schema, options)
  }
  if (properties.hasOwnProperty('$ref')) {
    const t = options.FormatModelName(properties.$ref.substring(properties.$ref.lastIndexOf('/') + 1))
    type = {
      TypeOf: 'schema',
      TsType: t,
      Ref: t
    }
  } else if (properties.hasOwnProperty('enum')) {
    type = {
      TypeOf: properties.type,
      TsType: 'string',
      Ref: ''
    }
  } else if (properties.type === 'array') {
    const iType = convertType(properties.items, options)
    type = {
      TypeOf: 'array',
      TsType: 'Array<' + iType.TsType + '>',
      Ref: iType.Ref
    }
  } else {
    type = {
      TypeOf: properties.type,
      TsType: '',
      Ref: ''
    }
    switch (properties.type) {
      case 'string':
        type.TypeOf = 'string'
        type.TsType = 'string'
        break
      case 'number':
      case 'integer':
        type.TypeOf = 'number'
        type.TsType = 'number'
        break
      case 'boolean':
        type.TypeOf = 'boolean'
        type.TsType = 'boolean'
        break
      case 'file':
        type.TypeOf = 'file'
        type.TsType = 'string | Blob'
        break
      default:
        type.TsType = 'any'
        break
    }
  }
  return type
}

/**
 * swagger 文档格式化
 * @param swagger
 * @param options
 */
function formatData(swagger: any, options: NswagOptions) {
  // 文档模式 是否openapi 模式 还是 默认 swagger模式
  const isOpenApi = swagger.hasOwnProperty('openapi')

  let apiData: ApiData = {
    BaseInfo: {
      Title: swagger.info.title, // 接口标题
      Description: swagger.info.description, // 接口说明
      Version: swagger.info.version // 接口版本号
    },
    BasePath: swagger.basePath,
    Host: swagger.host,
    Controllers: [], // 后台的controller
    Models: [],
    Enums: []
  }

  // 格式化属性方法
  function fmProperties(properties: any, model: Model) {
    _.forEach(properties, function (propertie:any, name:any) {
      const newp: Propertie = {
        Name: name,
        Description: removeLineBreak(propertie.description),
        Type: convertType(propertie, options)
      }
      model.Properties.push(newp)
    })
  }

  // dto对象 / enum对象
  _.forEach(isOpenApi ? swagger.components.schemas : swagger.definitions, function (definition:any, name:any) {
    if (definition.hasOwnProperty('enum')) {
      const e: Enum = {
        Name: options.FormatModelName(name),
        Description: removeLineBreak(definition.description),
        Items: []
      }
      const enums = _.zipObject(definition['x-enumNames'], definition.enum)
      _.forEach(enums, function (enumValue:any, enumName:any) {
        const item: EnumItem = {
          Name: enumName,
          Value: Number(enumValue)
        }
        e.Items.push(item)
      })

      apiData.Enums.push(e)
    } else {
      const m: Model = {
        Name: options.FormatModelName(name),
        Description: removeLineBreak(definition.description),
        IsParameter: false,
        BaseModel: '',
        Properties: []
      }

      // 格式化属性
      if (definition.hasOwnProperty('allOf')) {
        _.forEach(definition.allOf, function (propertie:any) {
          if (propertie.hasOwnProperty('$ref')) {
            m.BaseModel = options.FormatModelName(propertie.$ref.substring(propertie.$ref.lastIndexOf('/') + 1))
          } else {
            if (propertie.hasOwnProperty('properties')) {
              fmProperties(propertie.properties, m)
            }
          }
        })
      } else {
        fmProperties(definition.properties, m)
      }

      apiData.Models.push(m)
    }
  })

  // 模块
  _.mapKeys(swagger.ControllerDesc, function (value:any, key:any) {
    apiData.Controllers.push({
      Name: options.FormatControllerName(key),
      Description: removeLineBreak(value) || '接口太懒没写注释-ControllerDesc',
      Methods: [],
      ImportModels: []
    })
    return key
  })

  // 方法
  _.forEach(swagger.paths, function (api:any, url:any) {
    _.forEach(api, function (md:any, requestName:any) {
      // 模块名称
      const cName = options.FormatControllerName(md.tags[0])
      // 当前模块
      let currController = _.find(apiData.Controllers, { Name: cName })
      if (!currController) {
        // 没有就新加一个模块
        const newController: ApiController = { Name: cName, Description: md.tags[0] || '接口太懒没写注释-currController', Methods: [], ImportModels: [] }
        currController = newController
        apiData.Controllers.push(currController)
      }
      // 方法名称
      let mName = options.FormatMethodName(url)
      mName = reName(mName, currController.Methods)

      // 添加方法
      const method: ApiMethod = {
        Name: mName,
        Url: url,
        Description: removeLineBreak(md.summary) || '接口太懒没写注释-ApiMethod',
        RequestName: requestName,
        Parameters: [],
        ParametersQuery: [],
        ParametersBody: [],
        ParametersFormData: [],
        ParametersHeader: [],
        ParametersPath: [],
        Responses: convertType(md.responses['200'] ? (isOpenApi ? md.responses['200'].content['application/json'].schema : md.responses['200'].schema) : null, options),
        MockData: null
      }
      // 方法参数处理
      // 兼容openapi 模式 requestBody 参数
      if (isOpenApi && md.requestBody) {
        md.parameters = md.parameters || []
        md.parameters.push(
          Object.assign(
            {
              name: md.requestBody['x-name'],
              required: md.requestBody.required,
              in: 'body',
              description: ''
            },
            md.requestBody.content['application/json']
          )
        )
      }
      _.forEach(md.parameters, (parameter: any) => {
        let pa: Parameter = {
          Name: _.trim(parameter.name),
          CamelCaseName: reName(getParameterName(parameter.name), method.Parameters),
          Description: removeLineBreak(parameter.description),
          In: parameter.in,
          Required: parameter.required,
          Default: '',
          Type: convertType(parameter, options)
        }
        if (pa.In === 'query') {
          method.ParametersQuery.push(pa)
          method.Parameters.push(pa)
        }
        if (pa.In === 'body') {
          method.ParametersBody.push(pa)
          method.Parameters.push(pa)
        }
        if (pa.In === 'formData') {
          method.ParametersFormData.push(pa)
          method.Parameters.push(pa)
        }
        if (pa.In === 'header') {
          method.ParametersHeader.push(pa)
        }
        if (pa.In === 'path') {
          method.ParametersPath.push(pa)
          method.Parameters.push(pa)
        }

        // 接口参数：存在引用型参数&没有没添加到引用列表的则添加到引用列表
        if (pa.Type.Ref && currController && currController.ImportModels.indexOf(pa.Type.Ref) === -1) {
          currController.ImportModels.push(pa.Type.Ref)
          // 标记为输入参数对象
          const d = _.find(apiData.Models, { Name: pa.Type.Ref })
          if (d) {
            d.IsParameter = true
          }
        }
      })
      // console.log(currController.ImportModels, 'currController.ImportModels')
      // 排序一下参数，把非必填参数排后面
      method.Parameters = _.orderBy(method.Parameters, ['Required'], ['asc'])

      // 返回值：存在引用型参数&没有没添加到引用列表的则添加到引用列表
      method.Responses.Ref && currController && currController.ImportModels.indexOf(method.Responses.Ref) === -1 && currController.ImportModels.push(method.Responses.Ref)
      // 返回值模拟
      if (options.Mock) {
        method.MockData = formatMock(method.Responses, apiData.Models, options.FormatMock)
      }
      // 添加方法
      currController.Methods.push(method)
    })
  })

  // 调整方法顺序，因为mock时 有可能匹配错误的mock拦截
  apiData.Controllers.map(c => {
    c.Methods = _.orderBy(c.Methods, ['Name'], ['desc'])
    return c
  })

  // 清理无方法空模块
  _.remove(apiData.Controllers, (c: ApiController) => {
    return c.Methods.length <= 0
  })

  return apiData
}

/**
 * 格式化成TS统一模板格式数据-数据源
 * @param swaggerUrl
 * @param options
 */
function getApiData(swaggerUrl: string, options: NswagOptions): Promise<ApiData> {
  return new Promise((resolve, reject) => {
    getSwaggerData(swaggerUrl)
      .then((r: any) => {
        const apiData = formatData(r, options)
        resolve(apiData)
      })
      .catch(e => {
        reject(e)
      })
  })
}

/**
 * 生成
 * @param apiData 标准化数据
 * @param options 生成配置
 */
function codeBuild(apiData: ApiData, options: NswagOptions) {
  const savePath = _path.join(__dirname, options.OutPath, options.ApiName.toLowerCase())
  const typesPath = _path.join(_path.join(__dirname, options.OutPath))

  const indexDir = _path.join(_path.join(__dirname, options.OutPath), '')
  
  const saveModelsDir = _path.join(savePath, 'model')
  const saveMockDir = _path.join(savePath, 'mock')
  const saveApiDir = _path.join(savePath, 'api-control')
  const indexApiDir = _path.join(typesPath, 'types')
  const coreOutDir = _path.join(_path.join(__dirname, options.OutPath), 'core')

  const tplPath = _path.join(__dirname, options.TplPath)

  const tplIndex = _path.join(tplPath, 'index.ejs')
  const tplApi = _path.join(tplPath, 'api.ejs')
  const tplMethodPath = _path.join(tplPath, 'method.ejs') // 各模块请求方法
  const tplMethodDPath = _path.join(tplPath, 'method.d.ejs') // 各模块请求方法说明文件
  const tplModelsPath = _path.join(tplPath, 'model.ejs') // 所有模块
  const tplMockPath = _path.join(tplPath, 'mock.ejs') // mock数据
  const tplMockMethodPath = _path.join(tplPath, 'mock-method.ejs') // mock数据
  const staticFile = _path.join(tplPath, 'index-type.ejs') // 说明文件
  const coreFile = _path.join(tplPath, 'core-index.ejs') // 核心代码
  const coreRequest = _path.join(tplPath, 'request.ejs')

  // 清理旧代码
  removeDirSync(savePath)
  removeDirSync(indexApiDir)
  // 生成-基类
  const Dev = process.argv.slice(3)[0] === 'dev';
  // console.log(Dev, 'Dev');
  Dev ? options.ApiBase = apiData.BasePath : options.ApiBase = apiData.Host + apiData.BasePath;
  codeRender(tplIndex, { apiData, options }, indexDir, 'index.ts') //入口文件
  codeRender(tplApi, { apiData, options }, indexDir, 'api.ts') // api实例
  // 生成-dto对象
  codeRender(tplModelsPath, { apiData, options }, saveModelsDir, 'index.ts')
  // 生成-Mock-调用
  if (options.Mock) {
    apiData.Controllers.forEach((control:any) => {
      control.upperName = _.upperFirst(control.Name);
    })
    codeRender(tplMockPath, { apiData, options }, saveMockDir, 'index.ts')
  }
      // 生成-api默认入口
   if (apiData.Controllers) {
      apiData.Controllers.forEach((control:any) => {
        control.upperName = _.upperFirst(control.Name);
      })
      // codeRender(apiIndex, { apiData, options }, savePath, 'index.ts')
      codeRender(staticFile, { apiData, options }, indexApiDir, 'index.ts')
      // codeRender(apiModuleFile, { apiData, options }, apiModuleDir, 'index.ts')
      codeRender(coreFile, { apiData, options }, coreOutDir, 'index.ts')
      codeRender(coreRequest, { apiData, options }, coreOutDir, 'request.ts')
    }
  // 按模块生成接口
  apiData.Controllers.forEach((control:any) => {
    // 生成-接口
    const controller:any = control;
    controller.Name = _.upperFirst(controller.Name);
    // console.log(options, 'options')
    codeRender(tplMethodPath, { controller, options }, saveApiDir, _.lowerFirst(control.Name) + '.ts')
    // 生成说明文件
    codeRender(tplMethodDPath, { controller, options }, indexApiDir, _.lowerFirst(control.Name) + '.ts')
    // 生成-Mock-接口
    if (options.Mock) {
      codeRender(tplMockMethodPath, { controller, options }, saveMockDir, _.lowerFirst(control.Name) + '.ts')
    }
  })
}

/**
 * 生成
 * @param apiData 标准化数据
 * @param options 生成配置
 */
export default async function build(options: NswagOptions) {
  const apiData:any = await getApiData(options.SwaggerUrl, options)
  codeBuild(apiData, options)
}
