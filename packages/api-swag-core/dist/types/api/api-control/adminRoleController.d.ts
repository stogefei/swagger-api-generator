import { AxiosResponse } from 'axios';
import { BatchSaveAdminRolePermissionVo, ResBodyVoid, ResBodyAdminRoleVo, AdminRoleVo, ResBodyAdminRolePermissionRangeVo, SaveAdminRolePermissionVo } from '../model';
/**
 * admin-role-controller
 */
export declare class AdminRoleController {
    /**
     * 修改管理组
     * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
     */
    updateAdminRole(adminRoleVo: AdminRoleVo): Promise<AxiosResponse<ResBodyAdminRoleVo, any>>;
    /**
     * 授予管理组权限
     * @param saveAdminRolePermissionVo - SaveAdminRolePermissionVo - body - saveAdminRolePermissionVo - 必填
     */
    grantPermissions(saveAdminRolePermissionVo: SaveAdminRolePermissionVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取角色详情，包含直接子级
     * @param roleId - string - query - 管理组id - 必填
     * @param roleType - string - query - 角色类型 - 必填
     */
    getRoleInfo(roleId: string, roleType: string): Promise<AxiosResponse<ResBodyAdminRoleVo, any>>;
    /**
     * 获取角色可授予的权限范围
     * @param roleId - string - query - 管理组id - 必填
     */
    getPermissionRange(roleId: string): Promise<AxiosResponse<ResBodyAdminRolePermissionRangeVo, any>>;
    /**
     * 删除管理组
     * @param roleIds - Array<string> - body - roleIds - 必填
     */
    deleteAdminRole(roleIds: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 新增管理组
     * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
     */
    createAdminRole(adminRoleVo: AdminRoleVo): Promise<AxiosResponse<ResBodyAdminRoleVo, any>>;
    /**
     * 获取管理员角色架构图树
     */
    chartTree(): Promise<AxiosResponse<ResBodyAdminRoleVo, any>>;
    /**
     * 批量授予管理组权限
     * @param batchSaveAdminRolePermissionVo - BatchSaveAdminRolePermissionVo - body - batchSaveAdminRolePermissionVo - 必填
     */
    batchGrantPermissions(batchSaveAdminRolePermissionVo: BatchSaveAdminRolePermissionVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
