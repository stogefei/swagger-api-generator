/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyVoid, ResBodyListUnitVo, ResBodyPageVOSysApiLogVo, StartWorkflowVo, ResBodystring, InstanceNodeActivatelVo, InstanceNodeAdjustParticipantVo, InstanceNodeCancelVo, ChangeOwnerVo, ResBodyInstanceTrackVo, InstanceUrgeVo,
} from '../model';

/**
 * instance-runtime-controller
 */
export class InstanceRuntimeController {
  
  /**
   * 催办
   * @param instanceUrgeVo - InstanceUrgeVo - body - instanceUrgeVo - 必填
   */
   async urge (instanceUrgeVo: InstanceUrgeVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/urge',
      method: 'post',
      data: instanceUrgeVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取流程实例跟踪轨迹信息
   * @param instanceId - string - query - 流程实例id - 必填
   */
   async tracks (instanceId: string) {
    const result:AxiosResponse<ResBodyInstanceTrackVo> = await API.Global.request({
      url: '/portal/runtime/instance/tracks',
      method: 'get',
      params: { instanceId },
    });
    return result;
  }
  
  
  
  /**
   * 暂存流程
   * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - 必填
   */
   async temporary (startWorkflowVo: StartWorkflowVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/portal/runtime/instance/temporary',
      method: 'post',
      data: startWorkflowVo,
    });
    return result;
  }
  
  
  
  /**
   * 管理员作废流程
   * @param instanceId - string - body - instanceId - 必填
   */
   async superInvalid (instanceId: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/superInvalid',
      method: 'post',
      data: instanceId,
    });
    return result;
  }
  
  
  
  /**
   * 管理员删除流程
   * @param instanceId - string - body - instanceId - 必填
   */
   async superDeleteInstance (instanceId: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/superDeleteInstance',
      method: 'post',
      data: instanceId,
    });
    return result;
  }
  
  
  
  /**
   * 管理员结束流程
   * @param instanceId - string - body - instanceId - 必填
   */
   async superClose (instanceId: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/superClose',
      method: 'post',
      data: instanceId,
    });
    return result;
  }
  
  
  
  /**
   * 管理员修改拥有者
   * @param changeOwnerVo - ChangeOwnerVo - body - changeOwnerVo - 必填
   */
   async superChangeOwner (changeOwnerVo: ChangeOwnerVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/superChangeOwner',
      method: 'post',
      data: changeOwnerVo,
    });
    return result;
  }
  
  
  
  /**
   * 管理员取消节点
   * @param instanceNodeCancelVo - InstanceNodeCancelVo - body - instanceNodeCancelVo - 必填
   */
   async superCancelNode (instanceNodeCancelVo: InstanceNodeCancelVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/superCancelNode',
      method: 'post',
      data: instanceNodeCancelVo,
    });
    return result;
  }
  
  
  
  /**
   * 管理员调整参与者
   * @param adjustParticipantVo - InstanceNodeAdjustParticipantVo - body - adjustParticipantVo - 必填
   */
   async superAdjustNodeParticipant (adjustParticipantVo: InstanceNodeAdjustParticipantVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/superAdjustNodeParticipant',
      method: 'post',
      data: adjustParticipantVo,
    });
    return result;
  }
  
  
  
  /**
   * 管理员激活节点
   * @param instanceNodeActivatelVo - InstanceNodeActivatelVo - body - instanceNodeActivatelVo - 必填
   */
   async superActivateNode (instanceNodeActivatelVo: InstanceNodeActivatelVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/superActivateNode',
      method: 'post',
      data: instanceNodeActivatelVo,
    });
    return result;
  }
  
  
  
  /**
   * 发起流程
   * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - 必填
   */
   async startWorkflow (startWorkflowVo: StartWorkflowVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/portal/runtime/instance/startWorkflow',
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
      url: '/portal/runtime/instance/logs',
      method: 'get',
      params: { instanceId, pageNum, pageSize },
    });
    return result;
  }
  
  
  
  /**
   * 获取当前用户流程发起部门列表
   * @param workflowCode - string - query - 流程编码 - 必填
   */
   async getOriginatorDepartments (workflowCode: string) {
    const result:AxiosResponse<ResBodyListUnitVo> = await API.Global.request({
      url: '/portal/runtime/instance/getOriginatorDepartments',
      method: 'get',
      params: { workflowCode },
    });
    return result;
  }
  
  
  
  /**
   * 删除暂存流程
   * @param instanceIds - Array<string> - body - instanceIds - 必填
   */
   async delete_1 (instanceIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/temporary/delete',
      method: 'post',
      data: instanceIds,
    });
    return result;
  }
  
  
  
  /**
   * 视图删除流程
   * @param instanceIds - Array<string> - body - instanceIds - 必填
   */
   async delete (instanceIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/runtime/instance/delete',
      method: 'post',
      data: instanceIds,
    });
    return result;
  }
  
  
}
