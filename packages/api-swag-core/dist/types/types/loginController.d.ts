import { ResBodyGenKeyResultVo, ResBodyListOrganizationVo, LoginVo, ResBodystring, ResBodyVoid } from '../api/model';
/**
 * login-controller
 */
export interface LoginController {
    /**
     * 免密登录
     * @param code - string - query - 授权码 - 必填
     * @param corpId - string - query - 第三方企业id - 必填
     * @param authType - string - query - 免密登陆类型 - 可空
     */
    ssoLogin(code: string, corpId: string, authType?: string): Promise<ResBodystring>;
    /**
     * 账户登出
     */
    logout(): Promise<ResBodyVoid>;
    /**
     * 账户登录
     * @param loginVo - LoginVo - body - loginVo - 必填
     */
    login(loginVo: LoginVo): Promise<ResBodystring>;
    /**
     * 获取登陆组织列表
     */
    getOrgList(): Promise<ResBodyListOrganizationVo>;
    /**
     * 获取加密公钥
     */
    genRsaKey(): Promise<ResBodyGenKeyResultVo>;
}
