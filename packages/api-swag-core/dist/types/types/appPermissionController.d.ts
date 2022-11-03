import { AppPerGroupVo, ResBodyAppPerGroupVo, ResBodySchemaPermissionVo, ResBodyListAppPerGroupVo, ResBodyListSchemaPermissionVo, ResBodyListSchemaPropertyPermissionVo, ResBodyVoid, IdNameVo, ResBodyAppPermissionSettingVo, SaveSchemaPermissionVo, AppPerGroupSortVo } from '../api/model';
/**
 * app-permission-controller
 */
export interface AppPermissionController {
    /**
     * 修改权限组
     * @param appPerGroupVo - AppPerGroupVo - body - appPerGroupVo - 必填
     */
    updateGroup(appPerGroupVo: AppPerGroupVo): Promise<ResBodyAppPerGroupVo>;
    /**
     * 排序
     * @param sortVo - AppPerGroupSortVo - body - sortVo - 必填
     */
    sort(sortVo: AppPerGroupSortVo): Promise<ResBodyVoid>;
    /**
     * 保存权限组的模型权限
     * @param saveSchemaPermissionVo - SaveSchemaPermissionVo - body - saveSchemaPermissionVo - 必填
     */
    saveSchemaPermissions(saveSchemaPermissionVo: SaveSchemaPermissionVo): Promise<ResBodyVoid>;
    /**
     * 获取应用下模型权限资源
     * @param appCode - string - query - 应用编码 - 必填
     */
    resource(appCode: string): Promise<ResBodyAppPermissionSettingVo>;
    /**
     * 重命名
     * @param renameVo - IdNameVo - body - renameVo - 必填
     */
    rename(renameVo: IdNameVo): Promise<ResBodyVoid>;
    /**
     * 删除权限组
     * @param ids - Array<string> - body - ids - 必填
     */
    removeGroups(ids: Array<string>): Promise<ResBodyVoid>;
    /**
     * 获取指定模型的数据项权限资源
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    propertyResource(schemaCode: string): Promise<ResBodyListSchemaPropertyPermissionVo>;
    /**
     * 获取权限组的模型权限列表
     * @param perGroupId - string - query - 权限组id - 必填
     */
    listSchemaPermission(perGroupId: string): Promise<ResBodyListSchemaPermissionVo>;
    /**
     * 获取应用权限组列表
     * @param appCode - string - query - 应用编码 - 必填
     */
    listGroups(appCode: string): Promise<ResBodyListAppPerGroupVo>;
    /**
     * 获取权限组的下指定模型权限
     * @param perGroupId - string - query - 权限组id - 必填
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    getSchemaPermission(perGroupId: string, schemaCode: string): Promise<ResBodySchemaPermissionVo>;
    /**
     * 创建权限组
     * @param appPerGroupVo - AppPerGroupVo - body - appPerGroupVo - 必填
     */
    createGroup(appPerGroupVo: AppPerGroupVo): Promise<ResBodyAppPerGroupVo>;
}
