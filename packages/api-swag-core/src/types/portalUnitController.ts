/* eslint-disable */
import {
  OrgAscriptionCheckVo, ResBodyboolean, ResBodyUserVo, ResBodyUserMappingInfoVo, IDVo, ResBodyVoid, UpdatePasswordVo,
} from '../api/model';

/**
 * portal-unit-controller
 */
export interface PortalUnitController {

  /**
   * 修改密码
   * @param updatePasswordVo - UpdatePasswordVo - body - updatePasswordVo - 必填
   */
  updatePwd (updatePasswordVo: UpdatePasswordVo): Promise<ResBodyVoid>;

  /**
   * 修改当前登陆用户头像
   * @param idVo - IDVo - body - idVo - 必填
   */
  updateAvatar (idVo: IDVo): Promise<ResBodyVoid>;

  /**
   * 查询用户映射信息
   * @param userId - string - query - 用户id - 必填
   */
  getUserMappingInfo (userId: string): Promise<ResBodyUserMappingInfoVo>;

  /**
   * 获取用户信息
   * @param userId - string - query - 用户id - 必填
   */
  getUserInfo (userId: string): Promise<ResBodyUserVo>;

  /**
   * 获取当前登陆用户信息
   */
  getCurUserInfo (): Promise<ResBodyUserVo>;

  /**
   * 组织属于、拥有校验
   * @param orgAscriptionCheckVo - OrgAscriptionCheckVo - body - orgAscriptionCheckVo - 必填
   */
  belongToCheck (orgAscriptionCheckVo: OrgAscriptionCheckVo): Promise<ResBodyboolean>;
}
