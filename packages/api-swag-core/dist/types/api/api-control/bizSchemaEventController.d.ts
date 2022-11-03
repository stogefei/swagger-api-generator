import { AxiosResponse } from 'axios';
import { BizSchemaEventVo, ResBodystring, ResBodyVoid, ResBodyBizSchemaEventVo, ResBodyListBizSchemaEventVo } from '../model';
/**
 * biz-schema-event-controller
 */
export declare class BizSchemaEventController {
    /**
     * 修改事件
     * @param bizSchemaEventVo - BizSchemaEventVo - body - bizSchemaEventVo - 必填
     */
    update(bizSchemaEventVo: BizSchemaEventVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 根据模型编码获取事件列表
     * @param schemaCode - string - query - schemaCode - 必填
     */
    queryBySchemaCode(schemaCode: string): Promise<AxiosResponse<ResBodyListBizSchemaEventVo, any>>;
    /**
     * 查询所有事件列表
     */
    list(): Promise<AxiosResponse<ResBodyListBizSchemaEventVo, any>>;
    /**
     * 获取事件详情
     * @param id - string - query - id - 必填
     */
    get(id: string): Promise<AxiosResponse<ResBodyBizSchemaEventVo, any>>;
    /**
     * 删除事件
     * @param id - string - query - id - 必填
     */
    delete(id: string): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 新增事件
     * @param bizSchemaEventVo - BizSchemaEventVo - body - bizSchemaEventVo - 必填
     */
    create(bizSchemaEventVo: BizSchemaEventVo): Promise<AxiosResponse<ResBodystring, any>>;
}
