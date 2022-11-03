import { AxiosResponse } from 'axios';
import { ResBodyGenKeyResultVo, ResBodyListOrganizationVo, LoginVo, ResBodystring, ResBodyVoid } from '../model';
/**
 * login-controller
 */
export declare class LoginController {
    /**
     * 免密登录
     * @param code - string - query - 授权码 - 必填
     * @param corpId - string - query - 第三方企业id - 必填
     * @param authType - string - query - 免密登陆类型 - 可空
     */
    ssoLogin(code: string, corpId: string, authType?: string): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 账户登出
     */
    logout(): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 账户登录
     * @param loginVo - LoginVo - body - loginVo - 必填
     */
    login(loginVo: LoginVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 获取登陆组织列表
     */
    getOrgList(): Promise<AxiosResponse<ResBodyListOrganizationVo, any>>;
    /**
     * 获取加密公钥
     */
    genRsaKey(): Promise<AxiosResponse<ResBodyGenKeyResultVo, any>>;
}
