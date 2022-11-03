/* eslint-disable */
import {
  ResBodystring, ResBodyOrganizationVo, ResBodyListOrganizationVo, OrgSyncRecordQueryVo, ResBodyPageVOOrgSyncRecordVo, ResBodyVoid, OrganizationVo, SyncOrgVo,
} from '../api/model';

/**
 * organization-controller
 */
export interface OrganizationController {

  /**
   * 同步组织
   * @param syncOrgVo - SyncOrgVo - body - syncOrgVo - 必填
   */
  syncOrgs (syncOrgVo: SyncOrgVo): Promise<ResBodystring>;

  /**
   * 保存组织
   * @param organizationVo - OrganizationVo - body - organizationVo - 必填
   */
  save (organizationVo: OrganizationVo): Promise<ResBodyVoid>;

  /**
   * 删除组织
   * @param orgIds - Array<string> - body - orgIds - 必填
   */
  remove (orgIds: Array<string>): Promise<ResBodyVoid>;

  /**
   * 组织同步记录查询
   * @param queryParams - OrgSyncRecordQueryVo - body - queryParams - 必填
   */
  record (queryParams: OrgSyncRecordQueryVo): Promise<ResBodyPageVOOrgSyncRecordVo>;

  /**
   * 获取组织列表
   */
  getList (): Promise<ResBodyListOrganizationVo>;

  /**
   * 获取组织详情
   * @param orgId - string - query - 组织id - 必填
   */
  get (orgId: string): Promise<ResBodyOrganizationVo>;

  /**
   * 组织同步结果获取
   * @param taskId - string - query - taskId - 必填
   */
  genSyncResult (taskId: string): Promise<ResBodystring>;
}
