/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyUserVo,
} from '../model';

/**
 * organization-open-api
 */
export class OrganizationOpenApi {
  
  /**
   * 根据用户账号获取用户详情
   * @param orgId - string - query - 组织id - 必填
   * @param userCode - string - query - 用户账号 - 必填
   */
   async getByCode (orgId: string, userCode: string) {
    const result:AxiosResponse<ResBodyUserVo> = await API.Global.request({
      url: '/openapi/organization/user/getByCode',
      method: 'get',
      params: { orgId, userCode },
    });
    return result;
  }
  
  
}
