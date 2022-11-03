import { AxiosResponse } from 'axios';
import { ResBodyListInstanceActivityVo, ResBodyListWorkItemVo, SearchWorkflowInstanceVo, ResBodyPageVOWorkflowInstanceVo, ResBodyListFunTreeVo, PredictParticipantVo, ResBodyListWorkflowNodeParticipantVo, SearchWorkItemVo, ResBodyPageVOWorkItemVo } from '../model';
/**
 * workflow-runtime-open-api
 */
export declare class WorkflowRuntimeOpenApi {
    /**
     * 查询指定用户代办任务
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchUserWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 查询指定用户已办任务列表
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchUserFinishedWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 预测节点审批人
     * @param predictParticipantVo - PredictParticipantVo - body - predictParticipantVo - 必填
     */
    predictParticipant(predictParticipantVo: PredictParticipantVo): Promise<AxiosResponse<ResBodyListWorkflowNodeParticipantVo, any>>;
    /**
     * 查询指定用户可发起的流程
     * @param type - number - query - 类型：0：全部，1：PC可发起，2：移动可发起 - 必填
     */
    listWrokflow(type: number): Promise<AxiosResponse<ResBodyListFunTreeVo, any>>;
    /**
     * 查询流程实例
     * @param searchWorkflowInstanceVo - SearchWorkflowInstanceVo - body - searchWorkflowInstanceVo - 必填
     */
    listInstances(searchWorkflowInstanceVo: SearchWorkflowInstanceVo): Promise<AxiosResponse<ResBodyPageVOWorkflowInstanceVo, any>>;
    /**
     * 根据流程实例id获取流程当前待办任务列表
     * @param instanceId - string - query - 流程实例id - 必填
     */
    getWorkItemsByInstanceId(instanceId: string): Promise<AxiosResponse<ResBodyListWorkItemVo, any>>;
    /**
     * 根据流程实例id获取审批记录列表
     * @param instanceId - string - query - 流程实例id - 必填
     */
    getWorkItemApprovalsByInstanceId(instanceId: string): Promise<AxiosResponse<ResBodyListInstanceActivityVo, any>>;
}
