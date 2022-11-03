import { AxiosResponse } from 'axios';
import { CodeNameVo, ResBodyWorkflowDraftVo, SaveWorkflowTemplateVo, ResBodyWorkflowHeaderVo, WorkflowSchemaCodeVo, ResBodyListWorkflowDeploymentVo, ResBodyListWorkflowHeaderVo, ResBodyobject, ResBodyVoid, WorkflowHeaderVo, WorkflowExprValidVo, ResBodyListValidateErrorMessageVo } from '../model';
/**
 * workflow-design-controller
 */
export declare class WorkflowDesignController {
    /**
     * 校验流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    validateWorkflowTemplate(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<AxiosResponse<ResBodyListValidateErrorMessageVo, any>>;
    /**
     * 校验参与者函数表达式
     * @param exprValidVo - WorkflowExprValidVo - body - exprValidVo - 必填
     */
    validateParticipantExpr(exprValidVo: WorkflowExprValidVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 修改流程模版头
     * @param workflowHeaderVo - WorkflowHeaderVo - body - workflowHeaderVo - 必填
     */
    updateWorkflowHeader(workflowHeaderVo: WorkflowHeaderVo): Promise<AxiosResponse<ResBodyWorkflowHeaderVo, any>>;
    /**
     * 保存流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    saveWorkflowTemplate(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<AxiosResponse<ResBodyobject, any>>;
    /**
     * 删除流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    remove(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 发布流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    publishWorkflowTemplate(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<AxiosResponse<ResBodyobject, any>>;
    /**
     * 查询流程列表
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    list(schemaCode: string): Promise<AxiosResponse<ResBodyListWorkflowHeaderVo, any>>;
    /**
     * 查询指定版本号的流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    getWorkflowTemplate(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<AxiosResponse<ResBodyWorkflowDraftVo, any>>;
    /**
     * 查询流程模版草稿
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    getWorkflowDraft(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<AxiosResponse<ResBodyWorkflowDraftVo, any>>;
    /**
     * 获取历史发布流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    getHistoricPublishedList(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<AxiosResponse<ResBodyListWorkflowDeploymentVo, any>>;
    /**
     * 查询流程模版
     * @param code - string - query - 流程编码 - 必填
     */
    get(code: string): Promise<AxiosResponse<ResBodyWorkflowHeaderVo, any>>;
    /**
     * 创建流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    createWorkflow(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<AxiosResponse<ResBodyWorkflowHeaderVo, any>>;
    /**
     * 克隆流程
     * @param codeNameVo - CodeNameVo - body - codeNameVo - 必填
     */
    clone(codeNameVo: CodeNameVo): Promise<AxiosResponse<ResBodyWorkflowDraftVo, any>>;
}
