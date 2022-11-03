/* eslint-disable */
import {
  BizServiceCategoryVo, ResBodyBizServiceCategoryVo, ResBodyListBizServiceCategoryVo, ResBodyVoid,
} from '../api/model';

/**
 * biz-service-categroy-controller
 */
export interface BizServiceCategroyController {

  /**
   * 修改目录
   * @param bizServiceCategoryVo - BizServiceCategoryVo - body - bizServiceCategoryVo - 必填
   */
  update (bizServiceCategoryVo: BizServiceCategoryVo): Promise<ResBodyBizServiceCategoryVo>;

  /**
   * 删除目录
   * @param ids - Array<string> - body - ids - 必填
   */
  remove (ids: Array<string>): Promise<ResBodyVoid>;

  /**
   * 根据关键字获取目录列表
   * @param keyword - string - query - 关键字 - 可空
   */
  getList (keyword?: string): Promise<ResBodyListBizServiceCategoryVo>;

  /**
   * 新建目录
   * @param bizServiceCategoryVo - BizServiceCategoryVo - body - bizServiceCategoryVo - 必填
   */
  create (bizServiceCategoryVo: BizServiceCategoryVo): Promise<ResBodyBizServiceCategoryVo>;
}
