/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    AppPerGroupVo, ResBodyAppPerGroupVo, ResBodySchemaPermissionVo, ResBodyListAppPerGroupVo, ResBodyListSchemaPermissionVo, ResBodyListSchemaPropertyPermissionVo, ResBodyVoid, IdNameVo, ResBodyAppPermissionSettingVo, SaveSchemaPermissionVo, AppPerGroupSortVo,
} from '../model';

/**
 * app-permission-controller
 */
export class AppPermissionController {
  
  /**
   * 修改权限组
   * @param appPerGroupVo - AppPerGroupVo - body - appPerGroupVo - 必填
   */
   async updateGroup (appPerGroupVo: AppPerGroupVo) {
    const result:AxiosResponse<ResBodyAppPerGroupVo> = await API.Global.request({
      url: '/admin/model/app/permission/updateGroup',
      method: 'post',
      data: appPerGroupVo,
    });
    return result;
  }
  
  
  
  /**
   * 排序
   * @param sortVo - AppPerGroupSortVo - body - sortVo - 必填
   */
   async sort (sortVo: AppPerGroupSortVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/permission/sort',
      method: 'post',
      data: sortVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存权限组的模型权限
   * @param saveSchemaPermissionVo - SaveSchemaPermissionVo - body - saveSchemaPermissionVo - 必填
   */
   async saveSchemaPermissions (saveSchemaPermissionVo: SaveSchemaPermissionVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/permission/saveSchemaPermissions',
      method: 'post',
      data: saveSchemaPermissionVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取应用下模型权限资源
   * @param appCode - string - query - 应用编码 - 必填
   */
   async resource (appCode: string) {
    const result:AxiosResponse<ResBodyAppPermissionSettingVo> = await API.Global.request({
      url: '/admin/model/app/permission/resource',
      method: 'get',
      params: { appCode },
    });
    return result;
  }
  
  
  
  /**
   * 重命名
   * @param renameVo - IdNameVo - body - renameVo - 必填
   */
   async rename (renameVo: IdNameVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/permission/rename',
      method: 'post',
      data: renameVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除权限组
   * @param ids - Array<string> - body - ids - 必填
   */
   async removeGroups (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/permission/removeGroups',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 获取指定模型的数据项权限资源
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async propertyResource (schemaCode: string) {
    const result:AxiosResponse<ResBodyListSchemaPropertyPermissionVo> = await API.Global.request({
      url: '/admin/model/app/permission/propertyResource',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取权限组的模型权限列表
   * @param perGroupId - string - query - 权限组id - 必填
   */
   async listSchemaPermission (perGroupId: string) {
    const result:AxiosResponse<ResBodyListSchemaPermissionVo> = await API.Global.request({
      url: '/admin/model/app/permission/listSchemaPermission',
      method: 'get',
      params: { perGroupId },
    });
    return result;
  }
  
  
  
  /**
   * 获取应用权限组列表
   * @param appCode - string - query - 应用编码 - 必填
   */
   async listGroups (appCode: string) {
    const result:AxiosResponse<ResBodyListAppPerGroupVo> = await API.Global.request({
      url: '/admin/model/app/permission/listGroups',
      method: 'get',
      params: { appCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取权限组的下指定模型权限
   * @param perGroupId - string - query - 权限组id - 必填
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async getSchemaPermission (perGroupId: string, schemaCode: string) {
    const result:AxiosResponse<ResBodySchemaPermissionVo> = await API.Global.request({
      url: '/admin/model/app/permission/getSchemaPermission',
      method: 'get',
      params: { perGroupId, schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 创建权限组
   * @param appPerGroupVo - AppPerGroupVo - body - appPerGroupVo - 必填
   */
   async createGroup (appPerGroupVo: AppPerGroupVo) {
    const result:AxiosResponse<ResBodyAppPerGroupVo> = await API.Global.request({
      url: '/admin/model/app/permission/createGroup',
      method: 'post',
      data: appPerGroupVo,
    });
    return result;
  }
  
  
}
