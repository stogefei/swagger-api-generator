/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    WorkItemSubmitVo, ResBodyVoid, WorkItemAddParticipantVo, WorkItemAssistVo, WorkItemBatchSubmitVo, WorkItemCirculateVo, InstanceCancelVo, RuntimePredictParticipantVo, ResBodyWorkflowNodeParticipantVo, WorkItemRejectVo, WorkItemRetrieveVo, WorkItemTransferVo,
} from '../model';

/**
 * work-item-runtime-controller
 */
export class WorkItemRuntimeController {
  
  /**
   * 转办待办任务
   * @param workItemTransferVo - WorkItemTransferVo - body - workItemTransferVo - 必填
   */
   async transfer (workItemTransferVo: WorkItemTransferVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/transfer',
      method: 'post',
      data: workItemTransferVo,
    });
    return result;
  }
  
  
  
  /**
   * 暂存待办任务
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
   async temporary (workItemSubmitVo: WorkItemSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/temporary',
      method: 'post',
      data: workItemSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 提交待办任务-发起节点使用
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
   async submit (workItemSubmitVo: WorkItemSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/submit',
      method: 'post',
      data: workItemSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 取回
   * @param workItemRetrieveVo - WorkItemRetrieveVo - body - workItemRetrieveVo - 必填
   */
   async retrieve (workItemRetrieveVo: WorkItemRetrieveVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/retrieve',
      method: 'post',
      data: workItemRetrieveVo,
    });
    return result;
  }
  
  
  
  /**
   * 驳回待办任务
   * @param workItemRejectVo - WorkItemRejectVo - body - workItemRejectVo - 必填
   */
   async reject (workItemRejectVo: WorkItemRejectVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/reject',
      method: 'post',
      data: workItemRejectVo,
    });
    return result;
  }
  
  
  
  /**
   * 预测节点审批人
   * @param runtimePredictParticipantVo - RuntimePredictParticipantVo - body - runtimePredictParticipantVo - 必填
   */
   async predictParticipant (runtimePredictParticipantVo: RuntimePredictParticipantVo) {
    const result:AxiosResponse<ResBodyWorkflowNodeParticipantVo> = await API.Global.request({
      url: '/portal/runtime/workitem/predictParticipant',
      method: 'post',
      data: runtimePredictParticipantVo,
    });
    return result;
  }
  
  
  
  /**
   * 作废
   * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
   */
   async invalid (instanceCancelVo: InstanceCancelVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/invalid',
      method: 'post',
      data: instanceCancelVo,
    });
    return result;
  }
  
  
  
  /**
   * 提交任务-不同意
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
   async disagree (workItemSubmitVo: WorkItemSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/disagree',
      method: 'post',
      data: workItemSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 结束流程
   * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
   */
   async close (instanceCancelVo: InstanceCancelVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/close',
      method: 'post',
      data: instanceCancelVo,
    });
    return result;
  }
  
  
  
  /**
   * 传阅
   * @param workItemCirculateVo - WorkItemCirculateVo - body - workItemCirculateVo - 必填
   */
   async circulate (workItemCirculateVo: WorkItemCirculateVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/circulate',
      method: 'post',
      data: workItemCirculateVo,
    });
    return result;
  }
  
  
  
  /**
   * 提交任务-批量同意
   * @param batchSubmitVo - WorkItemBatchSubmitVo - body - batchSubmitVo - 必填
   */
   async batchAgree (batchSubmitVo: WorkItemBatchSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/batchAgree',
      method: 'post',
      data: batchSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 提交协办任务
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
   async assistSubmit (workItemSubmitVo: WorkItemSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/assistSubmit',
      method: 'post',
      data: workItemSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 协办任务
   * @param workItemAssistVo - WorkItemAssistVo - body - workItemAssistVo - 必填
   */
   async assist (workItemAssistVo: WorkItemAssistVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/assist',
      method: 'post',
      data: workItemAssistVo,
    });
    return result;
  }
  
  
  
  /**
   * 加签
   * @param workItemApposttileVo - WorkItemAddParticipantVo - body - workItemApposttileVo - 必填
   */
   async apposttile (workItemApposttileVo: WorkItemAddParticipantVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/apposttile',
      method: 'post',
      data: workItemApposttileVo,
    });
    return result;
  }
  
  
  
  /**
   * 提交任务-同意
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
   async agree (workItemSubmitVo: WorkItemSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/workitem/agree',
      method: 'post',
      data: workItemSubmitVo,
    });
    return result;
  }
  
  
}
