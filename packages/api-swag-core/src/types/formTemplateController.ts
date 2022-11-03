/* eslint-disable */
import {
  BizFormTemplateVo, ResBodyVoid, ResBodyListBizFormTemplateVo, ResBodyBizFormTemplateVo,
} from '../api/model';

/**
 * form-template-controller
 */
export interface FormTemplateController {

  /**
   * 修改模板
   * @param bizFormTemplateVo - BizFormTemplateVo - body - bizFormTemplateVo - 必填
   */
  update (bizFormTemplateVo: BizFormTemplateVo): Promise<ResBodyVoid>;

  /**
   * 获取模板详情
   * @param code - string - query - 模板编码 - 必填
   */
  getByCode (code: string): Promise<ResBodyBizFormTemplateVo>;

  /**
   * 根据模型编码查询模板列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
  findBySchemaCode (schemaCode: string): Promise<ResBodyListBizFormTemplateVo>;

  /**
   * 模板删除
   * @param id - string - query - id - 必填
   */
  delete (id: string): Promise<ResBodyVoid>;

  /**
   * 新建模板
   * @param bizFormTemplateVo - BizFormTemplateVo - body - bizFormTemplateVo - 必填
   */
  create (bizFormTemplateVo: BizFormTemplateVo): Promise<ResBodyVoid>;
}
