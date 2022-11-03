/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyVoid, ResBodyWorkflowInstanceVo, ResBodyPageVOSysApiLogVo, OpenApiStartWorkflowVo, ResBodystring,
} from '../model';

/**
 * instance-runtime-open-api
 */
export class InstanceRuntimeOpenApi {
  
  /**
   * 发起流程
   * @param startWorkflowVo - OpenApiStartWorkflowVo - body - startWorkflowVo - 必填
   */
   async startWorkflow (startWorkflowVo: OpenApiStartWorkflowVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/openapi/runtime/instance/startWorkflow',
      method: 'post',
      data: startWorkflowVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取流程操作日志
   * @param instanceId - string - query - 流程实例id - 必填
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   */
   async logs (instanceId: string, pageNum: number, pageSize: number) {
    const result:AxiosResponse<ResBodyPageVOSysApiLogVo> = await API.Global.request({
      url: '/openapi/runtime/instance/logs',
      method: 'get',
      params: { instanceId, pageNum, pageSize },
    });
    return result;
  }
  
  
  
  /**
   * 查询流程实例信息
   * @param instanceId - string - query - 流程实例id - 必填
   */
   async getInfoByInstanceId (instanceId: string) {
    const result:AxiosResponse<ResBodyWorkflowInstanceVo> = await API.Global.request({
      url: '/openapi/runtime/instance/getInfoByInstanceId',
      method: 'get',
      params: { instanceId },
    });
    return result;
  }
  
  
  
  /**
   * 删除流程实例
   * @param instanceId - string - query - 流程实例id - 必填
   */
   async deleteWorkflowInstance (instanceId: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/openapi/runtime/instance/deleteWorkflowInstance',
      method: 'get',
      params: { instanceId },
    });
    return result;
  }
  
  
}
