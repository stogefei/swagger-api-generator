import { AxiosResponse } from 'axios';
import { BizSchemaGroupVo, ResBodyBizSchemaGroupVo, BizSchemaVo, ResBodyBizSchemaVo, ResBodyListBizSchemaVo, ResBodyListBizSchemaGroupVo, ResBodyListFunTreeVo, SchemaGroupSortVo, ResBodyVoid, SchemaTitleVo, SchemaSortVo } from '../model';
/**
 * biz-schema-controller
 */
export declare class BizSchemaController {
    /**
     * 测试
     * @param param - string - formData - 参数 - 可空
     */
    test(param?: string): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 模型排序
     * @param schemaSortVo - SchemaSortVo - body - schemaSortVo - 必填
     */
    sort(schemaSortVo: SchemaSortVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 保存模型标题
     * @param schemaTitleVo - SchemaTitleVo - body - schemaTitleVo - 必填
     */
    saveTitle(schemaTitleVo: SchemaTitleVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除模型
     * @param codes - Array<string> - body - codes - 必填
     */
    removeSchema(codes: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除模型分组
     * @param ids - Array<string> - body - ids - 必填
     */
    removeGroup(ids: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 发布模型
     * @param codes - Array<string> - body - codes - 必填
     */
    publish(codes: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 修改模型
     * @param bizSchemaVo - BizSchemaVo - body - bizSchemaVo - 必填
     */
    modifySchema(bizSchemaVo: BizSchemaVo): Promise<AxiosResponse<ResBodyBizSchemaVo, any>>;
    /**
     * 修改模型分组
     * @param bizSchemaGroupVo - BizSchemaGroupVo - body - bizSchemaGroupVo - 必填
     */
    modifyGroup(bizSchemaGroupVo: BizSchemaGroupVo): Promise<AxiosResponse<ResBodyBizSchemaGroupVo, any>>;
    /**
     * 模型分组排序
     * @param schemaGroupSortVo - SchemaGroupSortVo - body - schemaGroupSortVo - 必填
     */
    groupSort(schemaGroupSortVo: SchemaGroupSortVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取模型元数据
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    getSchemaMetadata(schemaCode: string): Promise<AxiosResponse<ResBodyBizSchemaVo, any>>;
    /**
     * 获取模型详情
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    getSchemaInfo(schemaCode: string): Promise<AxiosResponse<ResBodyBizSchemaVo, any>>;
    /**
     * 获取模型树
     * @param appCode - string - query - 应用编码 - 必填
     */
    getModelTree(appCode: string): Promise<AxiosResponse<ResBodyListFunTreeVo, any>>;
    /**
     * 获取模型列表
     * @param appCode - string - query - 应用编码 - 必填
     */
    getModelList(appCode: string): Promise<AxiosResponse<ResBodyListBizSchemaVo, any>>;
    /**
     * 获取模型分组列表
     * @param appCode - string - query - 应用编码 - 必填
     */
    getGroupTree(appCode: string): Promise<AxiosResponse<ResBodyListBizSchemaGroupVo, any>>;
    /**
     * 获取使用关联表单关联了指定模型的模型
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    getCorrlationFormSchema(schemaCode: string): Promise<AxiosResponse<ResBodyListBizSchemaVo, any>>;
    /**
     * 创建模型
     * @param bizSchemaVo - BizSchemaVo - body - bizSchemaVo - 必填
     */
    createSchema(bizSchemaVo: BizSchemaVo): Promise<AxiosResponse<ResBodyBizSchemaVo, any>>;
    /**
     * 创建模型分组
     * @param bizSchemaGroupVo - BizSchemaGroupVo - body - bizSchemaGroupVo - 必填
     */
    createGroup(bizSchemaGroupVo: BizSchemaGroupVo): Promise<AxiosResponse<ResBodyBizSchemaGroupVo, any>>;
}
