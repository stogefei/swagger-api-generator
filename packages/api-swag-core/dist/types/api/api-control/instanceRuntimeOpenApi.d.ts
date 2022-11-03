import { AxiosResponse } from 'axios';
import { ResBodyVoid, ResBodyWorkflowInstanceVo, ResBodyPageVOSysApiLogVo, OpenApiStartWorkflowVo, ResBodystring } from '../model';
/**
 * instance-runtime-open-api
 */
export declare class InstanceRuntimeOpenApi {
    /**
     * 发起流程
     * @param startWorkflowVo - OpenApiStartWorkflowVo - body - startWorkflowVo - 必填
     */
    startWorkflow(startWorkflowVo: OpenApiStartWorkflowVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 获取流程操作日志
     * @param instanceId - string - query - 流程实例id - 必填
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     */
    logs(instanceId: string, pageNum: number, pageSize: number): Promise<AxiosResponse<ResBodyPageVOSysApiLogVo, any>>;
    /**
     * 查询流程实例信息
     * @param instanceId - string - query - 流程实例id - 必填
     */
    getInfoByInstanceId(instanceId: string): Promise<AxiosResponse<ResBodyWorkflowInstanceVo, any>>;
    /**
     * 删除流程实例
     * @param instanceId - string - query - 流程实例id - 必填
     */
    deleteWorkflowInstance(instanceId: string): Promise<AxiosResponse<ResBodyVoid, any>>;
}
