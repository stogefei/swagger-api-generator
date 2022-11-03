import { AxiosResponse } from 'axios';
import { BizPropertyFormulaVo, ResBodyVoid, ResBodyListBizPropertyFormulaVo } from '../model';
/**
 * biz-property-formula-controller
 */
export declare class BizPropertyFormulaController {
    /**
     * 编辑计算规则
     * @param bizPropertyFormulaVo - BizPropertyFormulaVo - body - bizPropertyFormulaVo - 必填
     */
    update(bizPropertyFormulaVo: BizPropertyFormulaVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除计算规则
     * @param ids - Array<string> - body - ids - 必填
     */
    remove(ids: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取计算规则列表
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    list(schemaCode: string): Promise<AxiosResponse<ResBodyListBizPropertyFormulaVo, any>>;
    /**
     * 新建计算规则
     * @param bizPropertyFormulaVo - BizPropertyFormulaVo - body - bizPropertyFormulaVo - 必填
     */
    create(bizPropertyFormulaVo: BizPropertyFormulaVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
