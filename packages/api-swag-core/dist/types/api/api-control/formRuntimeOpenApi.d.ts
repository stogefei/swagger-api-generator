import { AxiosResponse } from 'axios';
import { CalculateVo, ResBodyListCalculateResultVo, BizObjectSubmitVo, ResBodyMapstringobject, BizViewDataQueryVo, ResBodyPageVOMapstringobject, LoadFormDataParamVo, ResBodyFormDataVo, LoadWorkflowFormDataParamVo, ResBodyWorkflowFormDataVo, BizObjectIdsVo, ResBodyVoid } from '../model';
/**
 * form-runtime-open-api
 */
export declare class FormRuntimeOpenApi {
    /**
     * 修改数据
     * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
     */
    update(bizObjectSubmitVo: BizObjectSubmitVo): Promise<AxiosResponse<ResBodyMapstringobject, any>>;
    /**
     * 删除数据
     * @param bizObjectIdsVo - BizObjectIdsVo - body - bizObjectIdsVo - 必填
     */
    remove(bizObjectIdsVo: BizObjectIdsVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 加载流程表单数据
     * @param loadWorkflowFormDataParamVo - LoadWorkflowFormDataParamVo - body - loadWorkflowFormDataParamVo - 必填
     */
    loadWorkflowData(loadWorkflowFormDataParamVo: LoadWorkflowFormDataParamVo): Promise<AxiosResponse<ResBodyWorkflowFormDataVo, any>>;
    /**
     * 加载业务表单数据
     * @param loadFormDataParamVo - LoadFormDataParamVo - body - loadFormDataParamVo - 必填
     */
    loadBizData(loadFormDataParamVo: LoadFormDataParamVo): Promise<AxiosResponse<ResBodyFormDataVo, any>>;
    /**
     * 查询数据
     * @param bizViewDataQueryVo - BizViewDataQueryVo - body - bizViewDataQueryVo - 必填
     */
    listData(bizViewDataQueryVo: BizViewDataQueryVo): Promise<AxiosResponse<ResBodyPageVOMapstringobject, any>>;
    /**
     * 保存数据
     * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
     */
    insert(bizObjectSubmitVo: BizObjectSubmitVo): Promise<AxiosResponse<ResBodyMapstringobject, any>>;
    /**
     * 公式计算
     * @param calculateList - Array<CalculateVo> - body - calculateList - 必填
     */
    calculate(calculateList: Array<CalculateVo>): Promise<AxiosResponse<ResBodyListCalculateResultVo, any>>;
}
