import { AxiosResponse } from 'axios';
import { ResBodystring, ResBodyOrganizationVo, ResBodyListOrganizationVo, OrgSyncRecordQueryVo, ResBodyPageVOOrgSyncRecordVo, ResBodyVoid, OrganizationVo, SyncOrgVo } from '../model';
/**
 * organization-controller
 */
export declare class OrganizationController {
    /**
     * 同步组织
     * @param syncOrgVo - SyncOrgVo - body - syncOrgVo - 必填
     */
    syncOrgs(syncOrgVo: SyncOrgVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 保存组织
     * @param organizationVo - OrganizationVo - body - organizationVo - 必填
     */
    save(organizationVo: OrganizationVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除组织
     * @param orgIds - Array<string> - body - orgIds - 必填
     */
    remove(orgIds: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 组织同步记录查询
     * @param queryParams - OrgSyncRecordQueryVo - body - queryParams - 必填
     */
    record(queryParams: OrgSyncRecordQueryVo): Promise<AxiosResponse<ResBodyPageVOOrgSyncRecordVo, any>>;
    /**
     * 获取组织列表
     */
    getList(): Promise<AxiosResponse<ResBodyListOrganizationVo, any>>;
    /**
     * 获取组织详情
     * @param orgId - string - query - 组织id - 必填
     */
    get(orgId: string): Promise<AxiosResponse<ResBodyOrganizationVo, any>>;
    /**
     * 组织同步结果获取
     * @param taskId - string - query - taskId - 必填
     */
    genSyncResult(taskId: string): Promise<AxiosResponse<ResBodystring, any>>;
}
