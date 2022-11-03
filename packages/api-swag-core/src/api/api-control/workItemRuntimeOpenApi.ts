/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    WorkItemSubmitVo, ResBodyVoid, WorkItemAddParticipantVo, WorkItemAssistVo, WorkItemCirculateVo, InstanceCancelVo, WorkItemRejectVo, WorkItemRetrieveVo, WorkItemTransferVo,
} from '../model';

/**
 * work-item-runtime-open-api
 */
export class WorkItemRuntimeOpenApi {
  
  /**
   * 转办待办任务
   * @param workItemTransferVo - WorkItemTransferVo - body - workItemTransferVo - 必填
   */
   async transfer (workItemTransferVo: WorkItemTransferVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/openapi/runtime/workitem/transfer',
      method: 'post',
      data: workItemTransferVo,
    });
    return result;
  }
  
  
  
  /**
   * 提交待办任务-发起节点使用
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
   async submit (workItemSubmitVo: WorkItemSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/openapi/runtime/workitem/submit',
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
      url: '/openapi/runtime/workitem/retrieve',
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
      url: '/openapi/runtime/workitem/reject',
      method: 'post',
      data: workItemRejectVo,
    });
    return result;
  }
  
  
  
  /**
   * 作废
   * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
   */
   async invalid (instanceCancelVo: InstanceCancelVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/openapi/runtime/workitem/invalid',
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
      url: '/openapi/runtime/workitem/disagree',
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
      url: '/openapi/runtime/workitem/close',
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
      url: '/openapi/runtime/workitem/circulate',
      method: 'post',
      data: workItemCirculateVo,
    });
    return result;
  }
  
  
  
  /**
   * 提交协办任务
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
   async assistSubmit (workItemSubmitVo: WorkItemSubmitVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/openapi/runtime/workitem/assistSubmit',
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
      url: '/openapi/runtime/workitem/assist',
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
      url: '/openapi/runtime/workitem/apposttile',
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
      url: '/openapi/runtime/workitem/agree',
      method: 'post',
      data: workItemSubmitVo,
    });
    return result;
  }
  
  
}
