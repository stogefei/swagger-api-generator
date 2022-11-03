/* eslint-disable */
import {
  ResBodyMapstringListBizPropertyVo, SchemaPropertyCodeVo, ResBodyVoid, BizPropertyVo, ResBodyBizPropertyVo, ResBodyListBizPropertyVo, ResBodyRemovePropertyVo, BizPropertySortVo,
} from '../api/model';

/**
 * biz-property-controller
 */
export interface BizPropertyController {

  /**
   * 数据项排序
   * @param bizPropertySortVo - BizPropertySortVo - body - bizPropertySortVo - 必填
   */
  sort (bizPropertySortVo: BizPropertySortVo): Promise<ResBodyVoid>;

  /**
   * 删除数据项
   * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
   */
  remove (schemaPropertyCodeVo: SchemaPropertyCodeVo): Promise<ResBodyRemovePropertyVo>;

  /**
   * 修改数据项
   * @param bizPropertyVo - BizPropertyVo - body - bizPropertyVo - 必填
   */
  modify (bizPropertyVo: BizPropertyVo): Promise<ResBodyBizPropertyVo>;

  /**
   * 获取数据项列表
   * @param schemaCode - string - query - 模型编码 - 必填
   * @param loadSheetSysProperty - boolean - query - 是否加载子表系统字段 - 可空
   * @param sortType - string - query - 排序 - 可空
   */
  list (schemaCode: string, loadSheetSysProperty?: boolean, sortType?: string): Promise<ResBodyListBizPropertyVo>;

  /**
   * 根据流程编码获取已发布的数据项列表
   * @param workflowCode - string - query - 流程编码 - 必填
   * @param loadSheetSysProperty - boolean - query - 模型编码 - 可空
   */
  getPublishListByWorkflowCode (workflowCode: string, loadSheetSysProperty?: boolean): Promise<ResBodyListBizPropertyVo>;

  /**
   * 获取已发布的数据项列表
   * @param schemaCode - string - query - 模型编码 - 必填
   * @param loadSheetSysProperty - boolean - query - 是否加载子表系统字段 - 可空
   */
  getPublishList (schemaCode: string, loadSheetSysProperty?: boolean): Promise<ResBodyListBizPropertyVo>;

  /**
   * 获取数据项详情
   * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
   */
  get (schemaPropertyCodeVo: SchemaPropertyCodeVo): Promise<ResBodyBizPropertyVo>;

  /**
   * 创建数据项
   * @param bizPropertyVo - BizPropertyVo - body - bizPropertyVo - 必填
   */
  create (bizPropertyVo: BizPropertyVo): Promise<ResBodyBizPropertyVo>;

  /**
   * 确认删除数据项
   * @param schemaPropertyCodeVo - SchemaPropertyCodeVo - body - schemaPropertyCodeVo - 必填
   */
  confirmRemove (schemaPropertyCodeVo: SchemaPropertyCodeVo): Promise<ResBodyVoid>;

  /**
   * 根据流程编码批量获取已发布的数据项列表
   * @param workflowCodes - Array<string> - body - workflowCodes - 必填
   */
  batchListPublishByWorkflowCodes (workflowCodes: Array<string>): Promise<ResBodyMapstringListBizPropertyVo>;

  /**
   * 批量获取模型已发布的数据项列表
   * @param schemaCodes - Array<string> - body - schemaCodes - 必填
   */
  batchListPublish (schemaCodes: Array<string>): Promise<ResBodyMapstringListBizPropertyVo>;
}
