/* eslint-disable */
import {
  ResBodyListBizFormTemplateVo, ResBodyBizFormTemplateVo,
} from '../api/model';

/**
 * portal-form-template-controller
 */
export interface PortalFormTemplateController {

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
}
