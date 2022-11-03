import { AxiosResponse } from 'axios';
import { WorkItemSubmitVo, ResBodyVoid, WorkItemAddParticipantVo, WorkItemAssistVo, WorkItemCirculateVo, InstanceCancelVo, WorkItemRejectVo, WorkItemRetrieveVo, WorkItemTransferVo } from '../model';
/**
 * work-item-runtime-open-api
 */
export declare class WorkItemRuntimeOpenApi {
    /**
     * 转办待办任务
     * @param workItemTransferVo - WorkItemTransferVo - body - workItemTransferVo - 必填
     */
    transfer(workItemTransferVo: WorkItemTransferVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 提交待办任务-发起节点使用
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    submit(workItemSubmitVo: WorkItemSubmitVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 取回
     * @param workItemRetrieveVo - WorkItemRetrieveVo - body - workItemRetrieveVo - 必填
     */
    retrieve(workItemRetrieveVo: WorkItemRetrieveVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 驳回待办任务
     * @param workItemRejectVo - WorkItemRejectVo - body - workItemRejectVo - 必填
     */
    reject(workItemRejectVo: WorkItemRejectVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 作废
     * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
     */
    invalid(instanceCancelVo: InstanceCancelVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 提交任务-不同意
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    disagree(workItemSubmitVo: WorkItemSubmitVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 结束流程
     * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
     */
    close(instanceCancelVo: InstanceCancelVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 传阅
     * @param workItemCirculateVo - WorkItemCirculateVo - body - workItemCirculateVo - 必填
     */
    circulate(workItemCirculateVo: WorkItemCirculateVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 提交协办任务
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    assistSubmit(workItemSubmitVo: WorkItemSubmitVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 协办任务
     * @param workItemAssistVo - WorkItemAssistVo - body - workItemAssistVo - 必填
     */
    assist(workItemAssistVo: WorkItemAssistVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 加签
     * @param workItemApposttileVo - WorkItemAddParticipantVo - body - workItemApposttileVo - 必填
     */
    apposttile(workItemApposttileVo: WorkItemAddParticipantVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 提交任务-同意
     * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
     */
    agree(workItemSubmitVo: WorkItemSubmitVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
