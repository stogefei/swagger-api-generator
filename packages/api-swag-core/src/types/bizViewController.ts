/* eslint-disable */
import {
  BizViewVo, ResBodyBizViewVo, BizViewQueryVo, ResBodyListBizViewVo, ResBodyVoid, BizViewSortVo, BizViewVisibleVo,
} from '../api/model';

/**
 * biz-view-controller
 */
export interface BizViewController {

  /**
   * 修改可见端
   * @param bizViewVisibleVo - BizViewVisibleVo - body - bizViewVisibleVo - 必填
   */
  updateVisible (bizViewVisibleVo: BizViewVisibleVo): Promise<ResBodyVoid>;

  /**
   * 编辑视图
   * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
   */
  update (bizViewVo: BizViewVo): Promise<ResBodyBizViewVo>;

  /**
   * 排序
   * @param sortVo - BizViewSortVo - body - sortVo - 必填
   */
  sort (sortVo: BizViewSortVo): Promise<ResBodyVoid>;

  /**
   * 删除视图
   * @param bizViewQueryVo - BizViewQueryVo - body - bizViewQueryVo - 必填
   */
  remove (bizViewQueryVo: BizViewQueryVo): Promise<ResBodyVoid>;

  /**
   * 发布视图
   * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
   */
  publish (bizViewVo: BizViewVo): Promise<ResBodyBizViewVo>;

  /**
   * 获取视图列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
  list (schemaCode: string): Promise<ResBodyListBizViewVo>;

  /**
   * 获取视图详情
   * @param bizViewQueryVo - BizViewQueryVo - body - bizViewQueryVo - 必填
   */
  getViewInfo (bizViewQueryVo: BizViewQueryVo): Promise<ResBodyBizViewVo>;

  /**
   * 创建视图
   * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
   */
  create (bizViewVo: BizViewVo): Promise<ResBodyBizViewVo>;
}
