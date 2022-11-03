/* eslint-disable */
import {
  SecurityClientVo, ResBodySecurityClientVo, ResBodyListSecurityClientVo, IDVo, ResBodyVoid, ResBodystring,
} from '../api/model';

/**
 * security-client-controller
 */
export interface SecurityClientController {

  /**
   * 创建客户端
   * @param securityClientVo - SecurityClientVo - body - securityClientVo - 必填
   */
  update (securityClientVo: SecurityClientVo): Promise<ResBodySecurityClientVo>;

  /**
   * 重置客户端密钥
   * @param idVo - IDVo - body - idVo - 必填
   */
  resetSecret (idVo: IDVo): Promise<ResBodystring>;

  /**
   * 删除客户端
   * @param idVo - IDVo - body - idVo - 必填
   */
  remove (idVo: IDVo): Promise<ResBodyVoid>;

  /**
   * 获取客户端列表
   */
  list (): Promise<ResBodyListSecurityClientVo>;

  /**
   * 创建客户端
   * @param securityClientVo - SecurityClientVo - body - securityClientVo - 必填
   */
  create (securityClientVo: SecurityClientVo): Promise<ResBodySecurityClientVo>;
}
