import { WorkflowDelegateVo, ResBodyVoid, ResBodyListWorkflowDelegateVo } from '../api/model';
/**
 * workflow-delegate-controller
 */
export interface WorkflowDelegateController {
    /**
     * 修改委托
     * @param updateDelegateVo - WorkflowDelegateVo - body - updateDelegateVo - 必填
     */
    update(updateDelegateVo: WorkflowDelegateVo): Promise<ResBodyVoid>;
    /**
     * 获取当前用户委托列表
     */
    list(): Promise<ResBodyListWorkflowDelegateVo>;
    /**
     * 删除委托
     * @param ids - Array<string> - body - ids - 必填
     */
    delete(ids: Array<string>): Promise<ResBodyVoid>;
    /**
     * 新建委托
     * @param createDelegateVo - WorkflowDelegateVo - body - createDelegateVo - 必填
     */
    create(createDelegateVo: WorkflowDelegateVo): Promise<ResBodyVoid>;
}
