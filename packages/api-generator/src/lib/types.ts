// 配置参数
export interface NswagOptions {
  SwaggerUrl: string // 接口文档地址（必填）
  ApiBase: string // 接口根节点（必填）
  ApiName: string // 接口名称（必填）
  OutPath: string // 输出目录（默认：项目根/src/api/）
  TplPath: string // 模板路径（默认：初始化后会自动copy模板文件夹到项目根目录：swag，如果进行了修改则需配置此目录）
  Mock: boolean // 是否启用模拟数据 （默认：false）
  FormatMock: Function // 接管模拟数据格式化
  FormatControllerName: Function // 格式化模块名称（默认：接口名称+Api）
  FormatMethodName: Function // 格式化接口名称（默认：小驼峰命名）
  FormatModelName: Function // 格式化dto对象、枚举名称（默认：只会去除特殊字符）
}

// 基本信息
export interface ApiDataBaseInfo {
  Title: string // 接口标题
  Description: string // 接口说明
  Version: string // 接口版本号
}

// 模块
export interface ApiController {
  Name: string // 模块名称
  Description: string // 说明
  Methods: Array<ApiMethod> // 函数列表
  ImportModels: Array<string> // 类型依赖
}

// 函数
export interface ApiMethod {
  Name: string // 名称
  Url: string // 接口地址
  Description: string // 说明
  RequestName: string // 请求方法
  Parameters: Array<Parameter> // 接口参数/不包含header参数
  ParametersQuery: Array<Parameter> // URL参数
  ParametersBody: Array<Parameter> // Body参数
  ParametersFormData: Array<Parameter> // formData参数
  ParametersHeader: Array<Parameter> // header参数
  ParametersPath: Array<Parameter> // path参数
  Responses: Type // 返回值
  MockData: any // 模拟数据
}

// 参数
export interface Parameter {
  Name: string // 名称
  CamelCaseName: string // 接口参数显示名称，会处理参数格式（小驼峰）、以及处理参数重名
  Description: string // 说明
  Required: boolean // 必填
  Type: Type // 类型
  In: 'query' | 'body' | 'formData' | 'header' | 'path' // 来源
  Default: any // 默认值
}

// 枚举
export interface Enum {
  Name: string // 名称
  Description: string // 说明
  Items: Array<EnumItem> // 列表
}
export interface EnumItem {
  Name: string // 名称
  Value: Number // 值
}

// 类型
export interface Model {
  Name: string // 名称
  Description: string // 说明
  IsParameter: boolean // 参数对象
  BaseModel: string // 父级类型
  Properties: Array<Propertie> // 属性
}
export interface Propertie {
  Name: string // 名称
  Description: string // 说明
  Type: Type // 类型
}

export interface Type {
  TypeOf: 'string' | 'number' | 'boolean' | 'file' | 'array' | 'enum' | 'schema' // 类型
  TsType: string // TS可识别类型
  Ref: any // 引用对象
}

// 数据类型
export interface ApiData {
  BasePath: string // 基本信息
  Host: string // 基本信息
  BaseInfo: ApiDataBaseInfo // 基本信息
  Controllers: Array<ApiController> // 模块
  Models: Array<Model> // 类型
  Enums: Array<Enum> // 枚举
}
