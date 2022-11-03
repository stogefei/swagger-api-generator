import { BizFormVo, ResBodyBizFormVo, ResBodyListBizFormVo, FormCodesVo, ResBodyVoid } from '../api/model';
/**
 * form-design-controller
 */
export interface FormDesignController {
    /**
     * 删除表单
     * @param formCodesVo - FormCodesVo - body - formCodesVo - 必填
     */
    remove(formCodesVo: FormCodesVo): Promise<ResBodyVoid>;
    /**
     * 发布表单
     * @param bizFormVo - BizFormVo - body - bizFormVo - 必填
     */
    publish(bizFormVo: BizFormVo): Promise<ResBodyBizFormVo>;
    /**
     * 修改表单
     * @param bizFormVo - BizFormVo - body - bizFormVo - 必填
     */
    modify(bizFormVo: BizFormVo): Promise<ResBodyBizFormVo>;
    /**
     * 获取表单列表
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    list(schemaCode: string): Promise<ResBodyListBizFormVo>;
    /**
     * 获取表单详情
     * @param code - string - query - 表单编码 - 必填
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    getInfo(code: string, schemaCode: string): Promise<ResBodyBizFormVo>;
    /**
     * 获取表单
     * @param code - string - query - 表单编码 - 必填
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    get(code: string, schemaCode: string): Promise<ResBodyBizFormVo>;
    /**
     * 新建表单
     * @param bizFormVo - BizFormVo - body - bizFormVo - 必填
     */
    create(bizFormVo: BizFormVo): Promise<ResBodyBizFormVo>;
}
