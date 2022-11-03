/* eslint-disable */
import {
  ResBodyVoid, ResBodyListUnitVo, ResBodyPageVOSysApiLogVo, StartWorkflowVo, ResBodystring, InstanceNodeActivatelVo, InstanceNodeAdjustParticipantVo, InstanceNodeCancelVo, ChangeOwnerVo, ResBodyInstanceTrackVo, InstanceUrgeVo,
} from '../api/model';

/**
 * instance-runtime-controller
 */
export interface InstanceRuntimeController {

  /**
   * 催办
   * @param instanceUrgeVo - InstanceUrgeVo - body - instanceUrgeVo - 必填
   */
  urge (instanceUrgeVo: InstanceUrgeVo): Promise<ResBodyVoid>;

  /**
   * 获取流程实例跟踪轨迹信息
   * @param instanceId - string - query - 流程实例id - 必填
   */
  tracks (instanceId: string): Promise<ResBodyInstanceTrackVo>;

  /**
   * 暂存流程
   * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - 必填
   */
  temporary (startWorkflowVo: StartWorkflowVo): Promise<ResBodystring>;

  /**
   * 管理员作废流程
   * @param instanceId - string - body - instanceId - 必填
   */
  superInvalid (instanceId: string): Promise<ResBodyVoid>;

  /**
   * 管理员删除流程
   * @param instanceId - string - body - instanceId - 必填
   */
  superDeleteInstance (instanceId: string): Promise<ResBodyVoid>;

  /**
   * 管理员结束流程
   * @param instanceId - string - body - instanceId - 必填
   */
  superClose (instanceId: string): Promise<ResBodyVoid>;

  /**
   * 管理员修改拥有者
   * @param changeOwnerVo - ChangeOwnerVo - body - changeOwnerVo - 必填
   */
  superChangeOwner (changeOwnerVo: ChangeOwnerVo): Promise<ResBodyVoid>;

  /**
   * 管理员取消节点
   * @param instanceNodeCancelVo - InstanceNodeCancelVo - body - instanceNodeCancelVo - 必填
   */
  superCancelNode (instanceNodeCancelVo: InstanceNodeCancelVo): Promise<ResBodyVoid>;

  /**
   * 管理员调整参与者
   * @param adjustParticipantVo - InstanceNodeAdjustParticipantVo - body - adjustParticipantVo - 必填
   */
  superAdjustNodeParticipant (adjustParticipantVo: InstanceNodeAdjustParticipantVo): Promise<ResBodyVoid>;

  /**
   * 管理员激活节点
   * @param instanceNodeActivatelVo - InstanceNodeActivatelVo - body - instanceNodeActivatelVo - 必填
   */
  superActivateNode (instanceNodeActivatelVo: InstanceNodeActivatelVo): Promise<ResBodyVoid>;

  /**
   * 发起流程
   * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - 必填
   */
  startWorkflow (startWorkflowVo: StartWorkflowVo): Promise<ResBodystring>;

  /**
   * 获取流程操作日志
   * @param instanceId - string - query - 流程实例id - 必填
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   */
  logs (instanceId: string, pageNum: number, pageSize: number): Promise<ResBodyPageVOSysApiLogVo>;

  /**
   * 获取当前用户流程发起部门列表
   * @param workflowCode - string - query - 流程编码 - 必填
   */
  getOriginatorDepartments (workflowCode: string): Promise<ResBodyListUnitVo>;

  /**
   * 删除暂存流程
   * @param instanceIds - Array<string> - body - instanceIds - 必填
   */
  delete_1 (instanceIds: Array<string>): Promise<ResBodyVoid>;

  /**
   * 视图删除流程
   * @param instanceIds - Array<string> - body - instanceIds - 必填
   */
  delete (instanceIds: Array<string>): Promise<ResBodyVoid>;
}
