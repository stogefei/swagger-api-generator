/* eslint-disable */
import {
  ResBodyDashboardVo, ResBodyBizMenuVo, ResBodyBizSchemaVo, ResBodyAppPackageVo, ResBodyListAppPackageVo, ResBodyListFunTreeVo, ResBodyListBizSchemaVo,
} from '../api/model';

/**
 * app-controller
 */
export interface AppController {

  /**
   * 搜索模型
   * @param keyword - string - query - 关键字 - 必填
   */
  searchSchemas (keyword: string): Promise<ResBodyListBizSchemaVo>;

  /**
   * 分组方式获取启用的应用列表
   */
  listGroupBy (): Promise<ResBodyListFunTreeVo>;

  /**
   * 获取启用的应用列表
   */
  list (): Promise<ResBodyListAppPackageVo>;

  /**
   * 获取应用详情
   * @param appCode - string - query - 应用编码 - 必填
   */
  info (appCode: string): Promise<ResBodyAppPackageVo>;

  /**
   * 获取模型详情
   * @param schemaCode - string - query - 模型编码 - 必填
   */
  getSchemaInfo (schemaCode: string): Promise<ResBodyBizSchemaVo>;

  /**
   * 获取自定义菜单详情
   * @param menuCode - string - query - 菜单编码 - 必填
   */
  getMenuInfo (menuCode: string): Promise<ResBodyBizMenuVo>;

  /**
   * 获取仪表盘详情
   * @param code - string - query - 仪表盘编码 - 必填
   */
  getDashboardInfo (code: string): Promise<ResBodyDashboardVo>;
}
