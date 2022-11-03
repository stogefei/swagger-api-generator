import { AxiosResponse } from 'axios';
import { BizFormTemplateVo, ResBodyVoid, ResBodyListBizFormTemplateVo, ResBodyBizFormTemplateVo } from '../model';
/**
 * form-template-controller
 */
export declare class FormTemplateController {
    /**
     * 修改模板
     * @param bizFormTemplateVo - BizFormTemplateVo - body - bizFormTemplateVo - 必填
     */
    update(bizFormTemplateVo: BizFormTemplateVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取模板详情
     * @param code - string - query - 模板编码 - 必填
     */
    getByCode(code: string): Promise<AxiosResponse<ResBodyBizFormTemplateVo, any>>;
    /**
     * 根据模型编码查询模板列表
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    findBySchemaCode(schemaCode: string): Promise<AxiosResponse<ResBodyListBizFormTemplateVo, any>>;
    /**
     * 模板删除
     * @param id - string - query - id - 必填
     */
    delete(id: string): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 新建模板
     * @param bizFormTemplateVo - BizFormTemplateVo - body - bizFormTemplateVo - 必填
     */
    create(bizFormTemplateVo: BizFormTemplateVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
