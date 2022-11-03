/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyListInstanceActivityVo, ResBodyListWorkItemVo, SearchWorkflowInstanceVo, ResBodyPageVOWorkflowInstanceVo, ResBodyListFunTreeVo, PredictParticipantVo, ResBodyListWorkflowNodeParticipantVo, SearchWorkItemVo, ResBodyPageVOWorkItemVo,
} from '../model';

/**
 * workflow-runtime-open-api
 */
export class WorkflowRuntimeOpenApi {
  
  /**
   * 查询指定用户代办任务
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchUserWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/openapi/runtime/workflow/searchUserWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询指定用户已办任务列表
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchUserFinishedWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/openapi/runtime/workflow/searchUserFinishedWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 预测节点审批人
   * @param predictParticipantVo - PredictParticipantVo - body - predictParticipantVo - 必填
   */
   async predictParticipant (predictParticipantVo: PredictParticipantVo) {
    const result:AxiosResponse<ResBodyListWorkflowNodeParticipantVo> = await API.Global.request({
      url: '/openapi/runtime/workflow/predictParticipant',
      method: 'post',
      data: predictParticipantVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询指定用户可发起的流程
   * @param type - number - query - 类型：0：全部，1：PC可发起，2：移动可发起 - 必填
   */
   async listWrokflow (type: number) {
    const result:AxiosResponse<ResBodyListFunTreeVo> = await API.Global.request({
      url: '/openapi/runtime/workflow/listWrokflow',
      method: 'get',
      params: { type },
    });
    return result;
  }
  
  
  
  /**
   * 查询流程实例
   * @param searchWorkflowInstanceVo - SearchWorkflowInstanceVo - body - searchWorkflowInstanceVo - 必填
   */
   async listInstances (searchWorkflowInstanceVo: SearchWorkflowInstanceVo) {
    const result:AxiosResponse<ResBodyPageVOWorkflowInstanceVo> = await API.Global.request({
      url: '/openapi/runtime/workflow/listInstances',
      method: 'post',
      data: searchWorkflowInstanceVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据流程实例id获取流程当前待办任务列表
   * @param instanceId - string - query - 流程实例id - 必填
   */
   async getWorkItemsByInstanceId (instanceId: string) {
    const result:AxiosResponse<ResBodyListWorkItemVo> = await API.Global.request({
      url: '/openapi/runtime/workflow/getWorkItemsByInstanceId',
      method: 'get',
      params: { instanceId },
    });
    return result;
  }
  
  
  
  /**
   * 根据流程实例id获取审批记录列表
   * @param instanceId - string - query - 流程实例id - 必填
   */
   async getWorkItemApprovalsByInstanceId (instanceId: string) {
    const result:AxiosResponse<ResBodyListInstanceActivityVo> = await API.Global.request({
      url: '/openapi/runtime/workflow/getWorkItemApprovalsByInstanceId',
      method: 'get',
      params: { instanceId },
    });
    return result;
  }
  
  
}
