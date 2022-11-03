/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    SearchWorkflowInstanceVo, ResBodyPageVOWorkflowInstanceVo, SearchWorkItemVo, ResBodyPageVOWorkItemVo, ResBodyListFunTreeVo,
} from '../model';

/**
 * workflow-runtime-controller
 */
export class WorkflowRuntimeController {
  
  /**
   * 获取代办任务列表
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询我的流程实例
   * @param searchWorkflowInstanceVo - SearchWorkflowInstanceVo - body - searchWorkflowInstanceVo - 必填
   */
   async searchMyInstances (searchWorkflowInstanceVo: SearchWorkflowInstanceVo) {
    const result:AxiosResponse<ResBodyPageVOWorkflowInstanceVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchMyInstances',
      method: 'post',
      data: searchWorkflowInstanceVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取已办任务列表
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchHistoricWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchHistoricWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取已阅任务列表
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchHistoricCirculateWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchHistoricCirculateWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取待阅任务列表
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchCirculateWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchCirculateWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取可批量审批代办任务列表
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchBatchWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchBatchWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取我的所有代办任务列表（包含待阅）
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchAllWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchAllWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取我的所有已办任务列表（包含已阅）
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async searchAllHistoricWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/searchAllHistoricWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询可发起的流程
   */
   async listWrokflow () {
    const result:AxiosResponse<ResBodyListFunTreeVo> = await API.Global.request({
      url: '/portal/runtime/workflow/listWrokflow',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 任务查询接口
   * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
   */
   async listWorkItems (searchWorkItemVo: SearchWorkItemVo) {
    const result:AxiosResponse<ResBodyPageVOWorkItemVo> = await API.Global.request({
      url: '/portal/runtime/workflow/listWorkItems',
      method: 'post',
      data: searchWorkItemVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询流程实例
   * @param searchWorkflowInstanceVo - SearchWorkflowInstanceVo - body - searchWorkflowInstanceVo - 必填
   */
   async listInstances (searchWorkflowInstanceVo: SearchWorkflowInstanceVo) {
    const result:AxiosResponse<ResBodyPageVOWorkflowInstanceVo> = await API.Global.request({
      url: '/portal/runtime/workflow/listInstances',
      method: 'post',
      data: searchWorkflowInstanceVo,
    });
    return result;
  }
  
  
}
