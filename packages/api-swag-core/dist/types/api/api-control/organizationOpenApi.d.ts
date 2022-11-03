import { AxiosResponse } from 'axios';
import { ResBodyUserVo } from '../model';
/**
 * organization-open-api
 */
export declare class OrganizationOpenApi {
    /**
     * 根据用户账号获取用户详情
     * @param orgId - string - query - 组织id - 必填
     * @param userCode - string - query - 用户账号 - 必填
     */
    getByCode(orgId: string, userCode: string): Promise<AxiosResponse<ResBodyUserVo, any>>;
}
