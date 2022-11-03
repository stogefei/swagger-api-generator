import { BatchSaveAdminRolePermissionVo, ResBodyVoid, ResBodyAdminRoleVo, AdminRoleVo, ResBodyAdminRolePermissionRangeVo, SaveAdminRolePermissionVo } from '../api/model';
/**
 * admin-role-controller
 */
export interface AdminRoleController {
    /**
     * 修改管理组
     * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
     */
    updateAdminRole(adminRoleVo: AdminRoleVo): Promise<ResBodyAdminRoleVo>;
    /**
     * 授予管理组权限
     * @param saveAdminRolePermissionVo - SaveAdminRolePermissionVo - body - saveAdminRolePermissionVo - 必填
     */
    grantPermissions(saveAdminRolePermissionVo: SaveAdminRolePermissionVo): Promise<ResBodyVoid>;
    /**
     * 获取角色详情，包含直接子级
     * @param roleId - string - query - 管理组id - 必填
     * @param roleType - string - query - 角色类型 - 必填
     */
    getRoleInfo(roleId: string, roleType: string): Promise<ResBodyAdminRoleVo>;
    /**
     * 获取角色可授予的权限范围
     * @param roleId - string - query - 管理组id - 必填
     */
    getPermissionRange(roleId: string): Promise<ResBodyAdminRolePermissionRangeVo>;
    /**
     * 删除管理组
     * @param roleIds - Array<string> - body - roleIds - 必填
     */
    deleteAdminRole(roleIds: Array<string>): Promise<ResBodyVoid>;
    /**
     * 新增管理组
     * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
     */
    createAdminRole(adminRoleVo: AdminRoleVo): Promise<ResBodyAdminRoleVo>;
    /**
     * 获取管理员角色架构图树
     */
    chartTree(): Promise<ResBodyAdminRoleVo>;
    /**
     * 批量授予管理组权限
     * @param batchSaveAdminRolePermissionVo - BatchSaveAdminRolePermissionVo - body - batchSaveAdminRolePermissionVo - 必填
     */
    batchGrantPermissions(batchSaveAdminRolePermissionVo: BatchSaveAdminRolePermissionVo): Promise<ResBodyVoid>;
}
