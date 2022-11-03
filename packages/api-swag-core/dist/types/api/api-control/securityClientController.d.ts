import { AxiosResponse } from 'axios';
import { SecurityClientVo, ResBodySecurityClientVo, ResBodyListSecurityClientVo, IDVo, ResBodyVoid, ResBodystring } from '../model';
/**
 * security-client-controller
 */
export declare class SecurityClientController {
    /**
     * 创建客户端
     * @param securityClientVo - SecurityClientVo - body - securityClientVo - 必填
     */
    update(securityClientVo: SecurityClientVo): Promise<AxiosResponse<ResBodySecurityClientVo, any>>;
    /**
     * 重置客户端密钥
     * @param idVo - IDVo - body - idVo - 必填
     */
    resetSecret(idVo: IDVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 删除客户端
     * @param idVo - IDVo - body - idVo - 必填
     */
    remove(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取客户端列表
     */
    list(): Promise<AxiosResponse<ResBodyListSecurityClientVo, any>>;
    /**
     * 创建客户端
     * @param securityClientVo - SecurityClientVo - body - securityClientVo - 必填
     */
    create(securityClientVo: SecurityClientVo): Promise<AxiosResponse<ResBodySecurityClientVo, any>>;
}
