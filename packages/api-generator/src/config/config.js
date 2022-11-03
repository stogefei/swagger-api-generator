const _ = require('lodash');

module.exports = {
  Name: 'swag-ts',
  Description: '根据swagger文档生成typescript客户端调用代码',
  Apis: [
    {
      SwaggerUrl: 'http://159.75.221.84:8080/api/v2/api-docs?group=All', // 接口文档地址（必填）
      ApiBase: '/api', // 接口根节点（必填）
      ApiName: 'API', // 接口名称（必填）
      OutPath: '../../../api-swag-core/src', // 输出目录（默认：项目根/src/api/{ApiName}）
      TplPath: '../tpl', // 模板路径（默认：内部默认模板，也可以copy 到项目中进行修改，然后指定用项目中模板）
      Mock: true, // 是否启用模拟数据 （默认：false）
      FormatMock: formatMock, // 接管模拟数据格式化
      FormatControllerName: formatControllerName, // 格式化模块名称（默认：接口名称+Api）
      FormatMethodName: formatMethodName, // 格式化接口名称（默认：小驼峰命名）
      FormatModelName: formatModelName, // 格式化dto对象、枚举名称（默认：只会去除特殊字符）
    },
  ],
};

/**
 * 格式化模块名称（默认：接口名称+Api）
 * @param name 名称
 */
function formatControllerName (name) {
  const cameName = _.camelCase(name);
  return cameName;
}

/**
 * 格式化接口名称（默认：小驼峰命名）
 * @param name 名称
 */
function formatMethodName (name) {
  if (name === '/' || name === '') {
    return '';
  }
  const fnName = name
    .substring(name.lastIndexOf('/'))
    .replace(/«/g, '')
    .replace(/»/g, '');
  return _.camelCase(fnName);
}

/**
 * 格式化dto对象、枚举名称（默认：只会去除特殊字符）
 * @param name 名称
 */
function formatModelName (name) {
  return name
    .replace(/`1/g, '')
    .replace(/,/g, '')
    .replace(/«/g, '')
    .replace(/»/g, '');
}

// 格式化模拟数据
function formatMock (val, p, mock) {
  let value = val;
  switch (p.Type.TypeOf) {
    case 'string':
      switch (p.Name) {
        case 'name':
          value = '@cname';
          break;
        case 'title':
          value = '@ctitle(10, 20)';
          break;
        case 'mobile':
          value = '@natural(10000)';
          break;
        case 'email':
          value = '@email';
          break;
        case 'province':
          value = '@province';
          break;
        case 'city':
          value = '@city';
          break;
        case 'area':
          value = '@county';
          break;
        default:
          value = '@ctitle(10, 20)';
          break;
      }
      mock[p.Name] = value;
      break;
    case 'number':
      switch (p.Name) {
        case 'result_code':
          value = 0;
          break;
        case 'page_index':
          value = 1;
          break;
        case 'page_size':
          value = 15;
          break;
        case 'total_count':
          value = 30;
          break;
        default:
          value = '@integer(0, 100)';
          break;
      }
      mock[p.Name] = value;
      break;
    case 'array':
      mock[p.Name + '|20'] = value;
      break;
  }
  return mock;
}

