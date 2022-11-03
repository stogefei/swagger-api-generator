import { CodeNameVo, ResBodyWorkflowDraftVo, SaveWorkflowTemplateVo, ResBodyWorkflowHeaderVo, WorkflowSchemaCodeVo, ResBodyListWorkflowDeploymentVo, ResBodyListWorkflowHeaderVo, ResBodyobject, ResBodyVoid, WorkflowHeaderVo, WorkflowExprValidVo, ResBodyListValidateErrorMessageVo } from '../api/model';
/**
 * workflow-design-controller
 */
export interface WorkflowDesignController {
    /**
     * 校验流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    validateWorkflowTemplate(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<ResBodyListValidateErrorMessageVo>;
    /**
     * 校验参与者函数表达式
     * @param exprValidVo - WorkflowExprValidVo - body - exprValidVo - 必填
     */
    validateParticipantExpr(exprValidVo: WorkflowExprValidVo): Promise<ResBodyVoid>;
    /**
     * 修改流程模版头
     * @param workflowHeaderVo - WorkflowHeaderVo - body - workflowHeaderVo - 必填
     */
    updateWorkflowHeader(workflowHeaderVo: WorkflowHeaderVo): Promise<ResBodyWorkflowHeaderVo>;
    /**
     * 保存流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    saveWorkflowTemplate(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<ResBodyobject>;
    /**
     * 删除流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    remove(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<ResBodyVoid>;
    /**
     * 发布流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    publishWorkflowTemplate(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<ResBodyobject>;
    /**
     * 查询流程列表
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    list(schemaCode: string): Promise<ResBodyListWorkflowHeaderVo>;
    /**
     * 查询指定版本号的流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    getWorkflowTemplate(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<ResBodyWorkflowDraftVo>;
    /**
     * 查询流程模版草稿
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    getWorkflowDraft(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<ResBodyWorkflowDraftVo>;
    /**
     * 获取历史发布流程模版
     * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
     */
    getHistoricPublishedList(workflowSchemaCodeVo: WorkflowSchemaCodeVo): Promise<ResBodyListWorkflowDeploymentVo>;
    /**
     * 查询流程模版
     * @param code - string - query - 流程编码 - 必填
     */
    get(code: string): Promise<ResBodyWorkflowHeaderVo>;
    /**
     * 创建流程模版
     * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
     */
    createWorkflow(saveWorkflowTemplateVo: SaveWorkflowTemplateVo): Promise<ResBodyWorkflowHeaderVo>;
    /**
     * 克隆流程
     * @param codeNameVo - CodeNameVo - body - codeNameVo - 必填
     */
    clone(codeNameVo: CodeNameVo): Promise<ResBodyWorkflowDraftVo>;
}
