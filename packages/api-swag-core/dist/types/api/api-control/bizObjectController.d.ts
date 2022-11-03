import { AxiosResponse } from 'axios';
import { BatchListSheetDataVo, ResBodyMapstringListMapstringobject, BatchUpdateBizObjectVo, ResBodyListBizObjectBo, BizObjectIdsVo, ResBodyListMapstringobject, BizObjectSubmitVo, ResBodyMapstringobject, ResBodyListBizPropertyVo, ListTemplateDataQueryVo, ResBodyListTemplateDataVo, ResBodyVoid, UniqueValidateVo, ResBodyboolean } from '../model';
/**
 * biz-object-controller
 */
export declare class BizObjectController {
    /**
     * 修改数据
     * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
     */
    update(bizObjectSubmitVo: BizObjectSubmitVo): Promise<AxiosResponse<ResBodyMapstringobject, any>>;
    /**
     * 短文本唯一性校验
     * @param textUniqueValidateVo - UniqueValidateVo - body - textUniqueValidateVo - 必填
     */
    uniqueValidate(textUniqueValidateVo: UniqueValidateVo): Promise<AxiosResponse<ResBodyboolean, any>>;
    /**
     * 暂存数据
     * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
     */
    temporary(bizObjectSubmitVo: BizObjectSubmitVo): Promise<AxiosResponse<ResBodyMapstringobject, any>>;
    /**
     * 删除数据
     * @param bizObjectIdsVo - BizObjectIdsVo - body - bizObjectIdsVo - 必填
     */
    remove(bizObjectIdsVo: BizObjectIdsVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 批量查询打印数据
     * @param queryVo - ListTemplateDataQueryVo - body - queryVo - 必填
     */
    listTemplateData(queryVo: ListTemplateDataQueryVo): Promise<AxiosResponse<ResBodyListTemplateDataVo, any>>;
    /**
     * 查询子表数据
     * @param id - string - query - 业务对象id - 必填
     * @param schemaCode - string - query - 模型编码 - 必填
     * @param sheetCode - string - query - 子表编码 - 必填
     */
    listSheetDatas(id: string, schemaCode: string, sheetCode: string): Promise<AxiosResponse<ResBodyListMapstringobject, any>>;
    /**
     * 查询数据项列表信息
     * @param schemaCode - string - query - schemaCode - 必填
     */
    listProperty(schemaCode: string): Promise<AxiosResponse<ResBodyListBizPropertyVo, any>>;
    /**
     * 保存数据
     * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
     */
    insert(bizObjectSubmitVo: BizObjectSubmitVo): Promise<AxiosResponse<ResBodyMapstringobject, any>>;
    /**
     * 批量查询数据
     * @param bizObjectIdsVo - BizObjectIdsVo - body - bizObjectIdsVo - 必填
     */
    getList(bizObjectIdsVo: BizObjectIdsVo): Promise<AxiosResponse<ResBodyListMapstringobject, any>>;
    /**
     * 批量修改数据
     * @param batchUpdateBizObjectVo - BatchUpdateBizObjectVo - body - batchUpdateBizObjectVo - 必填
     */
    batchUpdate(batchUpdateBizObjectVo: BatchUpdateBizObjectVo): Promise<AxiosResponse<ResBodyListBizObjectBo, any>>;
    /**
     * 批量查询查询子表数据
     * @param batchListSheetDataVo - BatchListSheetDataVo - body - batchListSheetDataVo - 必填
     */
    batchListSheetDatas(batchListSheetDataVo: BatchListSheetDataVo): Promise<AxiosResponse<ResBodyMapstringListMapstringobject, any>>;
}
