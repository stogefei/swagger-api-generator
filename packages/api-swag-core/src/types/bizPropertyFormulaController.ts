/* eslint-disable */
import {
  BizPropertyFormulaVo, ResBodyVoid, ResBodyListBizPropertyFormulaVo,
} from '../api/model';

/**
 * biz-property-formula-controller
 */
export interface BizPropertyFormulaController {

  /**
   * 编辑计算规则
   * @param bizPropertyFormulaVo - BizPropertyFormulaVo - body - bizPropertyFormulaVo - 必填
   */
  update (bizPropertyFormulaVo: BizPropertyFormulaVo): Promise<ResBodyVoid>;

  /**
   * 删除计算规则
   * @param ids - Array<string> - body - ids - 必填
   */
  remove (ids: Array<string>): Promise<ResBodyVoid>;

  /**
   * 获取计算规则列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
  list (schemaCode: string): Promise<ResBodyListBizPropertyFormulaVo>;

  /**
   * 新建计算规则
   * @param bizPropertyFormulaVo - BizPropertyFormulaVo - body - bizPropertyFormulaVo - 必填
   */
  create (bizPropertyFormulaVo: BizPropertyFormulaVo): Promise<ResBodyVoid>;
}
