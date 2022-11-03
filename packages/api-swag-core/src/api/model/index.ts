/* eslint-disable */
// 表单操作权限VO
export interface ActionPermissionVo {
  // 管理员干预
  adminIntervene: boolean;

  // 同意
  agree: boolean;

  // 加签
  apposttile: boolean;

  // 协办
  assist: boolean;

  // 协办任务提交
  assistSubmit: boolean;

  // 传阅
  circulated: boolean;

  // 结束流程
  close: boolean;

  // 不同意
  disagree: boolean;

  // 编辑
  edit: boolean;

  // 外链发起流程
  externalStartWorkflow: boolean;

  // 外链提交
  externalSubmit: boolean;

  // 作废
  invalid: boolean;

  // 操作日志
  operationLogs: boolean;

  // 驳回
  reject: boolean;

  // 取回
  retrieve: boolean;

  // 发起流程
  startWorkflow: boolean;

  // 提交
  submit: boolean;

  // 暂存
  temporary: boolean;

  // 转办
  transferred: boolean;

  // 催办
  urge: boolean;
}
// 节点传阅VO
export interface ActivityCirculateVo {
  // 节点编码
  activityCode: string;

  // 节点名称
  activityName: string;

  // 节点类型
  activityType: string;

  // 传阅时间
  circulateTime: string;

  // 参与者
  participant: ParticipantVo;

  // 是否已阅
  readed: boolean;
}
// 节点VO
export interface ActivityVo {
  // 编码
  code: string;

  // 名称
  name: string;
}
// 管理员角色权限范围数据vo对象
export interface AdminRolePermissionRangeVo {
  // 报表高级数据源管理范围
  advancedDataSourceList: Array<CodeNameVo>;

  // 前台应用数据权限
  appDatas: Array<AppDataPermissionVo>;

  // 数据源管理范围
  bizDataSourceList: Array<CodeNameVo>;

  // 业务集成管理范围
  bizServiceList: Array<CodeNameVo>;

  // 新建应用
  createApp: boolean;

  // 新增应用分组
  createAppGroup: boolean;

  // 新增集成服务目录
  createBizServiceCategory: boolean;

  // 新增角色权限角色
  roleManage: boolean;

  // 应用管辖范围
  scopeApps: Array<CodeNameVo>;

  // 角色管理范围
  scopeRoles: Array<TagTreeVo>;

  // 组织管辖范围
  scopeUnits: Array<UnitVo>;
}
// 管理组权限Vo对象
export interface AdminRolePermissionVo {
  // 报表高级数据源管理范围
  advancedDataSourceList: Array<string>;

  // 前台应用数据权限
  appDataPermissions: Array<AppDataPermissionVo>;

  // 数据源管理范围
  bizDataSourceList: Array<string>;

  // 业务集成管理范围
  bizServiceList: Array<string>;

  // 新建应用
  createApp: boolean;

  // 新增应用分组
  createAppGroup: boolean;

  // 新增集成服务服务
  createBizServiceCategory: boolean;

  // 新增角色权限
  roleManage: boolean;

  // 应用管辖范围
  scopeApps: Array<string>;

  // 角色管理范围
  scopeRoles: Array<UnitVo>;

  // 组织管辖范围
  scopeUnits: Array<UnitVo>;
}
// 管理组Vo对象
export interface AdminRoleVo {
  // 授权时间
  authTime: string;

  // 授权人
  authorizer: UnitVo;

  // 是否能编辑，表示当前节点能不能修改或删除，默认可编辑
  canEdit: boolean;

  // 子级
  children: Array<AdminRoleVo>;

  // 创建人
  createdBy: string;

  // 创建时间
  createdTime: string;

  // 主键
  id: string;

  // 修改人
  modifiedBy: string;

  // 修改时间
  modifiedTime: string;

  // 名称
  name: string;

  // 类型
  nodeType: string;

  // 上级id
  parentId: string;

  // 上级类型
  parentType: string;

  // 角色设置的权限
  permission: AdminRolePermissionVo;

  // 子级角色可授予的权限范围
  permissionRange: AdminRolePermissionRangeVo;

  // 管理员角色类型
  roleType: string;

  // 角色下的用户
  users: Array<UnitVo>;
}
// 管理员Vo对象
export interface AdminVo {
  // 部门全路径名称
  departmentFullName: string;

  // 所属部门id
  departmentId: string;

  // 主键
  id: string;

  // 用户账号
  userCode: string;

  // 用户id
  userId: string;

  // 用户名称
  userName: string;
}
// 报表高级数据源vo
export interface AdvancedDataSourceVo {
  // 集成数据源
  busDs: CodeNameVo;

  // 编码
  code: string;

  // 主键
  id: string;

  // 名称
  name: string;

  // sql语句
  sqlConfig: string;
}
// 应用数据权限VO对象
export interface AppDataPermissionVo {
  // 应用编码
  code: string;

  // 应用名称
  name: string;

  // 组织管辖范围
  units: Array<UnitVo>;
}
// 应用分组
export interface AppGroupVo {
  // id
  id: string;

  // 分组名称
  name: string;

  // 排序下标
  sortIndex: number;
}
// 应用对象
export interface AppPackageVo {
  // 编码
  code: string;

  // 启用状态
  enabled: boolean;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 应用模型菜单
  modelFunTrees: Array<FunTreeVo>;

  // 名称
  name: string;

  // 分组id
  parentId: string;

  // 排序下标
  sortIndex: number;

  // 可见范围
  visibleRange: string;
}
// 权限组排序对象
export interface AppPerGroupSortVo {
  // 主键
  id: string;

  // 排序值
  sortKey: number;
}
// 权限组对象
export interface AppPerGroupVo {
  // 应用编码
  appCode: string;

  // 授权类型
  grantType: string;

  // 主键
  id: string;

  // 权限组名称
  name: string;

  // 排序值
  sortKey: number;

  // 授权对象，组织/角色
  subjects: Array<UnitVo>;
}
// 应用权限设置VO
export interface AppPermissionSettingVo {
  // 权限组列表
  perGroups: Array<AppPerGroupVo>;

  // 模型权限资源列表
  schemaPermissionResources: Array<SchemaPermissionResource>;
}
// 审批日志VO
export interface ApprovalLogVo {
  // 审批操作类型
  actionType: string;

  // 节点编码
  activityCode: string;

  // 节点名称
  activityName: string;

  // 节点类型
  activityType: string;

  // 传阅的用户
  circulateList: Array<ActivityCirculateVo>;

  // 审批意见
  content: string;

  // 耗时
  duration: number;

  // 完成时间
  finishTime: string;

  // 参与者
  participant: ParticipantVo;

  // 接收时间
  receiveTime: string;

  // 签名文件
  signFileVo: SignFileVo;

  // 开始时间
  startTime: string;

  // 目标用户：转办、协办、传阅、加签用户
  toParticipants: Array<ParticipantVo>;
}
// 表单评论可@用户vo
export interface AtUserQueryResultVo {
  // 用户头像
  avatar: string;

  // 用户id
  userId: string;

  // 用户名称
  userName: string;
}
// 批量新增部门vo
export interface BatchDeptInsertVo {
  // 部门名称列表
  nameList: Array<string>;

  // 上级部门id
  parentId: string;
}
// 批量获取子表数据参数vo
export interface BatchListSheetDataVo {
  // 主表数据id集合
  ids: Array<string>;

  // 模型编码
  schemaCode: string;

  // 子表编码
  sheetCode: string;
}
// 用户批量转换部门
export interface BatchMoveUserDeptVo {
  // 新部门id
  newDeptId: string;

  // 旧部门id
  oldDeptId: string;

  // 用户列表
  userIdList: Array<string>;
}
// 批量保存角色权限Vo对象
export interface BatchSaveAdminRolePermissionVo {
  // 父级id
  parentId: string;

  // 父级类型
  parentType: string;

  // 角色权限
  rolePermissions: Array<SaveAdminRolePermissionVo>;
}
// 批量新增标签VO
export interface BatchTagVo {
  // 标签组名称
  groupName: string;

  // 标签名称
  tagName: string;
}
// 无
export interface BatchUpdateBizObjectVo {
  // id集合
  ids: Array<string>;

  // 修改的数据项及值
  paramsMap: any;

  // 模型编码
  schemaCode: string;
}
// 数据源Vo对象
export interface BizDataSourceVo {
  // 编码
  code: string;

  // 描述
  description: string;

  // id
  id: string;

  // 名称
  name: string;

  // 密码
  password: string;

  // 数据库类型
  type: string;

  // 连接url
  url: string;

  // 用户名
  username: string;
}
// 表单评论vo
export interface BizFormCommentVo {
  // 创建人头像
  avatar: string;

  // 业务对象id
  bizObjectId: string;

  // 无
  childList: Array<BizFormCommentVo>;

  // 评论内容
  content: string;

  // 创建人
  createdBy: string;

  // 创建人名称
  createdName: string;

  // 创建时间
  createdTime: string;

  // 附件id列表
  documentIdList: Array<string>;

  // 表单编码
  formCode: string;

  // 主键
  id: string;

  // 流程实例id
  instanceId: string;

  // @用户id列表
  receiveUserIdList: Array<string>;

  // @用户信息列表
  receiveUserList: Array<UnitValue>;

  // 回复的评论id
  replyCommentId: string;

  // 模型编码
  schemaCode: string;
}
// 打印模板vo
export interface BizFormTemplateVo {
  // 模板编码
  code: string;

  // 模板内容
  content: string;

  // 表单内容
  formData: string;

  // 主键
  id: string;

  // 模板名称
  name: string;

  // 模型编码
  schemaCode: string;

  // 画布配置
  settings: string;
}
// 表单对象
export interface BizFormVo {
  // 新增的数据项
  addPropertys: Array<BizPropertyVo>;

  // 编码
  code: string;

  // 表单设计json-草稿
  draftJson: string;

  // 主键
  id: string;

  // 模式
  model: string;

  // 名称
  name: string;

  // 发布状态
  published: boolean;

  // 表单设计json-已发布
  publishedJson: string;

  // 模型编码
  schemaCode: string;

  // 模型名称
  schemaName: string;

  // 是否启用外链
  shortLinkEnable: boolean;

  // 修改的数据项
  updatePropertys: Array<BizPropertyVo>;

  // 版本号
  version: number;
}
// 菜单vo
export interface BizMenuVo {
  // 应用编码
  appCode: string;

  // 编码
  code: string;

  // 表单编码-类型为BIZ_FORM时有值
  formCode: string;

  // 分组id
  groupId: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 移动端链接-类型为LINK时有值
  linkMobile: string;

  // pc链接-类型为LINK时有值
  linkPc: string;

  // 名称
  name: string;

  // 打开方式
  openMode: string;

  // 是否是快捷链接
  quickLink: boolean;

  // 模型编码-类型为BIZ_FORM或VIEW时有值
  schemaCode: string;

  // 菜单类型
  type: string;

  // 移动端是否可见
  visibleMobile: boolean;

  // pc是否可见
  visiblePc: boolean;

  // 流程编码-类型为WORKFLOW时有值
  workflowCode: string;
}
// 业务方法调用vo
export interface BizMethodInvokeVo {
  // 输入参数
  input: any;

  // 方法编码
  methodCode: string;

  // 业务服务编码
  serviceCode: string;
}
// 无
export interface BizObjectBo {}
// 业务对象过滤条件Vo
export interface BizObjectFilterVo {
  // 操作符
  op: string;

  // 数据项编码
  propertyCode: string;

  // 数据项类型
  propertyType: string;

  // 条件值
  values: Array<any>;
}
// 业务对象id集合对象
export interface BizObjectIdsVo {
  // id集合
  ids: Array<string>;

  // 模型编码
  schemaCode: string;
}
// 子表数据提交Vo对象
export interface BizObjectSheetSubmitVo {
  // 所有的数据
  datas: Array<Mapstringobject>;

  // 删除的数据id集合
  deleteIds: Array<string>;

  // 插入的数据
  insertDatas: Array<Mapstringobject>;

  // 子表编码
  sheetCode: string;

  // 更新的数据
  updateDatas: Array<Mapstringobject>;
}
// 业务对象排序条件Vo
export interface BizObjectSortVo {
  // 数据项编码
  propertyCode: string;

  // 排序方式
  sortType: string;
}
// 业务对象提交对象Vo
export interface BizObjectSubmitVo {
  // 主表数据
  data: any;

  // 主键
  id: string;

  // 模型编码
  schemaCode: string;

  // 子表数据
  sheetDatas: Array<BizObjectSheetSubmitVo>;
}
// 数据项计算规则Vo
export interface BizPropertyFormulaVo {
  // 数据项编码
  code: string;

  // 计算规则表达式
  expression: Expression;

  // 计算公式
  formula: string;

  // 主键
  id: string;

  // 数据项名称
  name: string;

  // 模型编码
  schemaCode: string;

  // 子表编码
  sheetCode: string;

  // 子表名称
  sheetName: string;
}
// 数据项排序vo
export interface BizPropertySortVo {
  // 数据项编码
  code: string;

  // 模型编码
  schemaCode: string;

  // 排序索引
  sortIndex: number;
}
// 数据项Vo
export interface BizPropertyVo {
  // 子表数据项
  children: Array<BizPropertyVo>;

  // 编码
  code: string;

  // 关联表单关联的模型展示字段
  correlationFormDisplayColumn: string;

  // 关联表单关联的模型编码
  correlationFormSchemaCode: string;

  // 关联表单关联的模型名称
  correlationFormSchemaName: string;

  // 关联模型所属应用名称
  correlationSchemaAppName: string;

  // 关联模型编码字段
  correlationSchemaCode: string;

  // 关联模型名称
  correlationSchemaName: string;

  // 显示格式
  format: any;

  // 计算公式
  formula: string;

  // 主键
  id: string;

  // 主模型编码
  mainSchemaCode: string;

  // 名称
  name: string;

  // 选项
  option: PropertyOption;

  // 是否创建索引
  propertyIndex: boolean;

  // 是否必填
  propertyRequired: boolean;

  // 数据项类型
  propertyType: string;

  // 是否已发布
  published: boolean;

  // 模型编码
  schemaCode: string;

  // 检索字段
  searchProperty: boolean;

  // 单据号规则
  sequenceNoRule: any;

  // 子表编码
  sheetCode: string;

  // 排序索引
  sortIndex: number;

  // 是否是系统字段
  systemProperty: boolean;
}
// 业务规则调用Vo
export interface BizRuleInvokeVo {
  // 输入参数
  input: any;

  // 规则id
  ruleId: string;

  // 模型编码
  schemaCode: string;
}
// 规则属性vo
export interface BizRulePropertyVo {
  // 主键
  id: string;

  // 无
  inputJsonSchema: JsonSchema;

  // 名称
  name: string;

  // 无
  outputJsonSchema: JsonSchema;

  // 无
  schemaCode: string;
}
// 业务规则引用数据项vo
export interface BizRuleQuotePropertyVo {
  // 动作id
  actionId: string;

  // 动作名称，不一定有值
  actionName: string;

  // 节点ID
  nodeId: string;

  // 节点名称
  nodeName: string;

  // 规则id
  ruleId: string;

  // 规则名称
  ruleName: string;

  // 模型编码
  schemaCode: string;

  // 模型名称
  schemaName: string;
}
// 业务规则重命名Vo
export interface BizRuleRenameVo {
  // 主键
  id: string;

  // 名称
  name: string;
}
// 业务规则Vo
export interface BizRuleVo {
  // 创建人
  createdBy: string;

  // 创建时间
  createdTime: string;

  // 创建人名称
  creatorName: string;

  // 主键
  id: string;

  // 规则输入参数
  input: any;

  // 修改人
  modifiedBy: string;

  // 修改时间
  modifiedTime: string;

  // 名称
  name: string;

  // 规则输出参数
  output: any;

  // 模型编码
  schemaCode: string;

  // 规则模板
  template: any;
}
// 模型事件Vo
export interface BizSchemaEventVo {
  // 绑定类型
  bindType: string;

  // 事件类型
  eventType: string;

  // 主键
  id: string;

  // 入参关系映射
  inputJson: string;

  // 输入参数模型编码
  inputSchemaCode: string;

  // 业务集成方法编码
  methodCode: string;

  // 名称
  name: string;

  // 出参关系映射
  outputJson: string;

  // 输出参数模型编码
  outputSchemaCode: string;

  // 绑定业务规则id
  ruleId: string;

  // 模型编码
  schemaCode: string;

  // 业务集成服务编码
  serviceCode: string;
}
// 模型分组vo
export interface BizSchemaGroupVo {
  // 应用编码
  appCode: string;

  // 子级
  children: Array<BizSchemaGroupVo>;

  // 主键
  id: string;

  // 名称
  name: string;

  // 父级id
  parentId: string;
}
// 数据模型
export interface BizSchemaVo {
  // 应用编码
  appCode: string;

  // 编码
  code: string;

  // 分组id
  groupId: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 名称
  name: string;

  // 数据项列表
  propertys: Array<BizPropertyVo>;

  // 是否已发布
  published: boolean;

  // 是否是快捷链接
  quickLink: boolean;

  // 标题
  title: string;

  // 模型类型
  type: string;

  // 视图列表
  views: Array<BizViewVo>;

  // 移动端可见
  visibleMobile: boolean;

  // pc可见
  visiblePc: boolean;
}
// 无
export interface BizServerOption {
  // 无
  bizMethod: CodeNameBo;

  // 无
  bizRule: IdNameBo;

  // 无
  bizService: CodeNameBo;

  // 无
  input: JsonSchema;

  // 无
  output: JsonSchema;
}
// 业务服务目录Vo对象
export interface BizServiceCategoryVo {
  // 主键
  id: string;

  // 名称
  name: string;

  // 目录下服务列表
  serviceList: Array<BizServiceVo>;
}
// 业务服务方法编码Vo对象
export interface BizServiceMethodCodeVo {
  // 方法编码
  methodCode: string;

  // 业务服务编码
  serviceCode: string;
}
// 业务方法Vo对象
export interface BizServiceMethodVo {
  // 编码
  code: string;

  // 业务方法配置项
  config: any;

  // 输入参数
  input: JsonSchema;

  // 名称
  name: string;

  // 返回值
  output: JsonSchema;

  // 协议类型
  protocolType: string;

  // 服务编码
  serviceCode: string;
}
// 业务服务Vo对象
export interface BizServiceVo {
  // 分类id
  categroyId: string;

  // 编码
  code: string;

  // 业务服务配置项
  config: any;

  // id
  id: string;

  // 名称
  name: string;

  // 协议类型
  protocolType: string;
}
// 视图操作按钮对象
export interface BizViewActionVo {
  // 动作编码
  actionCode: string;

  // 动作名称
  actionName: string;

  // 动作类型
  actionType: string;

  // 客户端类型
  clientType: string;

  // 关联编码，表单编码或流程编码
  correlationCode: string;

  // 关联类型
  correlationType: string;

  // 主键
  id: string;

  // 模型编码
  schemaCode: string;

  // 排序值
  sortKey: number;

  // 视图编码
  viewCode: string;
}
// 视图展示字段VO对象
export interface BizViewColumnVo {
  // 客户端类型
  clientType: string;

  // 显示格式
  displayFormat: any;

  // 显示名称
  displayName: string;

  // 主键
  id: string;

  // 数据项编码
  propertyCode: string;

  // 数据项类型
  propertyType: string;

  // 模型编码
  schemaCode: string;

  // 排序值
  sortKey: number;

  // 视图编码
  viewCode: string;

  // 宽度
  width: number;
}
// 视图查询条件Vo对象
export interface BizViewConditionVo {
  // 客户端类型
  clientType: string;

  // 默认值
  defaultValue: any;

  // 默认值类型, 空：empty, 固定值：fixed, 其他的默认值类型由前端定义
  defaultValueType: string;

  // 显示格式
  displayFormat: any;

  // 显示名称
  displayName: string;

  // 主键
  id: string;

  // 数据项编码
  propertyCode: string;

  // 数据项类型
  propertyType: string;

  // 模型编码
  schemaCode: string;

  // 排序值
  sortKey: number;

  // 视图编码
  viewCode: string;

  // 是否可见
  visible: boolean;
}
// 视图数据查询参数Vo
export interface BizViewDataQueryVo {
  // 是否去重
  distinct: boolean;

  // 查询字段
  fields: Array<string>;

  // 过滤条件
  filters: Array<BizObjectFilterVo>;

  // 开始页数
  pageNum: number;

  // 每页查询数量, 最大100
  pageSize: number;

  // 模型编码
  schemaCode: string;

  // 排序条件
  sorts: Array<BizObjectSortVo>;

  // 视图编码
  viewCode: string;
}
// 视图查询vo对象
export interface BizViewQueryVo {
  // 客户端类型
  clientType: string;

  // 视图编码
  code: string;

  // 模型编码
  schemaCode: string;
}
// 视图排序对象
export interface BizViewSortVo {
  // 客户端类型
  clientType: string;

  // 主键
  id: string;

  // 数据项编码
  propertyCode: string;

  // 数据项名称
  propertyName: string;

  // 数据项类型
  propertyType: string;

  // 模型编码
  schemaCode: string;

  // 排序值
  sortKey: number;

  // 排序类型
  sortType: string;

  // 视图编码
  viewCode: string;
}
// 设置视图显示端vo对象
export interface BizViewVisibleVo {
  // 视图编码
  code: string;

  // 模型编码
  schemaCode: string;

  // 移动端可见
  visibleMobile: boolean;

  // pc可见
  visiblePc: boolean;
}
// 视图vo对象
export interface BizViewVo {
  // 操作按钮
  actions: Array<BizViewActionVo>;

  // 客户端类型
  clientType: string;

  // 视图编码
  code: string;

  // 展示字段
  columns: Array<BizViewColumnVo>;

  // 查询条件
  conditions: Array<BizViewConditionVo>;

  // 关联编码，表单编码或流程编码
  correlationCode: string;

  // glue源码
  glueSource: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 视图名称
  name: string;

  // 数据项
  propertys: Array<BizPropertyVo>;

  // 发布状态
  published: boolean;

  // 模型编码
  schemaCode: string;

  // 模型类型
  schemaType: string;

  // 排序值
  sortKey: number;

  // 排序字段
  sorts: Array<BizViewSortVo>;

  // 移动端可见
  visibleMobile: boolean;

  // pc可见
  visiblePc: boolean;
}
// 计算结果VO
export interface CalculateResultVo {
  // 当计算出现异常时有值
  errorMsg: string;

  // 计算字段编码
  propertyCode: string;

  // 计算字段模型编码
  schemaCode: string;

  // 计算结果，批量计算时，该值是一个数组
  value: any;
}
// 计算参数VO
export interface CalculateVo {
  // 是否是批量计算
  batchCalculate: boolean;

  // 批量计算行数
  calculateRowCount: number;

  // 计算公式
  formulaExp: string;

  // 主模型编码
  mainSchemaCode: string;

  // 计算字段编码
  propertyCode: string;

  // 计算字段类型
  propertyType: string;

  // 计算字段模型编码
  schemaCode: string;

  // 计算变量
  variables: any;
}
// 修改拥有者VO
export interface ChangeOwnerVo {
  // 流程id
  instanceId: string;

  // 拥有者部门id
  ownerDepartmentId: string;

  // 拥有者id
  ownerId: string;
}
// 图表vo
export interface ChartVo {
  // 授权类型
  authorization: string;

  // 数据源
  dataSource: DataSourceVo;

  // 主键
  id: string;

  // 名称
  name: string;

  // 配置项
  opts: any;

  // 父级id
  parentId: string;

  // 图表定位
  position: any;

  // 图表类型
  type: string;
}
// 无
export interface CodeNameBo {
  // 无
  code: string;

  // 无
  name: string;
}
// 编码名称基础对象vo
export interface CodeNameVo {
  // 编码
  code: string;

  // 名称
  name: string;
}
// 编码基础对象vo
export interface CodeVo {
  // 编码
  code: string;
}
// 无
export interface ConditionItem {
  // 无
  formula: string;

  // 无
  source: Property;

  // 无
  value: any;

  // 无
  valueType: string;
}
// 无
export interface CorrelationObject {
  // 无
  id: string;

  // 无
  name: string;

  // 无
  schemaCode: string;
}
// 无
export interface CustomOption {
  // 无
  key: string;

  // 无
  text: string;
}
// 仪表盘vo
export interface DashboardVo {
  // 应用编码
  appCode: string;

  // 图表
  cells: Array<ChartVo>;

  // 编码
  code: string;

  // 全局过滤
  filters: any;

  // 全局配置
  global: any;

  // 分组id
  groupId: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 最后修改时间
  modifiedTime: string;

  // 名称
  name: string;

  // 定位
  positions: Array<Position>;

  // 是否发布
  published: boolean;

  // 最后一次发布时间
  publishedTime: string;

  // 是否是快捷链接
  quickLink: boolean;

  // 是否移动端可见
  visibleMobile: boolean;

  // 是否PC可见
  visiblePc: boolean;
}
// 报表数据源列表vo
export interface DataSourceListVo {
  // 模型数据源
  modelDataSources: Array<FunTreeVo>;

  // sql数据源
  sqlDataSources: Array<SqlDataSourceVo>;
}
// 报表数据源vo
export interface DataSourceVo {
  // 数据源id
  id: string;

  // 数据源名称
  name: string;

  // 数据源类型
  type: string;
}
// 部门对象
export interface DepartmentVo {
  // 子级
  children: Array<DepartmentVo>;

  // 部门全路径名称
  fullDeptName: string;

  // 是否有子级
  hasChildren: boolean;

  // 主键
  id: string;

  // 部门主管
  manager: UserVo;

  // 部门主管id
  managerId: string;

  // 部门名称
  name: string;

  // 组织id
  orgId: string;

  // 组织信息
  organization: OrganizationVo;

  // 父级部门对象
  parentDepartment: DepartmentVo;

  // 父级id
  parentId: string;

  // 是否是组织对应的部门
  rootOrg: boolean;

  // 部门类型：ACTUAL:实体部门，QUOTE:引用部门
  type: string;

  // 组织类型
  unitType: string;

  // 用户数量
  userCounts: number;

  // 用户列表
  userList: Array<UserVo>;
}
// 部门用户id集合对象
export interface DeptUserIdsVO {
  // 部门id
  deptId: string;

  // 用户id集合
  userIds: Array<string>;
}
// 无
export interface DictOption {
  // 无
  id: string;

  // 无
  name: string;
}
// 报表纬度字段Vo
export interface DimensionPropertyVo {
  // 别名
  alias: string;

  // 编码
  code: string;

  // 数据项类型
  dataType: string;

  // 格式化
  format: any;

  // 主键
  id: string;

  // 名称
  name: string;

  // 模型编码
  schemaCode: string;

  // 字段类型
  type: string;
}
// 文件对象
export interface DocumentFileVo {
  // 创建时间
  createTime: string;

  // 创建人
  createdBy: string;

  // 过期时间
  expireTime: string;

  // 文件名称
  fileName: string;

  // 文件大小（单位字节）
  fileSize: number;

  // ID
  id: string;

  // 文件后缀名
  suffix: string;
}
// 导出进度vo
export interface ExportProgressVo {
  // 文档ID
  documentId: string;

  // 错误信息，当状态为ERROR时有值
  errorMsg: string;

  // PROGRESS 进行中 TEMP 暂存  DONE 已完成
  status: string;
}
// 导出参数vo
export interface ExportVo {
  // 参数
  params: any;

  // 导入导出类型
  type: string;
}
// 无
export interface Expression {
  // 无
  editorMark: string;

  // 无
  editorText: string;

  // 无
  formula: string;

  // 无
  precision: number;

  // 无
  targetType: string;
}
// 外链提交对象Vo
export interface ExternalSubmitVo {
  // 主表数据
  data: any;

  // 子表数据
  sheetDatas: Array<BizObjectSheetSubmitVo>;

  // 外链短码
  shortCode: string;
}
// 红数字VO
export interface FigureVo {
  // 待阅任务数量
  circulateCount: number;

  // 进行中的流程数量
  runtimeInstanceCount: number;

  // 发起流程数量
  startInstanceCount: number;

  // 未读消息数
  unReadMessageCount: number;

  // 待办任务数量
  workItemCount: number;
}
// bool标志vo
export interface FlagVo {
  // 是否标志
  flag: boolean;
}
// 表单编码Vo对象
export interface FormCodesVo {
  // 表单编码
  codes: Array<string>;

  // 模型编码
  schemaCode: string;
}
// 表单数据VO
export interface FormDataVo {
  // 操作权限
  actionPermission: ActionPermissionVo;

  // 表单配置
  bizFormVo: BizFormVo;

  // 业务对象数据
  bizObjectData: any;

  // 业务对象id
  bizObjectId: string;

  // 主模型
  bizSchemaVo: BizSchemaVo;

  // 数据项权限
  dataPermissionList: Array<Array<any>>;

  // 表单评论列表
  formCommentVoList: Array<BizFormCommentVo>;

  // 表单提醒
  formRemind: FormRemindVo;

  // 表单类型
  formTypeEnum: string;

  // 数据项权限
  propertyPermissions: Array<PropertyPermissionVo>;

  // 主模型编码
  schemaCode: string;

  // 模型类型
  schemaType: string;

  // 子表数据
  sheetDatas: any;

  // 表单状态， 默认预览状态
  status: string;

  // 是否是暂存状态
  temporaryFlag: boolean;
}
// 表单提醒设置VO
export interface FormRemindVo {
  // 业务数据id
  bizObjectId: string;

  // 提醒内容
  content: string;

  // 表单编码
  formCode: string;

  // 表单类型
  formType: string;

  // 流程实例id
  instanceId: string;

  // 提醒时间
  remindTime: string;

  // 模型编码
  schemaCode: string;

  // 提醒标题
  title: string;

  // 任务id
  workItemId: string;
}
// 模型功能树VO
export interface FunTreeVo {
  // 子级
  children: Array<FunTreeVo>;

  // 编码
  code: string;

  // 启用状态
  enabled: boolean;

  // 功能类型
  funType: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 名称
  name: string;

  // 父级id
  parentId: string;

  // 发布状态
  published: boolean;

  // 是否是快捷链接
  quickLink: boolean;

  // 排序索引
  sortIndex: number;
}
// 获取rsa公钥
export interface GenKeyResultVo {
  // 生成批次号
  genBatchId: string;

  // 公钥
  publicKey: string;
}
// id基础对象vo
export interface IDVo {
  // id
  id: string;
}
// 无
export interface IdNameBo {
  // 无
  id: string;

  // 无
  name: string;
}
// id名称基础对象vo
export interface IdNameVo {
  // id
  id: string;

  // 名称
  name: string;
}
// 导入进度vo
export interface ImportProgressVo {
  // 文档ID
  documentId: string;

  // 错误信息，当状态为ERROR时有值
  errorMsg: string;

  // 失败条数
  errorTotal: number;

  // ERROR 失败 PROGRESS 进行中 TEMP 暂存  DONE 已完成
  status: string;

  // 成功条数
  successTotal: number;

  // 总条数
  total: number;
}
// 导入参数vo
export interface ImportVo {
  // 文档id
  documentId: string;

  // 参数
  params: any;

  // 导入导出类型
  type: string;
}
// 增量消息通知Vo
export interface IncrementNotifyVo {
  // 无
  body: string;

  // 无
  event: string;

  // 无
  orgId: string;

  // 无
  sendTime: string;
}
// 流程节点轨迹VO
export interface InstanceActivityVo {
  // 进行中的审批人
  activatedApprover: Array<ParticipantVo>;

  // 节点编码
  activityCode: string;

  // 节点名称
  activityName: string;

  // 节点状态
  activityStatus: string;

  // 节点类型
  activityType: string;

  // 审批日志
  approvalLogList: Array<ApprovalLogVo>;

  // 传阅列表
  circulateList: Array<ActivityCirculateVo>;

  // 节点耗时
  duration: number;

  // 节点完成时间
  finishTime: string;

  // 是否自动通过
  skip: boolean;

  // 节点开始时间
  startTime: string;

  // 子流程
  subInstanceList: Array<SubInstanceLogVo>;

  // 未启动的审批人
  suspendApprover: Array<ParticipantVo>;

  // 未完成的审批人
  unfinishedApprover: Array<ParticipantVo>;
}
// 流程取消VO
export interface InstanceCancelVo {
  // 流程id
  instanceId: string;

  // 工作项id
  workItemId: string;
}
// 激活流程节点VO
export interface InstanceNodeActivatelVo {
  // 流程id
  instanceId: string;

  // 节点id
  nodeId: string;
}
// 调整节点参与者VO
export interface InstanceNodeAdjustParticipantVo {
  // 流程id
  instanceId: string;

  // 节点id
  nodeId: string;

  // 参与者id
  participants: Array<string>;
}
// 取消流程节点VO
export interface InstanceNodeCancelVo {
  // 流程id
  instanceId: string;

  // 节点id
  nodeIds: Array<string>;
}
// 流程跟踪VO
export interface InstanceTrackVo {
  // 权限
  actionPermission: ActionPermissionVo;

  // 流程节点审批日志
  approvalLogs: Array<InstanceActivityVo>;

  // 流程基本信息
  instance: WorkflowInstanceVo;

  // 流程节点审批日志-移动端
  mobileApprovalLogs: Array<InstanceActivityVo>;

  // 运行时节点信息-节点名称、参与者
  runtimeActivitys: Array<InstanceActivityVo>;

  // 版本号
  version: number;

  // 流程模版
  workflowTemplate: any;
}
// 流程催办VO
export interface InstanceUrgeVo {
  // 流程id
  instanceId: string;

  // 催办消息
  msg: string;
}
// 无
export interface JsonSchema {
  // 无
  code: string;

  // 无
  items: JsonSchema;

  // 无
  name: string;

  // 无
  op: string;

  // 无
  propertys: Array<JsonSchema>;

  // 无
  schemaCode: string;

  // 无
  type: string;

  // 无
  value: any;

  // 无
  valueType: string;
}
// 无
export interface LicenseCheckModel {
  // 无
  cpuSerial: string;

  // 无
  ipAddress: Array<string>;

  // 无
  macAddress: Array<string>;

  // 无
  mainBoardSerial: string;

  // 无
  userAmount: number;
}
// License详情
export interface LicenseInfoVo {
  // 可被允许的CPU序列号
  cpuSerial: string;

  // 证书描述
  description: string;

  // 证书失效时间
  expiryTime: string;

  // 可被允许的IP地址
  ipAddress: Array<string>;

  // 证书生效时间
  issuedTime: string;

  // 可被允许的MAC地址
  macAddress: Array<string>;

  // 可被允许的主板序列号
  mainBoardSerial: string;

  // 证书名称
  subject: string;

  // 用户数量，0表示不限制
  userAmount: number;
}
// 列表打印数据查询vo
export interface ListTemplateDataQueryVo {
  // id集合
  ids: Array<string>;

  // 是否加载审批日志
  loadApprovalInfo: boolean;

  // 模型编码
  schemaCode: string;

  // 子表编码列表
  sheetCodeList: Array<string>;
}
// 列表打印数据vo
export interface ListTemplateDataVo {
  // 主表数据项列表
  bizPropertyVoList: Array<BizPropertyVo>;

  // 主表数据
  dataMapList: Array<Mapstringobject>;

  // 流程实例信息
  instanceInfoMap: any;

  // 审批日志数据
  logMap: any;
}
// 加载表单数据参数对象VO
export interface LoadFormDataParamVo {
  // 业务对象id
  bizObjectId: string;

  // 是否编辑
  edit: boolean;

  // 表单编码
  formCode: string;

  // 模型编码
  schemaCode: string;
}
// 加载表单子表数据参数对象VO
export interface LoadFormSheetDataParamVo {
  // 业务对象id
  bizObjectId: string;

  // 表单类型
  formType: string;

  // 流程实例id
  instanceId: string;

  // 模型编码
  schemaCode: string;

  // 子表编码，查询子表数据时使用
  sheetCode: string;

  // 工作项id
  workItemId: string;
}
// 加载流程表单数据参数对象VO
export interface LoadWorkflowFormDataParamVo {
  // 节点编码
  activityCode: string;

  // 是否编辑
  edit: boolean;

  // 流程实例id
  instanceId: string;

  // 子表编码，查询子表数据时使用
  sheetCode: string;

  // 工作项id
  workItemId: string;

  // 流程模版编码
  workflowCode: string;
}
// 登录信息对象
export interface LoginVo {
  // 生成密钥批次id
  batchId: string;

  // 账号
  code: string;

  // 组织ID
  orgId: string;

  // 密码
  password: string;
}
// 无
export interface MapstringListBizPropertyVo {}
// 无
export interface MapstringListMapstringobject {}
// 无
export interface Mapstringobject {}
// 消息Vo
export interface MessageVo {
  // 内容
  content: string;

  // 消息id
  id: string;

  // 链接配置
  linkConfig: any;

  // 链接类型
  linkType: string;

  // 是否已读
  read: boolean;

  // 接收时间
  receiveTime: string;

  // 标题
  title: string;
}
// 业务方法调用参数vo对象
export interface MethodInvokeParamVo {
  // 参数
  args: any;

  // 业务方法编码
  methodCode: string;

  // 分页开始行
  pageNum: number;

  // 分页查询记录条数
  pageSize: number;

  // 业务服务编码
  serviceCode: string;
}
// 报表指标字段Vo
export interface MetricPropertyVo {
  // 聚合函数
  agg: string;

  // 别名
  alias: string;

  // 编码
  code: string;

  // 数据项类型
  dataType: string;

  // 主键
  id: string;

  // 名称
  name: string;

  // 模型编码
  schemaCode: string;

  // 字段类型
  type: string;
}
// 模型功能重命令VO
export interface ModelFunRenameVo {
  // id
  id: string;

  // 名称
  name: string;

  // 类型
  type: string;
}
// 模型功能排序VO
export interface ModelFunSortVo {
  // id
  id: string;

  // 父级id
  parentId: string;

  // 排序索引
  sortIndex: number;

  // 类型
  type: string;
}
// 移动图表参数vo
export interface MoveChartVo {
  // 仪表盘id
  id: string;

  // 图表定位
  positions: Array<Position>;
}
// 名称基础对象vo
export interface NameVo {
  // 名称
  name: string;
}
// 无
export interface OAuth2AccessToken {
  // 无
  additionalInformation: any;

  // 无
  expiration: string;

  // 无
  expired: boolean;

  // 无
  expiresIn: number;

  // 无
  refreshToken: OAuth2RefreshToken;

  // 无
  scope: Array<string>;

  // 无
  tokenType: string;

  // 无
  value: string;
}
// 无
export interface OAuth2RefreshToken {
  // 无
  value: string;
}
// OLAP过滤条件vo
export interface OlapFilterVo {
  // 无
  dynamic: Array<Array<ConditionItem>>;

  // 无
  source: Array<Array<ConditionItem>>;
}
// OLAP数据分析查询vo
export interface OlapQueryVo {
  // 无
  authorization: string;

  // 图表id
  chartId: string;

  // 列维度
  columnDimensions: Array<DimensionPropertyVo>;

  // 数据源id
  dataSourceId: string;

  // 数据源类型
  dataSourceType: string;

  // 维度
  dimensions: Array<DimensionPropertyVo>;

  // 过滤条件
  filters: OlapFilterVo;

  // 结果条数
  limit: number;

  // 指标
  metrics: Array<MetricPropertyVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 行维度
  rowDimensions: Array<DimensionPropertyVo>;

  // 排序
  sorts: Array<SortPropertyVo>;

  // 图表类型
  type: string;
}
// openapi接口发起流程VO
export interface OpenApiStartWorkflowVo {
  // 表单数据
  data: any;

  // 指定发起人部门id，为空默认是用户主部门
  originatorDepartmentId: string;

  // 流程编码
  workflowCode: string;
}
// 组织归属校验查询Vo对象
export interface OrgAscriptionCheckVo {
  // 左：用户、部门id
  lefts: Array<UnitVo>;

  // 操作符，只支持：属于、不属于、拥有、不拥有
  op: string;

  // 右：用户、部门id
  rights: Array<UnitVo>;
}
// 组织记录查询VO
export interface OrgSyncRecordQueryVo {
  // 处理时间区间
  beginTime: string;

  // 处理时间区间
  endTime: string;

  // 组织Id
  orgId: string;

  // 页码
  pageNum: number;

  // 页容量
  pageSize: number;

  // 状态
  status: boolean;
}
// 组织同步记录vo
export interface OrgSyncRecordVo {
  // 错误信息
  errorMsg: string;

  // 增量事件类型
  event: string;

  // 主键
  id: string;

  // 组织Id
  orgId: string;

  // 组织名称
  orgName: string;

  // 处理时间
  processTime: string;

  // 重试次数
  retryTimes: number;

  // 发送时间
  sendTime: string;

  // 执行结果 1:成功 0:失败
  status: boolean;

  // 参数
  syncJson: string;

  // 同步类型，fullSync:全量同步,incrementSync:增量同步
  syncType: string;
}
// 组织架构图vo
export interface OrganizationChartVo {
  // 子级
  children: Array<OrganizationChartVo>;

  // 部门id
  id: string;

  // 部门名称
  name: string;
}
// 组织VO对象
export interface OrganizationVo {
  // 对应的部门ID
  departmentId: string;

  // 主键
  id: string;

  // 维护类型：SYS：自维护，DINGTALK:钉钉，WECHAT:微信
  maintainType: string;

  // 名称
  name: string;

  // 上级部门ID
  parentDepartmentId: string;

  // 上级部门名称
  parentDepartmentName: string;

  // 组织集成配置
  relatedConfig: string;

  // 组织状态: ENABLE:启用，DISABLE：禁用
  status: string;
}
// 分页对象
export interface PageVOAdminVo {
  // 查询数据
  list: Array<AdminVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOAtUserQueryResultVo {
  // 查询数据
  list: Array<AtUserQueryResultVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOMapstringobject {
  // 查询数据
  list: Array<Mapstringobject>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOMessageVo {
  // 查询数据
  list: Array<MessageVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOOrgSyncRecordVo {
  // 查询数据
  list: Array<OrgSyncRecordVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOSysApiLogVo {
  // 查询数据
  list: Array<SysApiLogVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOSysJobVo {
  // 查询数据
  list: Array<SysJobVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOSystemDictVo {
  // 查询数据
  list: Array<SystemDictVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOTagUnitVo {
  // 查询数据
  list: Array<TagUnitVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOUserVo {
  // 查询数据
  list: Array<UserVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOWorkItemVo {
  // 查询数据
  list: Array<WorkItemVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 分页对象
export interface PageVOWorkflowInstanceVo {
  // 查询数据
  list: Array<WorkflowInstanceVo>;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 总记录数
  total: number;
}
// 参与者信息VO
export interface ParticipantVo {
  // 头像
  avatar: string;

  // 部门名称
  departmentName: string;

  // 是否是委托任务
  entrust: boolean;

  // ID
  id: string;

  // 名称
  name: string;

  // 来自谁-用户id，转办、协办、加签、委托任务有值
  sourceUserId: string;

  // 来自谁-用户名称，转办、协办、加签、委托任务有值
  sourceUserName: string;

  // 任务类型
  workItemType: string;
}
// 无
export interface Position {}
// 预测参与者VO
export interface PredictParticipantVo {
  // 表单数据
  data: any;

  // 发起人部门id
  originatorDepartmentId: string;

  // 发起人id
  originatorId: string;

  // 流程编码
  workflowCode: string;

  // 流程版本号
  workflowVersion: number;
}
// 无
export interface Property {
  // 无
  code: string;

  // 无
  name: string;

  // 无
  schemaCode: string;

  // 无
  schemaName: string;

  // 无
  sheetCode: string;

  // 无
  sheetName: string;

  // 无
  type: string;
}
// 无
export interface PropertyOption {
  // 无
  bizServerOption: BizServerOption;

  // 无
  customOptions: Array<CustomOption>;

  // 无
  dataSourceType: string;

  // 无
  dict: DictOption;

  // 无
  dictSortType: string;
}
// 无
export interface PropertyPermissionTrait {
  // 无
  editable: boolean;

  // 无
  required: boolean;

  // 无
  visible: boolean;
}
// 数据项权限VO
export interface PropertyPermissionVo {
  // 新增时权限
  editable: boolean;

  // 数据项编码
  propertyCode: string;

  // 数据项名称
  propertyName: string;

  // 新增时权限
  required: boolean;

  // 模型编码
  schemaCode: string;

  // 模型名称
  schemaName: string;

  // 子表编码
  sheetCode: string;

  // 新增时权限
  visible: boolean;
}
// 查询子级部门参数对象
export interface QueryChildDeptVo {
  // 父级id
  parentId: string;
}
// 查询组织树参数对象
export interface QueryUnitTreeVo {
  // 搜索关键字
  keyword: string;

  // 组织id，查询指定组织，为空返回所有组织
  orgIds: Array<string>;

  // 父级id
  parentId: string;

  // 根节点id
  roots: Array<string>;

  // 组织树类型,DEPARTMENT:部门,USER:用户
  unitType: string;
}
// 查询用户
export interface QueryUserVo {
  // 搜索关键字
  keyword: string;

  // 页码
  pageIndex: number;

  // 页容量
  pageSize: number;
}
// 快捷链接功能vo
export interface QuickLinkFunVo {
  // 功能编码
  code: string;

  // 类型
  type: string;
}
// 快捷链接
export interface QuickLinkVo {
  // 应用编码
  appCode: string;

  // 表单编码，当类型为数据模型时有值
  formCode: string;

  // 功能编码
  funCode: string;

  // 功能id
  funId: string;

  // 功能名称
  funName: string;

  // 功能类型
  funType: string;

  // 图标
  icon: string;
}
// 删除数据项返回结果vo对象
export interface RemovePropertyVo {
  // 删除失败原因-存在业务规则引用
  bizRuleQuotes: Array<BizRuleQuotePropertyVo>;

  // 删除失败原因-存在数据条数
  dataCount: number;

  // 删除失败原因描述
  desc: string;

  // 是否成功删除
  success: boolean;
}
// 通用响应报文
export interface ResBody {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: any;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyAdminRolePermissionRangeVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: AdminRolePermissionRangeVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyAdminRoleVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: AdminRoleVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyAdvancedDataSourceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: AdvancedDataSourceVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyAppGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: AppGroupVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyAppPackageVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: AppPackageVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyAppPerGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: AppPerGroupVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyAppPermissionSettingVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: AppPermissionSettingVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizDataSourceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizDataSourceVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizFormTemplateVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizFormTemplateVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizFormVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizFormVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizMenuVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizMenuVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizPropertyVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizPropertyVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizRulePropertyVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizRulePropertyVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizRuleVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizRuleVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizSchemaEventVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizSchemaEventVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizSchemaGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizSchemaGroupVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizSchemaVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizSchemaVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizServiceCategoryVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizServiceCategoryVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizServiceMethodVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizServiceMethodVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizServiceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizServiceVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyBizViewVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: BizViewVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyChartVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: ChartVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyDashboardVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: DashboardVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyDataSourceListVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: DataSourceListVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyDepartmentVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: DepartmentVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyDocumentFileVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: DocumentFileVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyExportProgressVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: ExportProgressVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyFigureVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: FigureVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyFormDataVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: FormDataVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyFormRemindVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: FormRemindVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyGenKeyResultVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: GenKeyResultVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyImportProgressVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: ImportProgressVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyInstanceTrackVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: InstanceTrackVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyLicenseCheckModel {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: LicenseCheckModel;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyLicenseInfoVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: LicenseInfoVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListTemplateDataVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: ListTemplateDataVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListAdvancedDataSourceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<AdvancedDataSourceVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListAppGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<AppGroupVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListAppPackageVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<AppPackageVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListAppPerGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<AppPerGroupVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizDataSourceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizDataSourceVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizFormCommentVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizFormCommentVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizFormTemplateVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizFormTemplateVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizFormVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizFormVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizObjectBo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizObjectBo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizPropertyFormulaVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizPropertyFormulaVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizPropertyVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizPropertyVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizRulePropertyVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizRulePropertyVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizRuleVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizRuleVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizSchemaEventVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizSchemaEventVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizSchemaGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizSchemaGroupVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizSchemaVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizSchemaVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizServiceCategoryVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizServiceCategoryVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizServiceMethodVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizServiceMethodVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizServiceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizServiceVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListBizViewVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<BizViewVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListCalculateResultVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<CalculateResultVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListDepartmentVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<DepartmentVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListFunTreeVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<FunTreeVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListInstanceActivityVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<InstanceActivityVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListMapstringobject {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<Mapstringobject>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListMessageVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<MessageVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListOrganizationVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<OrganizationVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListQuickLinkVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<QuickLinkVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListSchemaPermissionVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<SchemaPermissionVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListSchemaPropertyPermissionVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<SchemaPropertyPermissionVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListSecurityClientVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<SecurityClientVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListSystemDictConfigVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<SystemDictConfigVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListTagGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<TagGroupVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListTagTreeVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<TagTreeVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListUnitTreeVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<UnitTreeVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListUnitVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<UnitVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListUserCommonsVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<UserCommonsVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListUserVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<UserVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListValidateErrorMessageVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<ValidateErrorMessageVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListWorkItemVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<WorkItemVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListWorkflowDelegateVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<WorkflowDelegateVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListWorkflowDeploymentVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<WorkflowDeploymentVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListWorkflowHeaderVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<WorkflowHeaderVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListWorkflowNodeParticipantVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<WorkflowNodeParticipantVo>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyListstring {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: Array<string>;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyMapstringListBizPropertyVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: any;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyMapstringListMapstringobject {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: any;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyMapstringobject {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: any;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyOAuth2AccessToken {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: OAuth2AccessToken;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyOrganizationChartVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: OrganizationChartVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyOrganizationVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: OrganizationVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOAdminVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOAdminVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOAtUserQueryResultVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOAtUserQueryResultVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOMapstringobject {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOMapstringobject;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOMessageVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOMessageVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOOrgSyncRecordVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOOrgSyncRecordVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOSysApiLogVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOSysApiLogVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOSysJobVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOSysJobVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOSystemDictVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOSystemDictVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOTagUnitVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOTagUnitVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOUserVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOUserVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOWorkItemVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOWorkItemVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyPageVOWorkflowInstanceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: PageVOWorkflowInstanceVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyRemovePropertyVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: RemovePropertyVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodySchemaPermissionVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: SchemaPermissionVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodySecurityClientVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: SecurityClientVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodySysApiLogVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: SysApiLogVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodySysJobVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: SysJobVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodySystemDictVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: SystemDictVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyTagGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: TagGroupVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyTagVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: TagVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyUnitGroupVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: UnitGroupVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyUnitTreeSearchVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: UnitTreeSearchVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyUserMappingInfoVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: UserMappingInfoVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyUserVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: UserVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyViewCorrelationFormVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: ViewCorrelationFormVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyVoid {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyWorkflowDraftVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: WorkflowDraftVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyWorkflowFormDataVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: WorkflowFormDataVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyWorkflowHeaderVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: WorkflowHeaderVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyWorkflowInstanceVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: WorkflowInstanceVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyWorkflowNodeParticipantVo {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: WorkflowNodeParticipantVo;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyWxJsapiSignature {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: WxJsapiSignature;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyboolean {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: boolean;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodyobject {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: any;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 通用响应报文
export interface ResBodystring {
  // 业务key
  bizKey: string;

  // 状态码: 成功：200
  code: number;

  // 数据
  data: string;

  // 错误信息
  msg: string;

  // 调用链id
  traceId: string;
}
// 重置用户密码参数VO
export interface ResetUserPwdVo {
  // 密钥生成批次id
  batchId: string;

  // 用户密码
  password: string;

  // 用户id
  userId: string;
}
// 运行时预测参与者VO
export interface RuntimePredictParticipantVo {
  // 流程实例id
  instanceId: string;

  // 节点id
  nodeId: string;
}
// 保存角色权限Vo对象
export interface SaveAdminRolePermissionVo {
  // 角色id
  id: string;

  // 角色id
  name: string;

  // 角色权限
  permission: AdminRolePermissionVo;

  // 角色用户
  users: Array<UnitVo>;
}
// 保存管理员VO
export interface SaveAdminVo {
  // 用户ID
  userId: string;
}
// 保存模型权限VO
export interface SaveSchemaPermissionVo {
  // 应用编码
  appCode: string;

  // 权限组id
  groupId: string;

  // 模型权限
  schemaPermissions: Array<SchemaPermissionVo>;
}
// 保存流程模版配置vo
export interface SaveWorkflowTemplateVo {
  // 应用编码
  appCode: string;

  // 流程编码
  code: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 流程名称
  name: string;

  // 是否已发布
  published: boolean;

  // 模型编码
  schemaCode: string;

  // 外链短码
  shortLinkCode: string;

  // 是否启用外链
  shortLinkEnable: boolean;

  // 移动端是否可见
  visibleMobile: boolean;

  // pc是否可见
  visiblePc: boolean;

  // 可见类型：ALL：全部人员，ASSIGN：部分人员
  visibleType: string;

  // 流程模版
  workflowTemplate: string;
}
// 调度配置vo
export interface SchedulerConfVo {
  // 调度配置
  scheduleConf: string;

  // 调度类型
  scheduleType: string;
}
// 模型数据权限资源VO
export interface SchemaDataPermissionResource {
  // 权限类型
  defaultValue: string;

  // 权限资源
  resources: Array<CodeNameVo>;
}
// 模型数据权限VO
export interface SchemaDataPermissionVo {
  // 数据权限为自定义时：自定义条件
  conditionWrap: Array<Array<ConditionItem>>;

  // 权限类型
  type: string;
}
// 模型分组排序vo
export interface SchemaGroupSortVo {
  // 分组id
  id: string;

  // 父级id
  parentId: string;

  // 排序索引
  sortIndex: number;
}
// 模型权限资源VO
export interface SchemaPermissionResource {
  // 数据权限
  dataPermission: SchemaDataPermissionResource;

  // 功能类型
  funType: string;

  // 数据项权限
  propertyPermissions: Array<SchemaPropertyPermissionVo>;

  // 模型编码
  schemaCode: string;

  // 模型名称
  schemaName: string;

  // 按钮权限
  viewActionPermission: SchemaViewActionPermissionResource;

  // 可见权限
  visible: boolean;

  // 流程发起权限
  workflowPermissions: Array<SchemaWorkflowPermission>;
}
// 模型权限VO
export interface SchemaPermissionVo {
  // 数据权限
  dataPermission: SchemaDataPermissionVo;

  // 数据项权限
  propertyPermissions: Array<SchemaPropertyPermissionVo>;

  // 模型编码
  schemaCode: string;

  // 模型名称
  schemaName: string;

  // 按钮权限
  viewActionPermissions: Array<string>;

  // 可见权限
  visible: boolean;

  // 流程发起权限
  workflowPermissions: Array<SchemaWorkflowPermission>;
}
// 模型数据项编码vo
export interface SchemaPropertyCodeVo {
  // 主模型编码
  mainSchemaCode: string;

  // 数据项编码
  propertyCode: string;

  // 模型编码
  schemaCode: string;

  // 子表编码
  sheetCode: string;
}
// 数据项权限VO
export interface SchemaPropertyPermissionVo {
  // 新增时权限
  add: PropertyPermissionTrait;

  // 编码
  code: string;

  // 编辑时权限
  edit: PropertyPermissionTrait;

  // 名称
  name: string;

  // 预览时权限
  view: PropertyPermissionTrait;
}
// 模型排序vo
export interface SchemaSortVo {
  // 模型编码
  code: string;

  // 分组id
  groupId: string;

  // 排序索引
  sortIndex: number;
}
// 模型标题vo
export interface SchemaTitleVo {
  // 模型编码
  schemaCode: string;

  // 数据标题
  title: string;
}
// 视图按钮权限资源VO
export interface SchemaViewActionPermissionResource {
  // 已选权限
  codes: Array<string>;

  // 权限资源
  resources: Array<CodeNameVo>;
}
// 流程发起权限资源VO
export interface SchemaWorkflowPermission {
  // 流程编码
  code: string;

  // 移动端显示
  mobileDisplay: boolean;

  // 流程名称
  name: string;

  // PC显示
  pcDisplay: boolean;
}
// 查询定时任务vo
export interface SearchJobVo {
  // 执行处理器
  executorHandler: string;

  // 任务描述
  jobDesc: string;

  // 开始页数
  pageNum: number;

  // 每页显示数量
  pageSize: number;

  // 触发状态
  triggerStatus: string;
}
// 查询工作任务参数VO
export interface SearchWorkItemVo {
  // 节点名称
  activityName: string;

  // 审批时间
  approvalTime: Array<string>;

  // 审批人
  approver: string;

  // 作废时间
  cancelTime: Array<string>;

  // 流程实例名称
  instanceName: string;

  // 流程发起时间
  instanceStartTime: Array<string>;

  // 流程实例状态
  instanceStatus: string;

  // 发起人id
  originatorId: string;

  // 分页页数
  pageNum: number;

  // 分页条数
  pageSize: number;

  // 接收时间
  receiveTime: Array<string>;

  // 任务状态
  searchWorkItemStatus: string;

  // 单据号
  sequenceNo: string;

  // 流程定义编码
  workflowCode: string;
}
// 查询流程实例参数VO
export interface SearchWorkflowInstanceVo {
  // 作废时间
  instanceCancelTime: Array<string>;

  // 流程实例名称
  instanceName: string;

  // 流程发起时间
  instanceStartTime: Array<string>;

  // 发起人id
  originatorId: string;

  // 分页页数
  pageNum: number;

  // 分页条数
  pageSize: number;

  // 流程实例状态
  searchWorkflowInstanceStatus: string;

  // 单据号
  sequenceNo: string;

  // 流程定义编码
  workflowCode: string;
}
// 认证客户端配置vo
export interface SecurityClientVo {
  // 访问token有效时间
  accessTokenValiditySeconds: number;

  // 客户端id
  clientId: string;

  // 客户端名称
  clientName: string;

  // 客户端密钥
  clientSecret: string;

  // 创建时间
  createdTime: string;

  // id
  id: string;

  // 修改时间
  modifiedTime: string;

  // 刷新token有效时间
  refreshTokenValiditySeconds: number;
}
// 无
export interface SelfObject {
  // 无
  id: string;

  // 无
  name: string;

  // 无
  schemaCode: string;
}
// 无
export interface ShortLink {
  // 无
  bizObjectId: string;

  // 无
  formCode: string;

  // 无
  instanceId: string;

  // 无
  schemaCode: string;

  // 无
  type: string;

  // 无
  workflowCode: string;
}
// 审批附件
export interface SignFileVo {
  // 附件id
  id: string;

  // 附件名称
  name: string;

  // 附件大小
  size: number;
}
// 报表排序字段Vo
export interface SortPropertyVo {
  // 别名
  alias: string;

  // 编码
  code: string;

  // 数据项类型
  dataType: string;

  // 主键
  id: string;

  // 名称
  name: string;

  // 排序类型
  order: string;

  // 模型编码
  schemaCode: string;

  // 字段类型
  type: string;
}
// sql数据源vo
export interface SqlDataSourceVo {
  // 编码
  code: string;

  // 主键
  id: string;

  // 名称
  name: string;
}
// 发起流程VO
export interface StartWorkflowVo {
  // 主表数据
  data: any;

  // 流程实例id
  instanceId: string;

  // 发起人部门-未指定则使用用户的主部门
  originatorDepartment: UnitVo;

  // 子表数据
  sheetDatas: Array<BizObjectSheetSubmitVo>;

  // 流程编码
  workflowCode: string;
}
// 子流程日志VO
export interface SubInstanceLogVo {
  // 耗时
  duration: number;

  // 完成时间
  finishTime: string;

  // 流程id
  id: string;

  // 流程名称
  name: string;

  // 流程发起人
  originator: ParticipantVo;

  // 启动时间
  startTime: string;

  // 流程状态
  status: string;
}
// 组织同步VO
export interface SyncOrgVo {
  // 部门ID集合
  deptList: Array<string>;

  // 组织ID
  orgId: string;
}
// 系统api日志Vo
export interface SysApiLogVo {
  // 访问对象key
  accessKey: string;

  // 耗时
  duration: number;

  // 是否异常
  exception: boolean;

  // 异常信息
  exceptionInfo: string;

  // 主键id
  id: string;

  // 输入参数
  input: string;

  // ip
  ip: string;

  // 模块key
  moduleKey: string;

  // 操作行为
  operation: string;

  // 输出参数
  output: string;

  // 操作平台
  platform: string;

  // 操作时间
  time: string;

  // 调用链路id
  traceId: string;

  // 日志类型
  type: string;

  // 用户信息
  user: UnitVo;

  // 用户id
  userId: string;

  // 用户名称
  userName: string;
}
// 系统定时任务vo
export interface SysJobVo {
  // 创建时间
  createdTime: string;

  // 创建人
  creator: UnitVo;

  // 执行处理器
  executorHandler: string;

  // 执行参数
  executorParam: any;

  // 任务id
  id: string;

  // 任务描述
  jobDesc: string;

  // 修改时间
  modifiedTime: string;

  // 修改人
  modifier: UnitVo;

  // 调度配置
  scheduleConf: string;

  // 调度类型
  scheduleType: string;

  // 触发状态
  triggerStatus: string;
}
// 系统日志查询Vo
export interface SysLogSearchVo {
  // 访问对象key
  accessKey: string;

  // 模块key
  moduleKey: string;

  // 分页页数
  pageNum: number;

  // 分页条数
  pageSize: number;

  // 状态
  status: string;

  // 操作时间
  times: Array<string>;

  // 调用链id
  traceId: string;

  // 日志类型
  type: string;

  // 用户
  user: UnitVo;
}
// 字典配置vo
export interface SystemDictConfigVo {
  // 子数据项
  childList: Array<SystemDictConfigVo>;

  // 编码
  code: string;

  // 字典id
  dictId: string;

  // 状态
  enabled: boolean;

  // id
  id: string;

  // 编码
  name: string;

  // 父id
  parentId: string;

  // 备注
  remark: string;
}
// 字典查询vo
export interface SystemDictQueryVo {
  // 编码
  code: string;

  // 创建时间
  createdTimeBegin: string;

  // 创建时间
  createdTimeEnd: string;

  // 状态
  enabled: boolean;

  // 分组
  groupCode: string;

  // 名称
  name: string;

  // 页码
  pageNum: number;

  // 页容量
  pageSize: number;

  // 字典类型
  type: string;
}
// 字典vo
export interface SystemDictVo {
  // 编码
  code: string;

  // 字典项配置列表
  configList: Array<SystemDictConfigVo>;

  // 创建人id
  createdBy: string;

  // 创建人名称
  createdName: string;

  // 创建时间
  createdTime: string;

  // 状态
  enabled: boolean;

  // 分组
  groupCode: string;

  // id
  id: string;

  // 名称
  name: string;

  // 备注
  remark: string;

  // 字典类型
  type: string;
}
// 系统参数vo
export interface SystemParamsSettingVo {
  // 创建时间
  createTime: string;

  // 创建人
  creator: string;

  // 参数分组编码
  groupCode: string;

  // id
  id: string;

  // 修改人
  modifier: string;

  // 修改时间
  modifyTime: string;

  // 参数key
  paramsKey: string;

  // 参数value
  paramsValue: string;

  // 备注
  remarks: string;
}
// 标签组VO
export interface TagGroupVo {
  // 编码
  code: string;

  // 主键
  id: string;

  // 角色类型：系统自维护：SYS，钉钉：DINGTALK，微信：WECHAT
  maintainType: string;

  // 名称
  name: string;

  // 节点类型：组织:ORG，标签组：GROUP，标签：TAG
  nodeType: string;

  // 组织Id
  orgId: string;

  // 组织对象
  orgUnit: UnitVo;

  // 父级id
  parentId: string;
}
// 标签树形结构对象
export interface TagTreeVo {
  // 子级
  children: Array<TagTreeVo>;

  // 创建人
  createdBy: string;

  // 创建人名称
  createdName: string;

  // 创建人
  createdTime: string;

  // 主键
  id: string;

  // 角色类型：系统自维护：SYS，钉钉：DINGTALK，微信：WECHAT
  maintainType: string;

  // 名称
  name: string;

  // 节点类型：组织:ORG，标签组：GROUP，标签：TAG
  nodeType: string;

  // 组织Id
  orgId: string;

  // 组织
  organizationVo: OrganizationVo;

  // 父级id
  parentId: string;
}
// 标签组织id集合对象
export interface TagUnitIdsVo {
  // 标签id
  tagId: string;

  // 组织id集合
  unitIds: Array<string>;
}
// 标签组织维护请求参数Vo
export interface TagUnitReqVo {
  // 管理范围id
  ouScopes: Array<string>;

  // 标签id
  tagId: string;

  // 组织id
  unitIds: Array<string>;
}
// 标签组织Vo对象
export interface TagUnitVo {
  // 主键
  id: string;

  // 管理范围对象集合
  ouScopeUnits: Array<UnitVo>;

  // 用户
  unit: UnitVo;

  // 用户id
  unitId: string;
}
// 标签更新VO
export interface TagUpdateVo {
  // 角色组名称
  groupName: string;

  // 主键
  id: string;

  // 名称
  name: string;
}
// 标签VO
export interface TagVo {
  // 编码
  code: string;

  // 创建人
  createdBy: string;

  // 创建人
  createdName: string;

  // 创建时间
  createdTime: string;

  // 标签组ID
  groupId: string;

  // 主键
  id: string;

  // 角色类型：系统自维护：SYS，钉钉：DINGTALK，微信：WECHAT
  maintainType: string;

  // 名称
  name: string;

  // 节点类型：组织:ORG，标签组：GROUP，标签：TAG
  nodeType: string;

  // 组织Id
  orgId: string;

  // 组织
  orgUnit: UnitVo;

  // 父级id
  parentId: string;

  // 标签组
  tagGroupVo: TagGroupVo;
}
// 业务对象短文本唯一校验查询参数Vo
export interface UniqueValidateVo {
  // 业务数据id
  bizObjectId: string;

  // 数据项编码
  propertyCode: string;

  // 数据项值
  propertyValue: string;

  // 模型编码
  schemaCode: string;
}
// 组织聚合vo
export interface UnitGroupVo {
  // 无
  departmentList: Array<DepartmentVo>;

  // 无
  tagGroupList: Array<TagGroupVo>;

  // 无
  tagList: Array<TagVo>;

  // 无
  userList: Array<UserVo>;
}
// 组织树搜索结果vo对象
export interface UnitTreeSearchVo {
  // 返回记录条数
  returnCount: number;

  // 总记录条数
  totalCount: number;

  // 返回数据
  unitTrees: Array<UnitTreeVo>;

  // 组织类型，USER：用户，DEPARTMENT：部门
  unitType: string;
}
// 组织树形结构对象
export interface UnitTreeVo {
  // 头像
  avatar: string;

  // 子级集合
  children: Array<UnitTreeVo>;

  // 部门全路径名称
  departmentFullName: string;

  // 是否有子级
  hasChildren: boolean;

  // 主键
  id: string;

  // 名称
  name: string;

  // 部门查询编码
  queryCode: string;

  // 是否是我的部门
  selfDept: boolean;

  // 组织类型，USER：用户，DEPARTMENT：部门
  unitType: string;
}
// 无
export interface UnitValue {
  // 无
  avatar: string;

  // 无
  id: string;

  // 无
  name: string;

  // 无
  type: string;
}
// 组织Vo对象
export interface UnitVo {
  // 头像
  avatar: string;

  // 部门名称
  departmentName: string;

  // ID
  id: string;

  // 名称
  name: string;

  // 类型
  type: string;
}
// 修改仪表盘配置vo
export interface UpdateDashboardConfigVo {
  // 全局过滤
  filters: any;

  // 全局配置
  global: any;

  // 仪表盘id
  id: string;
}
// 用户修改密码vo对象
export interface UpdatePasswordVo {
  // 密钥生成
  batchId: string;

  // 新密码
  newPassword: string;

  // 原密码
  oldPassword: string;
}
// 修改离职用户备注
export interface UpdateUserRemarkVo {
  // 备注
  remarks: string;

  // 用户id
  userId: string;
}
// url基础对象vo
export interface UrlVo {
  // url
  url: string;
}
// 用户常用附件vo
export interface UserCommonsVo {
  // 附件信息
  fileVo: SignFileVo;

  // id
  id: string;

  // 用户id
  userId: string;
}
// 用户映射信息VO对象
export interface UserMappingInfoVo {
  // 用户账号
  code: string;

  // 邮箱
  email: string;

  // 工号
  employeeNo: string;

  // 入职日期
  entryDate: string;

  // 主键
  id: string;

  // 身份证号
  idCard: string;

  // 主部门
  mainDepartment: UnitVo;

  // 手机号
  mobile: string;

  // 用户名称
  name: string;

  // 上级部门
  parentDepartments: Array<UnitVo>;

  // 兼职部门
  partTimeDepartments: Array<UnitVo>;

  // 职位
  position: string;

  // 办公电话
  telphone: string;
}
// 用户权限VO
export interface UserPermissionVo {
  // 管理组权限
  adminRole: boolean;

  // 业务服务管辖权限
  bizServiceManage: boolean;

  // 新建应用权限
  createApp: boolean;

  // 新建应用分组权限
  createAppGroup: boolean;

  // 新建集成服务目录权限
  createBizServiceCategory: boolean;

  // 登录后端权限
  loginAdminSystem: boolean;

  // 组织管理权限
  organizationManage: boolean;

  // 角色管辖权限
  roleManage: boolean;

  // 系统管理员管理权限
  sysAdminManage: boolean;
}
// 用户工作交接vo
export interface UserTransferVo {
  // 部分交接时选中的数据列表
  paramsMap: any;

  // 接收人id
  receiveUserId: string;

  // 是否全部交接
  transferAll: boolean;

  // 交接类型
  transferType: string;

  // 交接人id
  transferUserId: string;
}
// 用户VO对象
export interface UserVo {
  // 头像
  avatar: string;

  // 用户账号
  code: string;

  // 部门id列表：用户所属的所有部门、包含主部门和兼职部门
  departmentIds: Array<string>;

  // 部门列表：用户所属的所有部门、包含主部门和兼职部门
  departments: Array<DepartmentVo>;

  // 邮箱
  email: string;

  // 工号
  employeeNo: string;

  // 入职日期
  entryDate: string;

  // 性别
  gender: number;

  // 主键
  id: string;

  // 身份证号
  idCard: string;

  // 主部门
  mainDepartment: DepartmentVo;

  // 主部门id
  mainDepartmentId: string;

  // 无
  manager: boolean;

  // 流程管理员管理模板编码列表
  managerWorkflowCodeList: Array<string>;

  // 手机号
  mobile: string;

  // 用户名称
  name: string;

  // 组织ID
  orgId: string;

  // 组织
  organization: OrganizationVo;

  // 兼职部门Id
  partTimeDepartmentIds: Array<string>;

  // 兼职部门
  partTimeDepartments: Array<DepartmentVo>;

  // 职位
  position: string;

  // 离职日期
  quitDate: string;

  // 备注
  remarks: string;

  // 状态:正常：ENABLE，禁用：DISABLE，离职：QUIT
  status: string;

  // 超级管理员，代表admin用户
  superAdmin: boolean;

  // 是否是系统管理员
  sysAdmin: boolean;

  // 标签Id列表
  tagIds: Array<string>;

  // 标签列表
  tags: Array<TagVo>;

  // 办公电话
  telphone: string;

  // 组织类型
  unitType: string;

  // 用户权限
  userPermission: UserPermissionVo;

  // 是否是流程管理员
  workflowManager: boolean;
}
// 流程模版校验错误信息vo
export interface ValidateErrorMessageVo {
  // 无
  errorLevel: string;

  // 模型编码
  errorMessage: string;
}
// 预览关联表单Vo
export interface ViewCorrelationFormVo {
  // 业务对象id
  bizObjectId: string;

  // 表单编码
  formCode: string;

  // 流程实例id
  instanceId: string;

  // 模型编码
  schemaCode: string;

  // 模型类型
  schemaType: string;
}
// 任务加签VO
export interface WorkItemAddParticipantVo {
  // 加签意见
  comment: string;

  // 参与者id集合
  participantIds: Array<string>;

  // 工作项id
  workItemId: string;
}
// 任务协办VO
export interface WorkItemAssistVo {
  // 协办意见
  comment: string;

  // 参与者id集合
  participantIds: Array<string>;

  // 工作项id
  workItemId: string;
}
// 任务批量审批VO
export interface WorkItemBatchSubmitVo {
  // 审批意见
  comment: string;

  // 签名附件
  signFileVo: SignFileVo;

  // 工作项id列表
  workItemIdList: Array<string>;
}
// 任务传阅VO
export interface WorkItemCirculateVo {
  // 传阅意见
  comment: string;

  // 参与者id集合
  participantIds: Array<string>;

  // 工作项id
  workItemId: string;
}
// 任务驳回VO
export interface WorkItemRejectVo {
  // 驳回节点编码
  activityCode: string;

  // 驳回意见
  comment: string;

  // 签名附件
  signFileVo: SignFileVo;

  // 是否可以直接提交到驳回的节点
  submitToReject: boolean;

  // 工作项id
  workItemId: string;
}
// 任务取回VO
export interface WorkItemRetrieveVo {
  // 工作项id
  workItemId: string;
}
// 任务提交VO
export interface WorkItemSubmitVo {
  // 审批意见
  comment: string;

  // 主表数据
  data: any;

  // 提交任务使用的部门id
  departmentId: string;

  // 子表数据
  sheetDatas: Array<BizObjectSheetSubmitVo>;

  // 签名附件
  signFileVo: SignFileVo;

  // 工作项id
  workItemId: string;
}
// 任务转办VO
export interface WorkItemTransferVo {
  // 转办意见
  comment: string;

  // 参与者id
  participantId: string;

  // 工作项id
  workItemId: string;
}
// 任务VO
export interface WorkItemVo {
  // 节点编码
  activityCode: string;

  // 节点名称
  activityName: string;

  // 任务受托人
  assignee: UnitVo;

  // 任务委托人
  assignor: UnitVo;

  // 传阅人
  circulatedBy: UnitVo;

  // 传阅人id
  circulatedById: string;

  // 耗时
  duration: number;

  // 是否是委托任务
  entrust: boolean;

  // 完成时间
  finishTime: string;

  // 表单编码
  formCode: string;

  // 主键
  id: string;

  // 流程实例id
  instanceId: string;

  // 流程实例名称
  instanceName: string;

  // 流程状态
  instanceStatus: string;

  // 发起人
  originator: UnitVo;

  // 发起人部门
  originatorDepartment: UnitVo;

  // 发起人部门id
  originatorDepartmentId: string;

  // 发起人id
  originatorId: string;

  // 参与者
  participant: UnitVo;

  // 参与者id
  participantId: string;

  // 接收时间
  receiveTime: string;

  // 处理结果
  resultStatus: string;

  // 单据号
  sequenceNo: string;

  // 任务状态
  status: string;

  // 停留时间-毫秒
  stayTime: number;

  // 是否超时
  timeout: boolean;

  // 超时状态
  timeoutStatus: string;

  // 任务类型
  type: string;

  // 是否催办
  urge: boolean;

  // 催办消息
  urgeMsg: string;

  // 流程模版编码
  workflowCode: string;

  // 流程模版名称
  workflowName: string;
}
// 流程委托
export interface WorkflowDelegateVo {
  // 受托人
  assignee: UnitVo;

  // 委托人
  assignor: UnitVo;

  // 委托结束时间
  endTime: string;

  // 主键
  id: string;

  // 委托开始时间
  startTime: string;

  // 委托类型
  type: string;

  // 委托流程
  workflows: Array<CodeNameVo>;
}
// 流程部署记录Vo
export interface WorkflowDeploymentVo {
  // 流程编码
  code: string;

  // 发布说明
  description: string;

  // 主键
  id: string;

  // 流程名称
  name: string;

  // 流程定义id
  procDefId: string;

  // 发布时间
  publishTime: string;

  // 发布人
  publisher: string;

  // 发布人名称
  publisherName: string;

  // 版本号
  version: number;
}
// 流程定义草稿
export interface WorkflowDraftVo {
  // 流程编码
  code: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 流程名称
  name: string;

  // 流程模版
  workflowTemplate: any;
}
// 参与者表达式校验
export interface WorkflowExprValidVo {
  // 表达式
  participantExpr: string;

  // 模型编码
  schemaCode: string;
}
// 流程表单数据VO
export interface WorkflowFormDataVo {
  // 操作权限
  actionPermission: ActionPermissionVo;

  // 节点编码
  activityCode: string;

  // 所有节点
  activitys: Array<ActivityVo>;

  // 流程节点审批日志
  approvalLogs: Array<InstanceActivityVo>;

  // 经办必填
  approvalRequired: boolean;

  // 表单配置
  bizFormVo: BizFormVo;

  // 业务对象数据
  bizObjectData: any;

  // 业务对象id
  bizObjectId: string;

  // 主模型
  bizSchemaVo: BizSchemaVo;

  // 数据项权限
  dataPermissionList: Array<Array<any>>;

  // 表单评论列表
  formCommentVoList: Array<BizFormCommentVo>;

  // 表单提醒
  formRemind: FormRemindVo;

  // 表单类型
  formTypeEnum: string;

  // 流程实例
  instance: WorkflowInstanceVo;

  // 流程实例id
  instanceId: string;

  // 数据项权限
  propertyPermissions: Array<PropertyPermissionVo>;

  // 可驳回的节点，当有驳回权限时有值
  rejectActivitys: Array<ActivityVo>;

  // 运行中的节点
  runtimeActivitys: Array<InstanceActivityVo>;

  // 主模型编码
  schemaCode: string;

  // 模型类型
  schemaType: string;

  // 子表数据
  sheetDatas: any;

  // 表单状态， 默认预览状态
  status: string;

  // 是否是暂存状态
  temporaryFlag: boolean;

  // 可查看的节点
  viewableActivitys: Array<InstanceActivityVo>;

  // 工作任务id
  workItemId: string;

  // 流程模版名称
  workflowName: string;
}
// 流程定义头
export interface WorkflowHeaderVo {
  // 应用编码
  appCode: string;

  // 流程编码
  code: string;

  // 图标
  icon: string;

  // 主键
  id: string;

  // 流程名称
  name: string;

  // 是否已发布
  published: boolean;

  // 模型编码
  schemaCode: string;

  // 外链短码
  shortLinkCode: string;

  // 是否启用外链
  shortLinkEnable: boolean;

  // 移动端是否可见
  visibleMobile: boolean;

  // pc是否可见
  visiblePc: boolean;

  // 可见类型：ALL：全部人员，ASSIGN：部分人员
  visibleType: string;
}
// 流程实例VO
export interface WorkflowInstanceVo {
  // 创建时间
  createTime: string;

  // 耗时
  duration: number;

  // 完成时间
  finishTime: string;

  // 主键
  id: string;

  // 流程实例id
  instanceId: string;

  // 流程实例名称
  name: string;

  // 发起人
  originator: UnitVo;

  // 发起人部门
  originatorDepartment: UnitVo;

  // 发起人部门id
  originatorDepartmentId: string;

  // 发起人id
  originatorId: string;

  // 参与者
  participant: UnitVo;

  // 参与者id
  participantId: string;

  // 运行时节点信息-节点名称、参与者
  runtimeActivitys: Array<InstanceActivityVo>;

  // 单据号
  sequenceNo: string;

  // 启动时间
  startTime: string;

  // 流程状态
  status: string;

  // 停留时间-毫秒
  stayTime: number;

  // 流程模版编码
  workflowCode: string;

  // 流程模版名称
  workflowName: string;

  // 流程模版版本号
  workflowVersion: number;
}
// 流程节点参与者vo
export interface WorkflowNodeParticipantVo {
  // 节点id
  nodeId: string;

  // 节点名称
  nodeName: string;

  // 节点参与者
  participants: Array<UnitVo>;
}
// 流程模型编码vo对象
export interface WorkflowSchemaCodeVo {
  // 模型编码
  schemaCode: string;

  // 版本号
  version: number;

  // 流程编码
  workflowCode: string;
}
// 无
export interface WxJsapiSignature {
  // 无
  corpId: string;

  // 无
  nonceStr: string;

  // 无
  signature: string;

  // 无
  timestamp: number;

  // 无
  url: string;
}


