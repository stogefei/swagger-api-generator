import { BizSchemaEventVo, ResBodystring, ResBodyVoid, ResBodyBizSchemaEventVo, ResBodyListBizSchemaEventVo } from '../api/model';
/**
 * biz-schema-event-controller
 */
export interface BizSchemaEventController {
    /**
     * 修改事件
     * @param bizSchemaEventVo - BizSchemaEventVo - body - bizSchemaEventVo - 必填
     */
    update(bizSchemaEventVo: BizSchemaEventVo): Promise<ResBodyVoid>;
    /**
     * 根据模型编码获取事件列表
     * @param schemaCode - string - query - schemaCode - 必填
     */
    queryBySchemaCode(schemaCode: string): Promise<ResBodyListBizSchemaEventVo>;
    /**
     * 查询所有事件列表
     */
    list(): Promise<ResBodyListBizSchemaEventVo>;
    /**
     * 获取事件详情
     * @param id - string - query - id - 必填
     */
    get(id: string): Promise<ResBodyBizSchemaEventVo>;
    /**
     * 删除事件
     * @param id - string - query - id - 必填
     */
    delete(id: string): Promise<ResBodyVoid>;
    /**
     * 新增事件
     * @param bizSchemaEventVo - BizSchemaEventVo - body - bizSchemaEventVo - 必填
     */
    create(bizSchemaEventVo: BizSchemaEventVo): Promise<ResBodystring>;
}
