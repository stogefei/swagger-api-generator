import readline from 'readline'
import build from './utils'
import _path from 'path'
import fs, { stat } from 'fs'
import { Model, NswagOptions, Propertie, Type } from './types'
import _ from 'lodash'

/**
 * 生成进度
 * @param text 文字
 * @param step 进度
 * @param isOk 完成
 */
function renderProgress(text: string) {
  readline.cursorTo(process.stdout, 0, 1)
  readline.clearScreenDown(process.stdout)
  process.stdout.write(`${text}`)
}

/**
 * 复制
 * @param src 源地址
 * @param dst 目标地址
 */
function copy(src: string, dst: string) {
  // 测试某个路径下文件是否存在
  if (!fs.existsSync(dst)) {
    // 不存在
    fs.mkdir(dst, function () {
      // 创建目录
      copy(src, dst)
    })
  }

  // 读取目录
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err
    }
    paths.forEach(function (path) {
      let _src = src + '/' + path
      let _dst = dst + '/' + path
      let readable
      let writable
      stat(_src, function (err, st) {
        if (err) {
          throw err
        }
        if (st.isFile()) {
          readable = fs.createReadStream(_src) // 创建读取流
          writable = fs.createWriteStream(_dst) // 创建写入流
          readable.pipe(writable)
        } else if (st.isDirectory()) {
          // 测试某个路径下文件是否存在
          if (fs.existsSync(_dst)) {
            // 存在
            copy(_src, _dst)
          } else {
            // 不存在
            fs.mkdir(_dst, function () {
              // 创建目录
              copy(_src, _dst)
            })
          }
        }
      })
    })
  })
}

/**
 * 设置默认参数
 * @param options 外部参数
 */
function defNswagOptions(options: NswagOptions, isDebugger: boolean) {
  /**
   * 格式化模块名称（默认：接口名称+Api）
   * @param name 名称
   */
  function formatControllerName(name: string) {
    // return name.indexOf('Api') !== -1 ? name : name + 'Api'
    return name;
  }
  /**
   * 格式化接口名称（默认：小驼峰命名）
   * @param name 名称
   */
  function formatMethodName(name: string) {
    if (name === '/' || name === '') {
      return ''
    }
    const fnName = name.substring(name.lastIndexOf('/'))
      .replace(/[.,\[«]]/g, '')
      .replace(/[.,\[»]]/g, '')
    return _.camelCase(fnName)
  }
  /**
   * 格式化dto对象、枚举名称（默认：只会去除特殊字符）
   * @param name 名称
   */
  function formatModelName(name: string) {
    return name.replace(/[.,\[\]]/g, '')
      .replace(/[.,\[«]]/g, '')
      .replace(/[.,\[»]]/g, '')
  }

  /**
   * 格式化模拟值
   * @param v 默认格式化后的值
   * @param p 对应的属性
   */
  function formatMock(v: string, p: Propertie) {
    return v
  }

  const def: NswagOptions = {
    SwaggerUrl: '',
    ApiBase: '',
    ApiName: '',
    OutPath: isDebugger ? '../../core/src/api' : '../../core/src/api',
    TplPath: isDebugger ? '../swag/tpl' : '../tpl',
    Mock: false,
    FormatControllerName: formatControllerName,
    FormatMethodName: formatMethodName,
    FormatModelName: formatModelName,
    FormatMock: formatMock
  }
  return Object.assign(def, options)
}

/**
 * 初始化
 */
async function init(args: string, isDebugger: boolean) {
  console.log(isDebugger, 'isDebugger--');
  if (args === 'init') {
    const srcPath = _path.join(__dirname, '../def')
    const savePath = _path.join(__dirname, isDebugger ? '../dev/config/swag' : '../../../swag')
    copy(srcPath, savePath)
    console.log('初始化成功，您可以修改swag文件夹下的config.js配置文件&代码模板,路径：' + savePath)
  } else if (args === 'run') {
    // 获取配置
    let configs = []
    const configPath = _path.join(__dirname, isDebugger ? '../../src/config/config.js' : '../../src/config/config.js')
    if (fs.existsSync(configPath)) {
      const config:any = require(configPath)
      if (config) {
        configs = config.Apis
      } else {
        console.log('请先执行 swag init 进行初始化2')
        process.exit(0)
      }
    } else {
      console.log('请先执行 swag init 进行初始化1')
      process.exit(0)
    }
    // 生成接口
    let i = 0
    while (i < configs.length) {
      const config:any = configs[i]
      if (!config.ApiName) {
        console.log('接口名称[ApiName]不能为空')
        return
      }
      if (!config.SwaggerUrl) {
        console.log('接口地址[SwaggerUrl]不能为空')
        return
      }
      if (!config.ApiBase) {
        console.log('接口根目录[ApiBase]不能为空')
        return
      }
      renderProgress(`正在生成 ${config.ApiName}`)
      await build(defNswagOptions(config, isDebugger))
      renderProgress(`${config.ApiName} 生成成功`)
      i++
      console.info(`${config.ApiName} 生成成功`)
    }
    process.exit(0)
  } else {
    console.log('请输入要执行的命名，查看帮助 swag -h')
  }
}

export default init
