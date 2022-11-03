/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodystring, ResBodyOrganizationVo, ResBodyListOrganizationVo, OrgSyncRecordQueryVo, ResBodyPageVOOrgSyncRecordVo, ResBodyVoid, OrganizationVo, SyncOrgVo,
} from '../model';

/**
 * organization-controller
 */
export class OrganizationController {
  
  /**
   * 同步组织
   * @param syncOrgVo - SyncOrgVo - body - syncOrgVo - 必填
   */
   async syncOrgs (syncOrgVo: SyncOrgVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/admin/org/config/syncOrgs',
      method: 'post',
      data: syncOrgVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存组织
   * @param organizationVo - OrganizationVo - body - organizationVo - 必填
   */
   async save (organizationVo: OrganizationVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/config/save',
      method: 'post',
      data: organizationVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除组织
   * @param orgIds - Array<string> - body - orgIds - 必填
   */
   async remove (orgIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/config/remove',
      method: 'post',
      data: orgIds,
    });
    return result;
  }
  
  
  
  /**
   * 组织同步记录查询
   * @param queryParams - OrgSyncRecordQueryVo - body - queryParams - 必填
   */
   async record (queryParams: OrgSyncRecordQueryVo) {
    const result:AxiosResponse<ResBodyPageVOOrgSyncRecordVo> = await API.Global.request({
      url: '/admin/org/config/query/record',
      method: 'post',
      data: queryParams,
    });
    return result;
  }
  
  
  
  /**
   * 获取组织列表
   */
   async getList () {
    const result:AxiosResponse<ResBodyListOrganizationVo> = await API.Global.request({
      url: '/admin/org/config/getList',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 获取组织详情
   * @param orgId - string - query - 组织id - 必填
   */
   async get (orgId: string) {
    const result:AxiosResponse<ResBodyOrganizationVo> = await API.Global.request({
      url: '/admin/org/config/get',
      method: 'get',
      params: { orgId },
    });
    return result;
  }
  
  
  
  /**
   * 组织同步结果获取
   * @param taskId - string - query - taskId - 必填
   */
   async genSyncResult (taskId: string) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/admin/org/config/genSyncResult',
      method: 'get',
      params: { taskId },
    });
    return result;
  }
  
  
}
