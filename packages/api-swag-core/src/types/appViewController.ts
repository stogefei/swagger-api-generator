/* eslint-disable */
import {
  BizViewQueryVo, ResBodyBizViewVo, ResBodyListBizViewVo, BizViewDataQueryVo, ResBodyPageVOMapstringobject,
} from '../api/model';

/**
 * app-view-controller
 */
export interface AppViewController {

  /**
   * 查询数据
   * @param bizViewDataQueryVo - BizViewDataQueryVo - body - bizViewDataQueryVo - 必填
   */
  listData (bizViewDataQueryVo: BizViewDataQueryVo): Promise<ResBodyPageVOMapstringobject>;

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
}
