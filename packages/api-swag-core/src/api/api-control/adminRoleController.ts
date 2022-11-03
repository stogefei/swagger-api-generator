/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BatchSaveAdminRolePermissionVo, ResBodyVoid, ResBodyAdminRoleVo, AdminRoleVo, ResBodyAdminRolePermissionRangeVo, SaveAdminRolePermissionVo,
} from '../model';

/**
 * admin-role-controller
 */
export class AdminRoleController {
  
  /**
   * 修改管理组
   * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
   */
   async updateAdminRole (adminRoleVo: AdminRoleVo) {
    const result:AxiosResponse<ResBodyAdminRoleVo> = await API.Global.request({
      url: '/admin/permission/adminRole/updateAdminRole',
      method: 'post',
      data: adminRoleVo,
    });
    return result;
  }
  
  
  
  /**
   * 授予管理组权限
   * @param saveAdminRolePermissionVo - SaveAdminRolePermissionVo - body - saveAdminRolePermissionVo - 必填
   */
   async grantPermissions (saveAdminRolePermissionVo: SaveAdminRolePermissionVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/permission/adminRole/grantPermissions',
      method: 'post',
      data: saveAdminRolePermissionVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取角色详情，包含直接子级
   * @param roleId - string - query - 管理组id - 必填
   * @param roleType - string - query - 角色类型 - 必填
   */
   async getRoleInfo (roleId: string, roleType: string) {
    const result:AxiosResponse<ResBodyAdminRoleVo> = await API.Global.request({
      url: '/admin/permission/adminRole/getRoleInfo',
      method: 'get',
      params: { roleId, roleType },
    });
    return result;
  }
  
  
  
  /**
   * 获取角色可授予的权限范围
   * @param roleId - string - query - 管理组id - 必填
   */
   async getPermissionRange (roleId: string) {
    const result:AxiosResponse<ResBodyAdminRolePermissionRangeVo> = await API.Global.request({
      url: '/admin/permission/adminRole/getPermissionRange',
      method: 'get',
      params: { roleId },
    });
    return result;
  }
  
  
  
  /**
   * 删除管理组
   * @param roleIds - Array<string> - body - roleIds - 必填
   */
   async deleteAdminRole (roleIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/permission/adminRole/deleteAdminRole',
      method: 'post',
      data: roleIds,
    });
    return result;
  }
  
  
  
  /**
   * 新增管理组
   * @param adminRoleVo - AdminRoleVo - body - adminRoleVo - 必填
   */
   async createAdminRole (adminRoleVo: AdminRoleVo) {
    const result:AxiosResponse<ResBodyAdminRoleVo> = await API.Global.request({
      url: '/admin/permission/adminRole/createAdminRole',
      method: 'post',
      data: adminRoleVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取管理员角色架构图树
   */
   async chartTree () {
    const result:AxiosResponse<ResBodyAdminRoleVo> = await API.Global.request({
      url: '/admin/permission/adminRole/chartTree',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 批量授予管理组权限
   * @param batchSaveAdminRolePermissionVo - BatchSaveAdminRolePermissionVo - body - batchSaveAdminRolePermissionVo - 必填
   */
   async batchGrantPermissions (batchSaveAdminRolePermissionVo: BatchSaveAdminRolePermissionVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/permission/adminRole/batchGrantPermissions',
      method: 'post',
      data: batchSaveAdminRolePermissionVo,
    });
    return result;
  }
  
  
}
