export interface ActionPermissionVo {
    adminIntervene: boolean;
    agree: boolean;
    apposttile: boolean;
    assist: boolean;
    assistSubmit: boolean;
    circulated: boolean;
    close: boolean;
    disagree: boolean;
    edit: boolean;
    externalStartWorkflow: boolean;
    externalSubmit: boolean;
    invalid: boolean;
    operationLogs: boolean;
    reject: boolean;
    retrieve: boolean;
    startWorkflow: boolean;
    submit: boolean;
    temporary: boolean;
    transferred: boolean;
    urge: boolean;
}
export interface ActivityCirculateVo {
    activityCode: string;
    activityName: string;
    activityType: string;
    circulateTime: string;
    participant: ParticipantVo;
    readed: boolean;
}
export interface ActivityVo {
    code: string;
    name: string;
}
export interface AdminRolePermissionRangeVo {
    advancedDataSourceList: Array<CodeNameVo>;
    appDatas: Array<AppDataPermissionVo>;
    bizDataSourceList: Array<CodeNameVo>;
    bizServiceList: Array<CodeNameVo>;
    createApp: boolean;
    createAppGroup: boolean;
    createBizServiceCategory: boolean;
    roleManage: boolean;
    scopeApps: Array<CodeNameVo>;
    scopeRoles: Array<TagTreeVo>;
    scopeUnits: Array<UnitVo>;
}
export interface AdminRolePermissionVo {
    advancedDataSourceList: Array<string>;
    appDataPermissions: Array<AppDataPermissionVo>;
    bizDataSourceList: Array<string>;
    bizServiceList: Array<string>;
    createApp: boolean;
    createAppGroup: boolean;
    createBizServiceCategory: boolean;
    roleManage: boolean;
    scopeApps: Array<string>;
    scopeRoles: Array<UnitVo>;
    scopeUnits: Array<UnitVo>;
}
export interface AdminRoleVo {
    authTime: string;
    authorizer: UnitVo;
    canEdit: boolean;
    children: Array<AdminRoleVo>;
    createdBy: string;
    createdTime: string;
    id: string;
    modifiedBy: string;
    modifiedTime: string;
    name: string;
    nodeType: string;
    parentId: string;
    parentType: string;
    permission: AdminRolePermissionVo;
    permissionRange: AdminRolePermissionRangeVo;
    roleType: string;
    users: Array<UnitVo>;
}
export interface AdminVo {
    departmentFullName: string;
    departmentId: string;
    id: string;
    userCode: string;
    userId: string;
    userName: string;
}
export interface AdvancedDataSourceVo {
    busDs: CodeNameVo;
    code: string;
    id: string;
    name: string;
    sqlConfig: string;
}
export interface AppDataPermissionVo {
    code: string;
    name: string;
    units: Array<UnitVo>;
}
export interface AppGroupVo {
    id: string;
    name: string;
    sortIndex: number;
}
export interface AppPackageVo {
    code: string;
    enabled: boolean;
    icon: string;
    id: string;
    modelFunTrees: Array<FunTreeVo>;
    name: string;
    parentId: string;
    sortIndex: number;
    visibleRange: string;
}
export interface AppPerGroupSortVo {
    id: string;
    sortKey: number;
}
export interface AppPerGroupVo {
    appCode: string;
    grantType: string;
    id: string;
    name: string;
    sortKey: number;
    subjects: Array<UnitVo>;
}
export interface AppPermissionSettingVo {
    perGroups: Array<AppPerGroupVo>;
    schemaPermissionResources: Array<SchemaPermissionResource>;
}
export interface ApprovalLogVo {
    actionType: string;
    activityCode: string;
    activityName: string;
    activityType: string;
    circulateList: Array<ActivityCirculateVo>;
    content: string;
    duration: number;
    finishTime: string;
    participant: ParticipantVo;
    receiveTime: string;
    signFileVo: SignFileVo;
    startTime: string;
    toParticipants: Array<ParticipantVo>;
}
export interface AtUserQueryResultVo {
    avatar: string;
    userId: string;
    userName: string;
}
export interface BatchDeptInsertVo {
    nameList: Array<string>;
    parentId: string;
}
export interface BatchListSheetDataVo {
    ids: Array<string>;
    schemaCode: string;
    sheetCode: string;
}
export interface BatchMoveUserDeptVo {
    newDeptId: string;
    oldDeptId: string;
    userIdList: Array<string>;
}
export interface BatchSaveAdminRolePermissionVo {
    parentId: string;
    parentType: string;
    rolePermissions: Array<SaveAdminRolePermissionVo>;
}
export interface BatchTagVo {
    groupName: string;
    tagName: string;
}
export interface BatchUpdateBizObjectVo {
    ids: Array<string>;
    paramsMap: any;
    schemaCode: string;
}
export interface BizDataSourceVo {
    code: string;
    description: string;
    id: string;
    name: string;
    password: string;
    type: string;
    url: string;
    username: string;
}
export interface BizFormCommentVo {
    avatar: string;
    bizObjectId: string;
    childList: Array<BizFormCommentVo>;
    content: string;
    createdBy: string;
    createdName: string;
    createdTime: string;
    documentIdList: Array<string>;
    formCode: string;
    id: string;
    instanceId: string;
    receiveUserIdList: Array<string>;
    receiveUserList: Array<UnitValue>;
    replyCommentId: string;
    schemaCode: string;
}
export interface BizFormTemplateVo {
    code: string;
    content: string;
    formData: string;
    id: string;
    name: string;
    schemaCode: string;
    settings: string;
}
export interface BizFormVo {
    addPropertys: Array<BizPropertyVo>;
    code: string;
    draftJson: string;
    id: string;
    model: string;
    name: string;
    published: boolean;
    publishedJson: string;
    schemaCode: string;
    schemaName: string;
    shortLinkEnable: boolean;
    updatePropertys: Array<BizPropertyVo>;
    version: number;
}
export interface BizMenuVo {
    appCode: string;
    code: string;
    formCode: string;
    groupId: string;
    icon: string;
    id: string;
    linkMobile: string;
    linkPc: string;
    name: string;
    openMode: string;
    quickLink: boolean;
    schemaCode: string;
    type: string;
    visibleMobile: boolean;
    visiblePc: boolean;
    workflowCode: string;
}
export interface BizMethodInvokeVo {
    input: any;
    methodCode: string;
    serviceCode: string;
}
export interface BizObjectBo {
}
export interface BizObjectFilterVo {
    op: string;
    propertyCode: string;
    propertyType: string;
    values: Array<any>;
}
export interface BizObjectIdsVo {
    ids: Array<string>;
    schemaCode: string;
}
export interface BizObjectSheetSubmitVo {
    datas: Array<Mapstringobject>;
    deleteIds: Array<string>;
    insertDatas: Array<Mapstringobject>;
    sheetCode: string;
    updateDatas: Array<Mapstringobject>;
}
export interface BizObjectSortVo {
    propertyCode: string;
    sortType: string;
}
export interface BizObjectSubmitVo {
    data: any;
    id: string;
    schemaCode: string;
    sheetDatas: Array<BizObjectSheetSubmitVo>;
}
export interface BizPropertyFormulaVo {
    code: string;
    expression: Expression;
    formula: string;
    id: string;
    name: string;
    schemaCode: string;
    sheetCode: string;
    sheetName: string;
}
export interface BizPropertySortVo {
    code: string;
    schemaCode: string;
    sortIndex: number;
}
export interface BizPropertyVo {
    children: Array<BizPropertyVo>;
    code: string;
    correlationFormDisplayColumn: string;
    correlationFormSchemaCode: string;
    correlationFormSchemaName: string;
    correlationSchemaAppName: string;
    correlationSchemaCode: string;
    correlationSchemaName: string;
    format: any;
    formula: string;
    id: string;
    mainSchemaCode: string;
    name: string;
    option: PropertyOption;
    propertyIndex: boolean;
    propertyRequired: boolean;
    propertyType: string;
    published: boolean;
    schemaCode: string;
    searchProperty: boolean;
    sequenceNoRule: any;
    sheetCode: string;
    sortIndex: number;
    systemProperty: boolean;
}
export interface BizRuleInvokeVo {
    input: any;
    ruleId: string;
    schemaCode: string;
}
export interface BizRulePropertyVo {
    id: string;
    inputJsonSchema: JsonSchema;
    name: string;
    outputJsonSchema: JsonSchema;
    schemaCode: string;
}
export interface BizRuleQuotePropertyVo {
    actionId: string;
    actionName: string;
    nodeId: string;
    nodeName: string;
    ruleId: string;
    ruleName: string;
    schemaCode: string;
    schemaName: string;
}
export interface BizRuleRenameVo {
    id: string;
    name: string;
}
export interface BizRuleVo {
    createdBy: string;
    createdTime: string;
    creatorName: string;
    id: string;
    input: any;
    modifiedBy: string;
    modifiedTime: string;
    name: string;
    output: any;
    schemaCode: string;
    template: any;
}
export interface BizSchemaEventVo {
    bindType: string;
    eventType: string;
    id: string;
    inputJson: string;
    inputSchemaCode: string;
    methodCode: string;
    name: string;
    outputJson: string;
    outputSchemaCode: string;
    ruleId: string;
    schemaCode: string;
    serviceCode: string;
}
export interface BizSchemaGroupVo {
    appCode: string;
    children: Array<BizSchemaGroupVo>;
    id: string;
    name: string;
    parentId: string;
}
export interface BizSchemaVo {
    appCode: string;
    code: string;
    groupId: string;
    icon: string;
    id: string;
    name: string;
    propertys: Array<BizPropertyVo>;
    published: boolean;
    quickLink: boolean;
    title: string;
    type: string;
    views: Array<BizViewVo>;
    visibleMobile: boolean;
    visiblePc: boolean;
}
export interface BizServerOption {
    bizMethod: CodeNameBo;
    bizRule: IdNameBo;
    bizService: CodeNameBo;
    input: JsonSchema;
    output: JsonSchema;
}
export interface BizServiceCategoryVo {
    id: string;
    name: string;
    serviceList: Array<BizServiceVo>;
}
export interface BizServiceMethodCodeVo {
    methodCode: string;
    serviceCode: string;
}
export interface BizServiceMethodVo {
    code: string;
    config: any;
    input: JsonSchema;
    name: string;
    output: JsonSchema;
    protocolType: string;
    serviceCode: string;
}
export interface BizServiceVo {
    categroyId: string;
    code: string;
    config: any;
    id: string;
    name: string;
    protocolType: string;
}
export interface BizViewActionVo {
    actionCode: string;
    actionName: string;
    actionType: string;
    clientType: string;
    correlationCode: string;
    correlationType: string;
    id: string;
    schemaCode: string;
    sortKey: number;
    viewCode: string;
}
export interface BizViewColumnVo {
    clientType: string;
    displayFormat: any;
    displayName: string;
    id: string;
    propertyCode: string;
    propertyType: string;
    schemaCode: string;
    sortKey: number;
    viewCode: string;
    width: number;
}
export interface BizViewConditionVo {
    clientType: string;
    defaultValue: any;
    defaultValueType: string;
    displayFormat: any;
    displayName: string;
    id: string;
    propertyCode: string;
    propertyType: string;
    schemaCode: string;
    sortKey: number;
    viewCode: string;
    visible: boolean;
}
export interface BizViewDataQueryVo {
    distinct: boolean;
    fields: Array<string>;
    filters: Array<BizObjectFilterVo>;
    pageNum: number;
    pageSize: number;
    schemaCode: string;
    sorts: Array<BizObjectSortVo>;
    viewCode: string;
}
export interface BizViewQueryVo {
    clientType: string;
    code: string;
    schemaCode: string;
}
export interface BizViewSortVo {
    clientType: string;
    id: string;
    propertyCode: string;
    propertyName: string;
    propertyType: string;
    schemaCode: string;
    sortKey: number;
    sortType: string;
    viewCode: string;
}
export interface BizViewVisibleVo {
    code: string;
    schemaCode: string;
    visibleMobile: boolean;
    visiblePc: boolean;
}
export interface BizViewVo {
    actions: Array<BizViewActionVo>;
    clientType: string;
    code: string;
    columns: Array<BizViewColumnVo>;
    conditions: Array<BizViewConditionVo>;
    correlationCode: string;
    glueSource: string;
    icon: string;
    id: string;
    name: string;
    propertys: Array<BizPropertyVo>;
    published: boolean;
    schemaCode: string;
    schemaType: string;
    sortKey: number;
    sorts: Array<BizViewSortVo>;
    visibleMobile: boolean;
    visiblePc: boolean;
}
export interface CalculateResultVo {
    errorMsg: string;
    propertyCode: string;
    schemaCode: string;
    value: any;
}
export interface CalculateVo {
    batchCalculate: boolean;
    calculateRowCount: number;
    formulaExp: string;
    mainSchemaCode: string;
    propertyCode: string;
    propertyType: string;
    schemaCode: string;
    variables: any;
}
export interface ChangeOwnerVo {
    instanceId: string;
    ownerDepartmentId: string;
    ownerId: string;
}
export interface ChartVo {
    authorization: string;
    dataSource: DataSourceVo;
    id: string;
    name: string;
    opts: any;
    parentId: string;
    position: any;
    type: string;
}
export interface CodeNameBo {
    code: string;
    name: string;
}
export interface CodeNameVo {
    code: string;
    name: string;
}
export interface CodeVo {
    code: string;
}
export interface ConditionItem {
    formula: string;
    source: Property;
    value: any;
    valueType: string;
}
export interface CorrelationObject {
    id: string;
    name: string;
    schemaCode: string;
}
export interface CustomOption {
    key: string;
    text: string;
}
export interface DashboardVo {
    appCode: string;
    cells: Array<ChartVo>;
    code: string;
    filters: any;
    global: any;
    groupId: string;
    icon: string;
    id: string;
    modifiedTime: string;
    name: string;
    positions: Array<Position>;
    published: boolean;
    publishedTime: string;
    quickLink: boolean;
    visibleMobile: boolean;
    visiblePc: boolean;
}
export interface DataSourceListVo {
    modelDataSources: Array<FunTreeVo>;
    sqlDataSources: Array<SqlDataSourceVo>;
}
export interface DataSourceVo {
    id: string;
    name: string;
    type: string;
}
export interface DepartmentVo {
    children: Array<DepartmentVo>;
    fullDeptName: string;
    hasChildren: boolean;
    id: string;
    manager: UserVo;
    managerId: string;
    name: string;
    orgId: string;
    organization: OrganizationVo;
    parentDepartment: DepartmentVo;
    parentId: string;
    rootOrg: boolean;
    type: string;
    unitType: string;
    userCounts: number;
    userList: Array<UserVo>;
}
export interface DeptUserIdsVO {
    deptId: string;
    userIds: Array<string>;
}
export interface DictOption {
    id: string;
    name: string;
}
export interface DimensionPropertyVo {
    alias: string;
    code: string;
    dataType: string;
    format: any;
    id: string;
    name: string;
    schemaCode: string;
    type: string;
}
export interface DocumentFileVo {
    createTime: string;
    createdBy: string;
    expireTime: string;
    fileName: string;
    fileSize: number;
    id: string;
    suffix: string;
}
export interface ExportProgressVo {
    documentId: string;
    errorMsg: string;
    status: string;
}
export interface ExportVo {
    params: any;
    type: string;
}
export interface Expression {
    editorMark: string;
    editorText: string;
    formula: string;
    precision: number;
    targetType: string;
}
export interface ExternalSubmitVo {
    data: any;
    sheetDatas: Array<BizObjectSheetSubmitVo>;
    shortCode: string;
}
export interface FigureVo {
    circulateCount: number;
    runtimeInstanceCount: number;
    startInstanceCount: number;
    unReadMessageCount: number;
    workItemCount: number;
}
export interface FlagVo {
    flag: boolean;
}
export interface FormCodesVo {
    codes: Array<string>;
    schemaCode: string;
}
export interface FormDataVo {
    actionPermission: ActionPermissionVo;
    bizFormVo: BizFormVo;
    bizObjectData: any;
    bizObjectId: string;
    bizSchemaVo: BizSchemaVo;
    dataPermissionList: Array<Array<any>>;
    formCommentVoList: Array<BizFormCommentVo>;
    formRemind: FormRemindVo;
    formTypeEnum: string;
    propertyPermissions: Array<PropertyPermissionVo>;
    schemaCode: string;
    schemaType: string;
    sheetDatas: any;
    status: string;
    temporaryFlag: boolean;
}
export interface FormRemindVo {
    bizObjectId: string;
    content: string;
    formCode: string;
    formType: string;
    instanceId: string;
    remindTime: string;
    schemaCode: string;
    title: string;
    workItemId: string;
}
export interface FunTreeVo {
    children: Array<FunTreeVo>;
    code: string;
    enabled: boolean;
    funType: string;
    icon: string;
    id: string;
    name: string;
    parentId: string;
    published: boolean;
    quickLink: boolean;
    sortIndex: number;
}
export interface GenKeyResultVo {
    genBatchId: string;
    publicKey: string;
}
export interface IDVo {
    id: string;
}
export interface IdNameBo {
    id: string;
    name: string;
}
export interface IdNameVo {
    id: string;
    name: string;
}
export interface ImportProgressVo {
    documentId: string;
    errorMsg: string;
    errorTotal: number;
    status: string;
    successTotal: number;
    total: number;
}
export interface ImportVo {
    documentId: string;
    params: any;
    type: string;
}
export interface IncrementNotifyVo {
    body: string;
    event: string;
    orgId: string;
    sendTime: string;
}
export interface InstanceActivityVo {
    activatedApprover: Array<ParticipantVo>;
    activityCode: string;
    activityName: string;
    activityStatus: string;
    activityType: string;
    approvalLogList: Array<ApprovalLogVo>;
    circulateList: Array<ActivityCirculateVo>;
    duration: number;
    finishTime: string;
    skip: boolean;
    startTime: string;
    subInstanceList: Array<SubInstanceLogVo>;
    suspendApprover: Array<ParticipantVo>;
    unfinishedApprover: Array<ParticipantVo>;
}
export interface InstanceCancelVo {
    instanceId: string;
    workItemId: string;
}
export interface InstanceNodeActivatelVo {
    instanceId: string;
    nodeId: string;
}
export interface InstanceNodeAdjustParticipantVo {
    instanceId: string;
    nodeId: string;
    participants: Array<string>;
}
export interface InstanceNodeCancelVo {
    instanceId: string;
    nodeIds: Array<string>;
}
export interface InstanceTrackVo {
    actionPermission: ActionPermissionVo;
    approvalLogs: Array<InstanceActivityVo>;
    instance: WorkflowInstanceVo;
    mobileApprovalLogs: Array<InstanceActivityVo>;
    runtimeActivitys: Array<InstanceActivityVo>;
    version: number;
    workflowTemplate: any;
}
export interface InstanceUrgeVo {
    instanceId: string;
    msg: string;
}
export interface JsonSchema {
    code: string;
    items: JsonSchema;
    name: string;
    op: string;
    propertys: Array<JsonSchema>;
    schemaCode: string;
    type: string;
    value: any;
    valueType: string;
}
export interface LicenseCheckModel {
    cpuSerial: string;
    ipAddress: Array<string>;
    macAddress: Array<string>;
    mainBoardSerial: string;
    userAmount: number;
}
export interface LicenseInfoVo {
    cpuSerial: string;
    description: string;
    expiryTime: string;
    ipAddress: Array<string>;
    issuedTime: string;
    macAddress: Array<string>;
    mainBoardSerial: string;
    subject: string;
    userAmount: number;
}
export interface ListTemplateDataQueryVo {
    ids: Array<string>;
    loadApprovalInfo: boolean;
    schemaCode: string;
    sheetCodeList: Array<string>;
}
export interface ListTemplateDataVo {
    bizPropertyVoList: Array<BizPropertyVo>;
    dataMapList: Array<Mapstringobject>;
    instanceInfoMap: any;
    logMap: any;
}
export interface LoadFormDataParamVo {
    bizObjectId: string;
    edit: boolean;
    formCode: string;
    schemaCode: string;
}
export interface LoadFormSheetDataParamVo {
    bizObjectId: string;
    formType: string;
    instanceId: string;
    schemaCode: string;
    sheetCode: string;
    workItemId: string;
}
export interface LoadWorkflowFormDataParamVo {
    activityCode: string;
    edit: boolean;
    instanceId: string;
    sheetCode: string;
    workItemId: string;
    workflowCode: string;
}
export interface LoginVo {
    batchId: string;
    code: string;
    orgId: string;
    password: string;
}
export interface MapstringListBizPropertyVo {
}
export interface MapstringListMapstringobject {
}
export interface Mapstringobject {
}
export interface MessageVo {
    content: string;
    id: string;
    linkConfig: any;
    linkType: string;
    read: boolean;
    receiveTime: string;
    title: string;
}
export interface MethodInvokeParamVo {
    args: any;
    methodCode: string;
    pageNum: number;
    pageSize: number;
    serviceCode: string;
}
export interface MetricPropertyVo {
    agg: string;
    alias: string;
    code: string;
    dataType: string;
    id: string;
    name: string;
    schemaCode: string;
    type: string;
}
export interface ModelFunRenameVo {
    id: string;
    name: string;
    type: string;
}
export interface ModelFunSortVo {
    id: string;
    parentId: string;
    sortIndex: number;
    type: string;
}
export interface MoveChartVo {
    id: string;
    positions: Array<Position>;
}
export interface NameVo {
    name: string;
}
export interface OAuth2AccessToken {
    additionalInformation: any;
    expiration: string;
    expired: boolean;
    expiresIn: number;
    refreshToken: OAuth2RefreshToken;
    scope: Array<string>;
    tokenType: string;
    value: string;
}
export interface OAuth2RefreshToken {
    value: string;
}
export interface OlapFilterVo {
    dynamic: Array<Array<ConditionItem>>;
    source: Array<Array<ConditionItem>>;
}
export interface OlapQueryVo {
    authorization: string;
    chartId: string;
    columnDimensions: Array<DimensionPropertyVo>;
    dataSourceId: string;
    dataSourceType: string;
    dimensions: Array<DimensionPropertyVo>;
    filters: OlapFilterVo;
    limit: number;
    metrics: Array<MetricPropertyVo>;
    pageNum: number;
    pageSize: number;
    rowDimensions: Array<DimensionPropertyVo>;
    sorts: Array<SortPropertyVo>;
    type: string;
}
export interface OpenApiStartWorkflowVo {
    data: any;
    originatorDepartmentId: string;
    workflowCode: string;
}
export interface OrgAscriptionCheckVo {
    lefts: Array<UnitVo>;
    op: string;
    rights: Array<UnitVo>;
}
export interface OrgSyncRecordQueryVo {
    beginTime: string;
    endTime: string;
    orgId: string;
    pageNum: number;
    pageSize: number;
    status: boolean;
}
export interface OrgSyncRecordVo {
    errorMsg: string;
    event: string;
    id: string;
    orgId: string;
    orgName: string;
    processTime: string;
    retryTimes: number;
    sendTime: string;
    status: boolean;
    syncJson: string;
    syncType: string;
}
export interface OrganizationChartVo {
    children: Array<OrganizationChartVo>;
    id: string;
    name: string;
}
export interface OrganizationVo {
    departmentId: string;
    id: string;
    maintainType: string;
    name: string;
    parentDepartmentId: string;
    parentDepartmentName: string;
    relatedConfig: string;
    status: string;
}
export interface PageVOAdminVo {
    list: Array<AdminVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOAtUserQueryResultVo {
    list: Array<AtUserQueryResultVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOMapstringobject {
    list: Array<Mapstringobject>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOMessageVo {
    list: Array<MessageVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOOrgSyncRecordVo {
    list: Array<OrgSyncRecordVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOSysApiLogVo {
    list: Array<SysApiLogVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOSysJobVo {
    list: Array<SysJobVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOSystemDictVo {
    list: Array<SystemDictVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOTagUnitVo {
    list: Array<TagUnitVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOUserVo {
    list: Array<UserVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOWorkItemVo {
    list: Array<WorkItemVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface PageVOWorkflowInstanceVo {
    list: Array<WorkflowInstanceVo>;
    pageNum: number;
    pageSize: number;
    total: number;
}
export interface ParticipantVo {
    avatar: string;
    departmentName: string;
    entrust: boolean;
    id: string;
    name: string;
    sourceUserId: string;
    sourceUserName: string;
    workItemType: string;
}
export interface Position {
}
export interface PredictParticipantVo {
    data: any;
    originatorDepartmentId: string;
    originatorId: string;
    workflowCode: string;
    workflowVersion: number;
}
export interface Property {
    code: string;
    name: string;
    schemaCode: string;
    schemaName: string;
    sheetCode: string;
    sheetName: string;
    type: string;
}
export interface PropertyOption {
    bizServerOption: BizServerOption;
    customOptions: Array<CustomOption>;
    dataSourceType: string;
    dict: DictOption;
    dictSortType: string;
}
export interface PropertyPermissionTrait {
    editable: boolean;
    required: boolean;
    visible: boolean;
}
export interface PropertyPermissionVo {
    editable: boolean;
    propertyCode: string;
    propertyName: string;
    required: boolean;
    schemaCode: string;
    schemaName: string;
    sheetCode: string;
    visible: boolean;
}
export interface QueryChildDeptVo {
    parentId: string;
}
export interface QueryUnitTreeVo {
    keyword: string;
    orgIds: Array<string>;
    parentId: string;
    roots: Array<string>;
    unitType: string;
}
export interface QueryUserVo {
    keyword: string;
    pageIndex: number;
    pageSize: number;
}
export interface QuickLinkFunVo {
    code: string;
    type: string;
}
export interface QuickLinkVo {
    appCode: string;
    formCode: string;
    funCode: string;
    funId: string;
    funName: string;
    funType: string;
    icon: string;
}
export interface RemovePropertyVo {
    bizRuleQuotes: Array<BizRuleQuotePropertyVo>;
    dataCount: number;
    desc: string;
    success: boolean;
}
export interface ResBody {
    bizKey: string;
    code: number;
    data: any;
    msg: string;
    traceId: string;
}
export interface ResBodyAdminRolePermissionRangeVo {
    bizKey: string;
    code: number;
    data: AdminRolePermissionRangeVo;
    msg: string;
    traceId: string;
}
export interface ResBodyAdminRoleVo {
    bizKey: string;
    code: number;
    data: AdminRoleVo;
    msg: string;
    traceId: string;
}
export interface ResBodyAdvancedDataSourceVo {
    bizKey: string;
    code: number;
    data: AdvancedDataSourceVo;
    msg: string;
    traceId: string;
}
export interface ResBodyAppGroupVo {
    bizKey: string;
    code: number;
    data: AppGroupVo;
    msg: string;
    traceId: string;
}
export interface ResBodyAppPackageVo {
    bizKey: string;
    code: number;
    data: AppPackageVo;
    msg: string;
    traceId: string;
}
export interface ResBodyAppPerGroupVo {
    bizKey: string;
    code: number;
    data: AppPerGroupVo;
    msg: string;
    traceId: string;
}
export interface ResBodyAppPermissionSettingVo {
    bizKey: string;
    code: number;
    data: AppPermissionSettingVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizDataSourceVo {
    bizKey: string;
    code: number;
    data: BizDataSourceVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizFormTemplateVo {
    bizKey: string;
    code: number;
    data: BizFormTemplateVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizFormVo {
    bizKey: string;
    code: number;
    data: BizFormVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizMenuVo {
    bizKey: string;
    code: number;
    data: BizMenuVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizPropertyVo {
    bizKey: string;
    code: number;
    data: BizPropertyVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizRulePropertyVo {
    bizKey: string;
    code: number;
    data: BizRulePropertyVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizRuleVo {
    bizKey: string;
    code: number;
    data: BizRuleVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizSchemaEventVo {
    bizKey: string;
    code: number;
    data: BizSchemaEventVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizSchemaGroupVo {
    bizKey: string;
    code: number;
    data: BizSchemaGroupVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizSchemaVo {
    bizKey: string;
    code: number;
    data: BizSchemaVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizServiceCategoryVo {
    bizKey: string;
    code: number;
    data: BizServiceCategoryVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizServiceMethodVo {
    bizKey: string;
    code: number;
    data: BizServiceMethodVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizServiceVo {
    bizKey: string;
    code: number;
    data: BizServiceVo;
    msg: string;
    traceId: string;
}
export interface ResBodyBizViewVo {
    bizKey: string;
    code: number;
    data: BizViewVo;
    msg: string;
    traceId: string;
}
export interface ResBodyChartVo {
    bizKey: string;
    code: number;
    data: ChartVo;
    msg: string;
    traceId: string;
}
export interface ResBodyDashboardVo {
    bizKey: string;
    code: number;
    data: DashboardVo;
    msg: string;
    traceId: string;
}
export interface ResBodyDataSourceListVo {
    bizKey: string;
    code: number;
    data: DataSourceListVo;
    msg: string;
    traceId: string;
}
export interface ResBodyDepartmentVo {
    bizKey: string;
    code: number;
    data: DepartmentVo;
    msg: string;
    traceId: string;
}
export interface ResBodyDocumentFileVo {
    bizKey: string;
    code: number;
    data: DocumentFileVo;
    msg: string;
    traceId: string;
}
export interface ResBodyExportProgressVo {
    bizKey: string;
    code: number;
    data: ExportProgressVo;
    msg: string;
    traceId: string;
}
export interface ResBodyFigureVo {
    bizKey: string;
    code: number;
    data: FigureVo;
    msg: string;
    traceId: string;
}
export interface ResBodyFormDataVo {
    bizKey: string;
    code: number;
    data: FormDataVo;
    msg: string;
    traceId: string;
}
export interface ResBodyFormRemindVo {
    bizKey: string;
    code: number;
    data: FormRemindVo;
    msg: string;
    traceId: string;
}
export interface ResBodyGenKeyResultVo {
    bizKey: string;
    code: number;
    data: GenKeyResultVo;
    msg: string;
    traceId: string;
}
export interface ResBodyImportProgressVo {
    bizKey: string;
    code: number;
    data: ImportProgressVo;
    msg: string;
    traceId: string;
}
export interface ResBodyInstanceTrackVo {
    bizKey: string;
    code: number;
    data: InstanceTrackVo;
    msg: string;
    traceId: string;
}
export interface ResBodyLicenseCheckModel {
    bizKey: string;
    code: number;
    data: LicenseCheckModel;
    msg: string;
    traceId: string;
}
export interface ResBodyLicenseInfoVo {
    bizKey: string;
    code: number;
    data: LicenseInfoVo;
    msg: string;
    traceId: string;
}
export interface ResBodyListTemplateDataVo {
    bizKey: string;
    code: number;
    data: ListTemplateDataVo;
    msg: string;
    traceId: string;
}
export interface ResBodyListAdvancedDataSourceVo {
    bizKey: string;
    code: number;
    data: Array<AdvancedDataSourceVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListAppGroupVo {
    bizKey: string;
    code: number;
    data: Array<AppGroupVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListAppPackageVo {
    bizKey: string;
    code: number;
    data: Array<AppPackageVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListAppPerGroupVo {
    bizKey: string;
    code: number;
    data: Array<AppPerGroupVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizDataSourceVo {
    bizKey: string;
    code: number;
    data: Array<BizDataSourceVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizFormCommentVo {
    bizKey: string;
    code: number;
    data: Array<BizFormCommentVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizFormTemplateVo {
    bizKey: string;
    code: number;
    data: Array<BizFormTemplateVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizFormVo {
    bizKey: string;
    code: number;
    data: Array<BizFormVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizObjectBo {
    bizKey: string;
    code: number;
    data: Array<BizObjectBo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizPropertyFormulaVo {
    bizKey: string;
    code: number;
    data: Array<BizPropertyFormulaVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizPropertyVo {
    bizKey: string;
    code: number;
    data: Array<BizPropertyVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizRulePropertyVo {
    bizKey: string;
    code: number;
    data: Array<BizRulePropertyVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizRuleVo {
    bizKey: string;
    code: number;
    data: Array<BizRuleVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizSchemaEventVo {
    bizKey: string;
    code: number;
    data: Array<BizSchemaEventVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizSchemaGroupVo {
    bizKey: string;
    code: number;
    data: Array<BizSchemaGroupVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizSchemaVo {
    bizKey: string;
    code: number;
    data: Array<BizSchemaVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizServiceCategoryVo {
    bizKey: string;
    code: number;
    data: Array<BizServiceCategoryVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizServiceMethodVo {
    bizKey: string;
    code: number;
    data: Array<BizServiceMethodVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizServiceVo {
    bizKey: string;
    code: number;
    data: Array<BizServiceVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListBizViewVo {
    bizKey: string;
    code: number;
    data: Array<BizViewVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListCalculateResultVo {
    bizKey: string;
    code: number;
    data: Array<CalculateResultVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListDepartmentVo {
    bizKey: string;
    code: number;
    data: Array<DepartmentVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListFunTreeVo {
    bizKey: string;
    code: number;
    data: Array<FunTreeVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListInstanceActivityVo {
    bizKey: string;
    code: number;
    data: Array<InstanceActivityVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListMapstringobject {
    bizKey: string;
    code: number;
    data: Array<Mapstringobject>;
    msg: string;
    traceId: string;
}
export interface ResBodyListMessageVo {
    bizKey: string;
    code: number;
    data: Array<MessageVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListOrganizationVo {
    bizKey: string;
    code: number;
    data: Array<OrganizationVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListQuickLinkVo {
    bizKey: string;
    code: number;
    data: Array<QuickLinkVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListSchemaPermissionVo {
    bizKey: string;
    code: number;
    data: Array<SchemaPermissionVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListSchemaPropertyPermissionVo {
    bizKey: string;
    code: number;
    data: Array<SchemaPropertyPermissionVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListSecurityClientVo {
    bizKey: string;
    code: number;
    data: Array<SecurityClientVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListSystemDictConfigVo {
    bizKey: string;
    code: number;
    data: Array<SystemDictConfigVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListTagGroupVo {
    bizKey: string;
    code: number;
    data: Array<TagGroupVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListTagTreeVo {
    bizKey: string;
    code: number;
    data: Array<TagTreeVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListUnitTreeVo {
    bizKey: string;
    code: number;
    data: Array<UnitTreeVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListUnitVo {
    bizKey: string;
    code: number;
    data: Array<UnitVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListUserCommonsVo {
    bizKey: string;
    code: number;
    data: Array<UserCommonsVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListUserVo {
    bizKey: string;
    code: number;
    data: Array<UserVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListValidateErrorMessageVo {
    bizKey: string;
    code: number;
    data: Array<ValidateErrorMessageVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListWorkItemVo {
    bizKey: string;
    code: number;
    data: Array<WorkItemVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListWorkflowDelegateVo {
    bizKey: string;
    code: number;
    data: Array<WorkflowDelegateVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListWorkflowDeploymentVo {
    bizKey: string;
    code: number;
    data: Array<WorkflowDeploymentVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListWorkflowHeaderVo {
    bizKey: string;
    code: number;
    data: Array<WorkflowHeaderVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListWorkflowNodeParticipantVo {
    bizKey: string;
    code: number;
    data: Array<WorkflowNodeParticipantVo>;
    msg: string;
    traceId: string;
}
export interface ResBodyListstring {
    bizKey: string;
    code: number;
    data: Array<string>;
    msg: string;
    traceId: string;
}
export interface ResBodyMapstringListBizPropertyVo {
    bizKey: string;
    code: number;
    data: any;
    msg: string;
    traceId: string;
}
export interface ResBodyMapstringListMapstringobject {
    bizKey: string;
    code: number;
    data: any;
    msg: string;
    traceId: string;
}
export interface ResBodyMapstringobject {
    bizKey: string;
    code: number;
    data: any;
    msg: string;
    traceId: string;
}
export interface ResBodyOAuth2AccessToken {
    bizKey: string;
    code: number;
    data: OAuth2AccessToken;
    msg: string;
    traceId: string;
}
export interface ResBodyOrganizationChartVo {
    bizKey: string;
    code: number;
    data: OrganizationChartVo;
    msg: string;
    traceId: string;
}
export interface ResBodyOrganizationVo {
    bizKey: string;
    code: number;
    data: OrganizationVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOAdminVo {
    bizKey: string;
    code: number;
    data: PageVOAdminVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOAtUserQueryResultVo {
    bizKey: string;
    code: number;
    data: PageVOAtUserQueryResultVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOMapstringobject {
    bizKey: string;
    code: number;
    data: PageVOMapstringobject;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOMessageVo {
    bizKey: string;
    code: number;
    data: PageVOMessageVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOOrgSyncRecordVo {
    bizKey: string;
    code: number;
    data: PageVOOrgSyncRecordVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOSysApiLogVo {
    bizKey: string;
    code: number;
    data: PageVOSysApiLogVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOSysJobVo {
    bizKey: string;
    code: number;
    data: PageVOSysJobVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOSystemDictVo {
    bizKey: string;
    code: number;
    data: PageVOSystemDictVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOTagUnitVo {
    bizKey: string;
    code: number;
    data: PageVOTagUnitVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOUserVo {
    bizKey: string;
    code: number;
    data: PageVOUserVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOWorkItemVo {
    bizKey: string;
    code: number;
    data: PageVOWorkItemVo;
    msg: string;
    traceId: string;
}
export interface ResBodyPageVOWorkflowInstanceVo {
    bizKey: string;
    code: number;
    data: PageVOWorkflowInstanceVo;
    msg: string;
    traceId: string;
}
export interface ResBodyRemovePropertyVo {
    bizKey: string;
    code: number;
    data: RemovePropertyVo;
    msg: string;
    traceId: string;
}
export interface ResBodySchemaPermissionVo {
    bizKey: string;
    code: number;
    data: SchemaPermissionVo;
    msg: string;
    traceId: string;
}
export interface ResBodySecurityClientVo {
    bizKey: string;
    code: number;
    data: SecurityClientVo;
    msg: string;
    traceId: string;
}
export interface ResBodySysApiLogVo {
    bizKey: string;
    code: number;
    data: SysApiLogVo;
    msg: string;
    traceId: string;
}
export interface ResBodySysJobVo {
    bizKey: string;
    code: number;
    data: SysJobVo;
    msg: string;
    traceId: string;
}
export interface ResBodySystemDictVo {
    bizKey: string;
    code: number;
    data: SystemDictVo;
    msg: string;
    traceId: string;
}
export interface ResBodyTagGroupVo {
    bizKey: string;
    code: number;
    data: TagGroupVo;
    msg: string;
    traceId: string;
}
export interface ResBodyTagVo {
    bizKey: string;
    code: number;
    data: TagVo;
    msg: string;
    traceId: string;
}
export interface ResBodyUnitGroupVo {
    bizKey: string;
    code: number;
    data: UnitGroupVo;
    msg: string;
    traceId: string;
}
export interface ResBodyUnitTreeSearchVo {
    bizKey: string;
    code: number;
    data: UnitTreeSearchVo;
    msg: string;
    traceId: string;
}
export interface ResBodyUserMappingInfoVo {
    bizKey: string;
    code: number;
    data: UserMappingInfoVo;
    msg: string;
    traceId: string;
}
export interface ResBodyUserVo {
    bizKey: string;
    code: number;
    data: UserVo;
    msg: string;
    traceId: string;
}
export interface ResBodyViewCorrelationFormVo {
    bizKey: string;
    code: number;
    data: ViewCorrelationFormVo;
    msg: string;
    traceId: string;
}
export interface ResBodyVoid {
    bizKey: string;
    code: number;
    msg: string;
    traceId: string;
}
export interface ResBodyWorkflowDraftVo {
    bizKey: string;
    code: number;
    data: WorkflowDraftVo;
    msg: string;
    traceId: string;
}
export interface ResBodyWorkflowFormDataVo {
    bizKey: string;
    code: number;
    data: WorkflowFormDataVo;
    msg: string;
    traceId: string;
}
export interface ResBodyWorkflowHeaderVo {
    bizKey: string;
    code: number;
    data: WorkflowHeaderVo;
    msg: string;
    traceId: string;
}
export interface ResBodyWorkflowInstanceVo {
    bizKey: string;
    code: number;
    data: WorkflowInstanceVo;
    msg: string;
    traceId: string;
}
export interface ResBodyWorkflowNodeParticipantVo {
    bizKey: string;
    code: number;
    data: WorkflowNodeParticipantVo;
    msg: string;
    traceId: string;
}
export interface ResBodyWxJsapiSignature {
    bizKey: string;
    code: number;
    data: WxJsapiSignature;
    msg: string;
    traceId: string;
}
export interface ResBodyboolean {
    bizKey: string;
    code: number;
    data: boolean;
    msg: string;
    traceId: string;
}
export interface ResBodyobject {
    bizKey: string;
    code: number;
    data: any;
    msg: string;
    traceId: string;
}
export interface ResBodystring {
    bizKey: string;
    code: number;
    data: string;
    msg: string;
    traceId: string;
}
export interface ResetUserPwdVo {
    batchId: string;
    password: string;
    userId: string;
}
export interface RuntimePredictParticipantVo {
    instanceId: string;
    nodeId: string;
}
export interface SaveAdminRolePermissionVo {
    id: string;
    name: string;
    permission: AdminRolePermissionVo;
    users: Array<UnitVo>;
}
export interface SaveAdminVo {
    userId: string;
}
export interface SaveSchemaPermissionVo {
    appCode: string;
    groupId: string;
    schemaPermissions: Array<SchemaPermissionVo>;
}
export interface SaveWorkflowTemplateVo {
    appCode: string;
    code: string;
    icon: string;
    id: string;
    name: string;
    published: boolean;
    schemaCode: string;
    shortLinkCode: string;
    shortLinkEnable: boolean;
    visibleMobile: boolean;
    visiblePc: boolean;
    visibleType: string;
    workflowTemplate: string;
}
export interface SchedulerConfVo {
    scheduleConf: string;
    scheduleType: string;
}
export interface SchemaDataPermissionResource {
    defaultValue: string;
    resources: Array<CodeNameVo>;
}
export interface SchemaDataPermissionVo {
    conditionWrap: Array<Array<ConditionItem>>;
    type: string;
}
export interface SchemaGroupSortVo {
    id: string;
    parentId: string;
    sortIndex: number;
}
export interface SchemaPermissionResource {
    dataPermission: SchemaDataPermissionResource;
    funType: string;
    propertyPermissions: Array<SchemaPropertyPermissionVo>;
    schemaCode: string;
    schemaName: string;
    viewActionPermission: SchemaViewActionPermissionResource;
    visible: boolean;
    workflowPermissions: Array<SchemaWorkflowPermission>;
}
export interface SchemaPermissionVo {
    dataPermission: SchemaDataPermissionVo;
    propertyPermissions: Array<SchemaPropertyPermissionVo>;
    schemaCode: string;
    schemaName: string;
    viewActionPermissions: Array<string>;
    visible: boolean;
    workflowPermissions: Array<SchemaWorkflowPermission>;
}
export interface SchemaPropertyCodeVo {
    mainSchemaCode: string;
    propertyCode: string;
    schemaCode: string;
    sheetCode: string;
}
export interface SchemaPropertyPermissionVo {
    add: PropertyPermissionTrait;
    code: string;
    edit: PropertyPermissionTrait;
    name: string;
    view: PropertyPermissionTrait;
}
export interface SchemaSortVo {
    code: string;
    groupId: string;
    sortIndex: number;
}
export interface SchemaTitleVo {
    schemaCode: string;
    title: string;
}
export interface SchemaViewActionPermissionResource {
    codes: Array<string>;
    resources: Array<CodeNameVo>;
}
export interface SchemaWorkflowPermission {
    code: string;
    mobileDisplay: boolean;
    name: string;
    pcDisplay: boolean;
}
export interface SearchJobVo {
    executorHandler: string;
    jobDesc: string;
    pageNum: number;
    pageSize: number;
    triggerStatus: string;
}
export interface SearchWorkItemVo {
    activityName: string;
    approvalTime: Array<string>;
    approver: string;
    cancelTime: Array<string>;
    instanceName: string;
    instanceStartTime: Array<string>;
    instanceStatus: string;
    originatorId: string;
    pageNum: number;
    pageSize: number;
    receiveTime: Array<string>;
    searchWorkItemStatus: string;
    sequenceNo: string;
    workflowCode: string;
}
export interface SearchWorkflowInstanceVo {
    instanceCancelTime: Array<string>;
    instanceName: string;
    instanceStartTime: Array<string>;
    originatorId: string;
    pageNum: number;
    pageSize: number;
    searchWorkflowInstanceStatus: string;
    sequenceNo: string;
    workflowCode: string;
}
export interface SecurityClientVo {
    accessTokenValiditySeconds: number;
    clientId: string;
    clientName: string;
    clientSecret: string;
    createdTime: string;
    id: string;
    modifiedTime: string;
    refreshTokenValiditySeconds: number;
}
export interface SelfObject {
    id: string;
    name: string;
    schemaCode: string;
}
export interface ShortLink {
    bizObjectId: string;
    formCode: string;
    instanceId: string;
    schemaCode: string;
    type: string;
    workflowCode: string;
}
export interface SignFileVo {
    id: string;
    name: string;
    size: number;
}
export interface SortPropertyVo {
    alias: string;
    code: string;
    dataType: string;
    id: string;
    name: string;
    order: string;
    schemaCode: string;
    type: string;
}
export interface SqlDataSourceVo {
    code: string;
    id: string;
    name: string;
}
export interface StartWorkflowVo {
    data: any;
    instanceId: string;
    originatorDepartment: UnitVo;
    sheetDatas: Array<BizObjectSheetSubmitVo>;
    workflowCode: string;
}
export interface SubInstanceLogVo {
    duration: number;
    finishTime: string;
    id: string;
    name: string;
    originator: ParticipantVo;
    startTime: string;
    status: string;
}
export interface SyncOrgVo {
    deptList: Array<string>;
    orgId: string;
}
export interface SysApiLogVo {
    accessKey: string;
    duration: number;
    exception: boolean;
    exceptionInfo: string;
    id: string;
    input: string;
    ip: string;
    moduleKey: string;
    operation: string;
    output: string;
    platform: string;
    time: string;
    traceId: string;
    type: string;
    user: UnitVo;
    userId: string;
    userName: string;
}
export interface SysJobVo {
    createdTime: string;
    creator: UnitVo;
    executorHandler: string;
    executorParam: any;
    id: string;
    jobDesc: string;
    modifiedTime: string;
    modifier: UnitVo;
    scheduleConf: string;
    scheduleType: string;
    triggerStatus: string;
}
export interface SysLogSearchVo {
    accessKey: string;
    moduleKey: string;
    pageNum: number;
    pageSize: number;
    status: string;
    times: Array<string>;
    traceId: string;
    type: string;
    user: UnitVo;
}
export interface SystemDictConfigVo {
    childList: Array<SystemDictConfigVo>;
    code: string;
    dictId: string;
    enabled: boolean;
    id: string;
    name: string;
    parentId: string;
    remark: string;
}
export interface SystemDictQueryVo {
    code: string;
    createdTimeBegin: string;
    createdTimeEnd: string;
    enabled: boolean;
    groupCode: string;
    name: string;
    pageNum: number;
    pageSize: number;
    type: string;
}
export interface SystemDictVo {
    code: string;
    configList: Array<SystemDictConfigVo>;
    createdBy: string;
    createdName: string;
    createdTime: string;
    enabled: boolean;
    groupCode: string;
    id: string;
    name: string;
    remark: string;
    type: string;
}
export interface SystemParamsSettingVo {
    createTime: string;
    creator: string;
    groupCode: string;
    id: string;
    modifier: string;
    modifyTime: string;
    paramsKey: string;
    paramsValue: string;
    remarks: string;
}
export interface TagGroupVo {
    code: string;
    id: string;
    maintainType: string;
    name: string;
    nodeType: string;
    orgId: string;
    orgUnit: UnitVo;
    parentId: string;
}
export interface TagTreeVo {
    children: Array<TagTreeVo>;
    createdBy: string;
    createdName: string;
    createdTime: string;
    id: string;
    maintainType: string;
    name: string;
    nodeType: string;
    orgId: string;
    organizationVo: OrganizationVo;
    parentId: string;
}
export interface TagUnitIdsVo {
    tagId: string;
    unitIds: Array<string>;
}
export interface TagUnitReqVo {
    ouScopes: Array<string>;
    tagId: string;
    unitIds: Array<string>;
}
export interface TagUnitVo {
    id: string;
    ouScopeUnits: Array<UnitVo>;
    unit: UnitVo;
    unitId: string;
}
export interface TagUpdateVo {
    groupName: string;
    id: string;
    name: string;
}
export interface TagVo {
    code: string;
    createdBy: string;
    createdName: string;
    createdTime: string;
    groupId: string;
    id: string;
    maintainType: string;
    name: string;
    nodeType: string;
    orgId: string;
    orgUnit: UnitVo;
    parentId: string;
    tagGroupVo: TagGroupVo;
}
export interface UniqueValidateVo {
    bizObjectId: string;
    propertyCode: string;
    propertyValue: string;
    schemaCode: string;
}
export interface UnitGroupVo {
    departmentList: Array<DepartmentVo>;
    tagGroupList: Array<TagGroupVo>;
    tagList: Array<TagVo>;
    userList: Array<UserVo>;
}
export interface UnitTreeSearchVo {
    returnCount: number;
    totalCount: number;
    unitTrees: Array<UnitTreeVo>;
    unitType: string;
}
export interface UnitTreeVo {
    avatar: string;
    children: Array<UnitTreeVo>;
    departmentFullName: string;
    hasChildren: boolean;
    id: string;
    name: string;
    queryCode: string;
    selfDept: boolean;
    unitType: string;
}
export interface UnitValue {
    avatar: string;
    id: string;
    name: string;
    type: string;
}
export interface UnitVo {
    avatar: string;
    departmentName: string;
    id: string;
    name: string;
    type: string;
}
export interface UpdateDashboardConfigVo {
    filters: any;
    global: any;
    id: string;
}
export interface UpdatePasswordVo {
    batchId: string;
    newPassword: string;
    oldPassword: string;
}
export interface UpdateUserRemarkVo {
    remarks: string;
    userId: string;
}
export interface UrlVo {
    url: string;
}
export interface UserCommonsVo {
    fileVo: SignFileVo;
    id: string;
    userId: string;
}
export interface UserMappingInfoVo {
    code: string;
    email: string;
    employeeNo: string;
    entryDate: string;
    id: string;
    idCard: string;
    mainDepartment: UnitVo;
    mobile: string;
    name: string;
    parentDepartments: Array<UnitVo>;
    partTimeDepartments: Array<UnitVo>;
    position: string;
    telphone: string;
}
export interface UserPermissionVo {
    adminRole: boolean;
    bizServiceManage: boolean;
    createApp: boolean;
    createAppGroup: boolean;
    createBizServiceCategory: boolean;
    loginAdminSystem: boolean;
    organizationManage: boolean;
    roleManage: boolean;
    sysAdminManage: boolean;
}
export interface UserTransferVo {
    paramsMap: any;
    receiveUserId: string;
    transferAll: boolean;
    transferType: string;
    transferUserId: string;
}
export interface UserVo {
    avatar: string;
    code: string;
    departmentIds: Array<string>;
    departments: Array<DepartmentVo>;
    email: string;
    employeeNo: string;
    entryDate: string;
    gender: number;
    id: string;
    idCard: string;
    mainDepartment: DepartmentVo;
    mainDepartmentId: string;
    manager: boolean;
    managerWorkflowCodeList: Array<string>;
    mobile: string;
    name: string;
    orgId: string;
    organization: OrganizationVo;
    partTimeDepartmentIds: Array<string>;
    partTimeDepartments: Array<DepartmentVo>;
    position: string;
    quitDate: string;
    remarks: string;
    status: string;
    superAdmin: boolean;
    sysAdmin: boolean;
    tagIds: Array<string>;
    tags: Array<TagVo>;
    telphone: string;
    unitType: string;
    userPermission: UserPermissionVo;
    workflowManager: boolean;
}
export interface ValidateErrorMessageVo {
    errorLevel: string;
    errorMessage: string;
}
export interface ViewCorrelationFormVo {
    bizObjectId: string;
    formCode: string;
    instanceId: string;
    schemaCode: string;
    schemaType: string;
}
export interface WorkItemAddParticipantVo {
    comment: string;
    participantIds: Array<string>;
    workItemId: string;
}
export interface WorkItemAssistVo {
    comment: string;
    participantIds: Array<string>;
    workItemId: string;
}
export interface WorkItemBatchSubmitVo {
    comment: string;
    signFileVo: SignFileVo;
    workItemIdList: Array<string>;
}
export interface WorkItemCirculateVo {
    comment: string;
    participantIds: Array<string>;
    workItemId: string;
}
export interface WorkItemRejectVo {
    activityCode: string;
    comment: string;
    signFileVo: SignFileVo;
    submitToReject: boolean;
    workItemId: string;
}
export interface WorkItemRetrieveVo {
    workItemId: string;
}
export interface WorkItemSubmitVo {
    comment: string;
    data: any;
    departmentId: string;
    sheetDatas: Array<BizObjectSheetSubmitVo>;
    signFileVo: SignFileVo;
    workItemId: string;
}
export interface WorkItemTransferVo {
    comment: string;
    participantId: string;
    workItemId: string;
}
export interface WorkItemVo {
    activityCode: string;
    activityName: string;
    assignee: UnitVo;
    assignor: UnitVo;
    circulatedBy: UnitVo;
    circulatedById: string;
    duration: number;
    entrust: boolean;
    finishTime: string;
    formCode: string;
    id: string;
    instanceId: string;
    instanceName: string;
    instanceStatus: string;
    originator: UnitVo;
    originatorDepartment: UnitVo;
    originatorDepartmentId: string;
    originatorId: string;
    participant: UnitVo;
    participantId: string;
    receiveTime: string;
    resultStatus: string;
    sequenceNo: string;
    status: string;
    stayTime: number;
    timeout: boolean;
    timeoutStatus: string;
    type: string;
    urge: boolean;
    urgeMsg: string;
    workflowCode: string;
    workflowName: string;
}
export interface WorkflowDelegateVo {
    assignee: UnitVo;
    assignor: UnitVo;
    endTime: string;
    id: string;
    startTime: string;
    type: string;
    workflows: Array<CodeNameVo>;
}
export interface WorkflowDeploymentVo {
    code: string;
    description: string;
    id: string;
    name: string;
    procDefId: string;
    publishTime: string;
    publisher: string;
    publisherName: string;
    version: number;
}
export interface WorkflowDraftVo {
    code: string;
    icon: string;
    id: string;
    name: string;
    workflowTemplate: any;
}
export interface WorkflowExprValidVo {
    participantExpr: string;
    schemaCode: string;
}
export interface WorkflowFormDataVo {
    actionPermission: ActionPermissionVo;
    activityCode: string;
    activitys: Array<ActivityVo>;
    approvalLogs: Array<InstanceActivityVo>;
    approvalRequired: boolean;
    bizFormVo: BizFormVo;
    bizObjectData: any;
    bizObjectId: string;
    bizSchemaVo: BizSchemaVo;
    dataPermissionList: Array<Array<any>>;
    formCommentVoList: Array<BizFormCommentVo>;
    formRemind: FormRemindVo;
    formTypeEnum: string;
    instance: WorkflowInstanceVo;
    instanceId: string;
    propertyPermissions: Array<PropertyPermissionVo>;
    rejectActivitys: Array<ActivityVo>;
    runtimeActivitys: Array<InstanceActivityVo>;
    schemaCode: string;
    schemaType: string;
    sheetDatas: any;
    status: string;
    temporaryFlag: boolean;
    viewableActivitys: Array<InstanceActivityVo>;
    workItemId: string;
    workflowName: string;
}
export interface WorkflowHeaderVo {
    appCode: string;
    code: string;
    icon: string;
    id: string;
    name: string;
    published: boolean;
    schemaCode: string;
    shortLinkCode: string;
    shortLinkEnable: boolean;
    visibleMobile: boolean;
    visiblePc: boolean;
    visibleType: string;
}
export interface WorkflowInstanceVo {
    createTime: string;
    duration: number;
    finishTime: string;
    id: string;
    instanceId: string;
    name: string;
    originator: UnitVo;
    originatorDepartment: UnitVo;
    originatorDepartmentId: string;
    originatorId: string;
    participant: UnitVo;
    participantId: string;
    runtimeActivitys: Array<InstanceActivityVo>;
    sequenceNo: string;
    startTime: string;
    status: string;
    stayTime: number;
    workflowCode: string;
    workflowName: string;
    workflowVersion: number;
}
export interface WorkflowNodeParticipantVo {
    nodeId: string;
    nodeName: string;
    participants: Array<UnitVo>;
}
export interface WorkflowSchemaCodeVo {
    schemaCode: string;
    version: number;
    workflowCode: string;
}
export interface WxJsapiSignature {
    corpId: string;
    nonceStr: string;
    signature: string;
    timestamp: number;
    url: string;
}
