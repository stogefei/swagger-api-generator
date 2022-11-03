/* eslint-disable */
import {
  AppPackageVo, ResBodyAppPackageVo, ResBodyVoid, NameVo, ResBodyAppGroupVo, ResBodyListAppGroupVo, IDVo, AppGroupVo, ResBodyListAppPackageVo, FlagVo, ResBodyListFunTreeVo,
} from '../api/model';

/**
 * app-package-controller
 */
export interface AppPackageController {

  /**
   * 设置应用按权限组授权
   * @param ids - Array<string> - body - ids - 必填
   */
  visiblePerGroup (ids: Array<string>): Promise<ResBodyVoid>;

  /**
   * 设置应用所有用户可见
   * @param ids - Array<string> - body - ids - 必填
   */
  visibleAll (ids: Array<string>): Promise<ResBodyVoid>;

  /**
   * 删除应用
   * @param ids - Array<string> - body - ids - 必填
   */
  remove (ids: Array<string>): Promise<ResBodyVoid>;

  /**
   * 编辑应用
   * @param appPackageVo - AppPackageVo - body - appPackageVo - 必填
   */
  modify (appPackageVo: AppPackageVo): Promise<ResBodyAppPackageVo>;

  /**
   * 获取用户拥有的应用列表
   * @param userId - string - query - 用户id - 必填
   */
  listOwn (userId: string): Promise<ResBodyListAppPackageVo>;

  /**
   * 分组方式获取应用列表
   * @param flagVo - FlagVo - body - flagVo - 必填
   */
  listGroupBy (flagVo: FlagVo): Promise<ResBodyListFunTreeVo>;

  /**
   * 获取启用的应用列表
   */
  listEnable (): Promise<ResBodyListAppPackageVo>;

  /**
   * 获取应用列表
   */
  list (): Promise<ResBodyListAppPackageVo>;

  /**
   * 修改应用分组名称
   * @param appGroupVo - AppGroupVo - body - appGroupVo - 必填
   */
  groupUpdate (appGroupVo: AppGroupVo): Promise<ResBodyAppGroupVo>;

  /**
   * 删除应用分组
   * @param idVo - IDVo - body - idVo - 必填
   */
  groupRemove (idVo: IDVo): Promise<ResBodyVoid>;

  /**
   * 获取应用分组列表
   */
  groupList (): Promise<ResBodyListAppGroupVo>;

  /**
   * 新增应用分组
   * @param nameVo - NameVo - body - nameVo - 必填
   */
  groupAdd (nameVo: NameVo): Promise<ResBodyAppGroupVo>;

  /**
   * 根据应用编码获取应用详情
   * @param code - string - query - 应用编码 - 必填
   */
  getByCode (code: string): Promise<ResBodyAppPackageVo>;

  /**
   * 获取应用详情
   * @param id - string - query - 应用id - 必填
   */
  get (id: string): Promise<ResBodyAppPackageVo>;

  /**
   * 启用应用
   * @param ids - Array<string> - body - ids - 必填
   */
  enable (ids: Array<string>): Promise<ResBodyVoid>;

  /**
   * 禁用应用
   * @param ids - Array<string> - body - ids - 必填
   */
  disable (ids: Array<string>): Promise<ResBodyVoid>;

  /**
   * 创建应用
   * @param appPackageVo - AppPackageVo - body - appPackageVo - 必填
   */
  create (appPackageVo: AppPackageVo): Promise<ResBodyAppPackageVo>;
}
