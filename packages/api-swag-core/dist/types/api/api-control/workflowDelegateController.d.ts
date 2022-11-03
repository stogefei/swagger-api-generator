import { AxiosResponse } from 'axios';
import { WorkflowDelegateVo, ResBodyVoid, ResBodyListWorkflowDelegateVo } from '../model';
/**
 * workflow-delegate-controller
 */
export declare class WorkflowDelegateController {
    /**
     * 修改委托
     * @param updateDelegateVo - WorkflowDelegateVo - body - updateDelegateVo - 必填
     */
    update(updateDelegateVo: WorkflowDelegateVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取当前用户委托列表
     */
    list(): Promise<AxiosResponse<ResBodyListWorkflowDelegateVo, any>>;
    /**
     * 删除委托
     * @param ids - Array<string> - body - ids - 必填
     */
    delete(ids: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 新建委托
     * @param createDelegateVo - WorkflowDelegateVo - body - createDelegateVo - 必填
     */
    create(createDelegateVo: WorkflowDelegateVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
