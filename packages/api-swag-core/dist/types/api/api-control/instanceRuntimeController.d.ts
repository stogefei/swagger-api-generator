import { AxiosResponse } from 'axios';
import { ResBodyVoid, ResBodyListUnitVo, ResBodyPageVOSysApiLogVo, StartWorkflowVo, ResBodystring, InstanceNodeActivatelVo, InstanceNodeAdjustParticipantVo, InstanceNodeCancelVo, ChangeOwnerVo, ResBodyInstanceTrackVo, InstanceUrgeVo } from '../model';
/**
 * instance-runtime-controller
 */
export declare class InstanceRuntimeController {
    /**
     * 催办
     * @param instanceUrgeVo - InstanceUrgeVo - body - instanceUrgeVo - 必填
     */
    urge(instanceUrgeVo: InstanceUrgeVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取流程实例跟踪轨迹信息
     * @param instanceId - string - query - 流程实例id - 必填
     */
    tracks(instanceId: string): Promise<AxiosResponse<ResBodyInstanceTrackVo, any>>;
    /**
     * 暂存流程
     * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - 必填
     */
    temporary(startWorkflowVo: StartWorkflowVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 管理员作废流程
     * @param instanceId - string - body - instanceId - 必填
     */
    superInvalid(instanceId: string): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 管理员删除流程
     * @param instanceId - string - body - instanceId - 必填
     */
    superDeleteInstance(instanceId: string): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 管理员结束流程
     * @param instanceId - string - body - instanceId - 必填
     */
    superClose(instanceId: string): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 管理员修改拥有者
     * @param changeOwnerVo - ChangeOwnerVo - body - changeOwnerVo - 必填
     */
    superChangeOwner(changeOwnerVo: ChangeOwnerVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 管理员取消节点
     * @param instanceNodeCancelVo - InstanceNodeCancelVo - body - instanceNodeCancelVo - 必填
     */
    superCancelNode(instanceNodeCancelVo: InstanceNodeCancelVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 管理员调整参与者
     * @param adjustParticipantVo - InstanceNodeAdjustParticipantVo - body - adjustParticipantVo - 必填
     */
    superAdjustNodeParticipant(adjustParticipantVo: InstanceNodeAdjustParticipantVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 管理员激活节点
     * @param instanceNodeActivatelVo - InstanceNodeActivatelVo - body - instanceNodeActivatelVo - 必填
     */
    superActivateNode(instanceNodeActivatelVo: InstanceNodeActivatelVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 发起流程
     * @param startWorkflowVo - StartWorkflowVo - body - startWorkflowVo - 必填
     */
    startWorkflow(startWorkflowVo: StartWorkflowVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 获取流程操作日志
     * @param instanceId - string - query - 流程实例id - 必填
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     */
    logs(instanceId: string, pageNum: number, pageSize: number): Promise<AxiosResponse<ResBodyPageVOSysApiLogVo, any>>;
    /**
     * 获取当前用户流程发起部门列表
     * @param workflowCode - string - query - 流程编码 - 必填
     */
    getOriginatorDepartments(workflowCode: string): Promise<AxiosResponse<ResBodyListUnitVo, any>>;
    /**
     * 删除暂存流程
     * @param instanceIds - Array<string> - body - instanceIds - 必填
     */
    delete_1(instanceIds: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 视图删除流程
     * @param instanceIds - Array<string> - body - instanceIds - 必填
     */
    delete(instanceIds: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
}
