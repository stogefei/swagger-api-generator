import { AxiosResponse } from 'axios';
import { SearchWorkflowInstanceVo, ResBodyPageVOWorkflowInstanceVo, SearchWorkItemVo, ResBodyPageVOWorkItemVo, ResBodyListFunTreeVo } from '../model';
/**
 * workflow-runtime-controller
 */
export declare class WorkflowRuntimeController {
    /**
     * 获取代办任务列表
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 查询我的流程实例
     * @param searchWorkflowInstanceVo - SearchWorkflowInstanceVo - body - searchWorkflowInstanceVo - 必填
     */
    searchMyInstances(searchWorkflowInstanceVo: SearchWorkflowInstanceVo): Promise<AxiosResponse<ResBodyPageVOWorkflowInstanceVo, any>>;
    /**
     * 获取已办任务列表
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchHistoricWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 获取已阅任务列表
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchHistoricCirculateWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 获取待阅任务列表
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchCirculateWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 获取可批量审批代办任务列表
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchBatchWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 获取我的所有代办任务列表（包含待阅）
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchAllWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 获取我的所有已办任务列表（包含已阅）
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchAllHistoricWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 查询可发起的流程
     */
    listWrokflow(): Promise<AxiosResponse<ResBodyListFunTreeVo, any>>;
    /**
     * 任务查询接口
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    listWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 查询流程实例
     * @param searchWorkflowInstanceVo - SearchWorkflowInstanceVo - body - searchWorkflowInstanceVo - 必填
     */
    listInstances(searchWorkflowInstanceVo: SearchWorkflowInstanceVo): Promise<AxiosResponse<ResBodyPageVOWorkflowInstanceVo, any>>;
}
