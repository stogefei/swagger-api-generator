import { AxiosResponse } from 'axios';
import { IdNameVo, ResBodyBizRuleVo, BizRuleVo, ResBodystring, IDVo, ResBodyVoid, ResBodyListBizRuleVo, ResBodyBizRulePropertyVo, ResBodyListBizRulePropertyVo, BizRuleRenameVo } from '../model';
/**
 * biz-rule-controller
 */
export declare class BizRuleController {
    /**
     * 修改规则
     * @param bizRuleVo - BizRuleVo - body - bizRuleVo - 必填
     */
    update(bizRuleVo: BizRuleVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 规则重命名
     * @param renameVo - BizRuleRenameVo - body - renameVo - 必填
     */
    rename(renameVo: BizRuleRenameVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 根据模型编码获取规则列表
     * @param schemaCode - string - query - schemaCode - 必填
     */
    queryBySchemaCode(schemaCode: string): Promise<AxiosResponse<ResBodyListBizRuleVo, any>>;
    /**
     * 批量获取规则属性
     * @param ids - Array<string> - body - ids - 必填
     */
    list_1(ids: Array<string>): Promise<AxiosResponse<ResBodyListBizRulePropertyVo, any>>;
    /**
     * 查询所有规则列表
     */
    list(): Promise<AxiosResponse<ResBodyListBizRuleVo, any>>;
    /**
     * 获取规则属性
     * @param id - string - query - id - 必填
     */
    get_1(id: string): Promise<AxiosResponse<ResBodyBizRulePropertyVo, any>>;
    /**
     * 获取规则详情
     * @param id - string - query - id - 必填
     */
    get(id: string): Promise<AxiosResponse<ResBodyBizRuleVo, any>>;
    /**
     * 删除规则
     * @param idVo - IDVo - body - idVo - 必填
     */
    delete(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 新增规则
     * @param bizRuleVo - BizRuleVo - body - bizRuleVo - 必填
     */
    create(bizRuleVo: BizRuleVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 克隆业务规则
     * @param idNameVo - IdNameVo - body - idNameVo - 必填
     */
    clone(idNameVo: IdNameVo): Promise<AxiosResponse<ResBodyBizRuleVo, any>>;
}
