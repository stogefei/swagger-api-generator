/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    CodeNameVo, ResBodyWorkflowDraftVo, SaveWorkflowTemplateVo, ResBodyWorkflowHeaderVo, WorkflowSchemaCodeVo, ResBodyListWorkflowDeploymentVo, ResBodyListWorkflowHeaderVo, ResBodyobject, ResBodyVoid, WorkflowHeaderVo, WorkflowExprValidVo, ResBodyListValidateErrorMessageVo,
} from '../model';

/**
 * workflow-design-controller
 */
export class WorkflowDesignController {
  
  /**
   * 校验流程模版
   * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
   */
   async validateWorkflowTemplate (saveWorkflowTemplateVo: SaveWorkflowTemplateVo) {
    const result:AxiosResponse<ResBodyListValidateErrorMessageVo> = await API.Global.request({
      url: '/admin/model/workflow/validateWorkflowTemplate',
      method: 'post',
      data: saveWorkflowTemplateVo,
    });
    return result;
  }
  
  
  
  /**
   * 校验参与者函数表达式
   * @param exprValidVo - WorkflowExprValidVo - body - exprValidVo - 必填
   */
   async validateParticipantExpr (exprValidVo: WorkflowExprValidVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/workflow/validateParticipantExpr',
      method: 'get',
      data: exprValidVo,
    });
    return result;
  }
  
  
  
  /**
   * 修改流程模版头
   * @param workflowHeaderVo - WorkflowHeaderVo - body - workflowHeaderVo - 必填
   */
   async updateWorkflowHeader (workflowHeaderVo: WorkflowHeaderVo) {
    const result:AxiosResponse<ResBodyWorkflowHeaderVo> = await API.Global.request({
      url: '/admin/model/workflow/updateWorkflowHeader',
      method: 'post',
      data: workflowHeaderVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存流程模版
   * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
   */
   async saveWorkflowTemplate (saveWorkflowTemplateVo: SaveWorkflowTemplateVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/admin/model/workflow/saveWorkflowTemplate',
      method: 'post',
      data: saveWorkflowTemplateVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除流程模版
   * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
   */
   async remove (workflowSchemaCodeVo: WorkflowSchemaCodeVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/workflow/remove',
      method: 'post',
      data: workflowSchemaCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 发布流程模版
   * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
   */
   async publishWorkflowTemplate (saveWorkflowTemplateVo: SaveWorkflowTemplateVo) {
    const result:AxiosResponse<ResBodyobject> = await API.Global.request({
      url: '/admin/model/workflow/publishWorkflowTemplate',
      method: 'post',
      data: saveWorkflowTemplateVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询流程列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async list (schemaCode: string) {
    const result:AxiosResponse<ResBodyListWorkflowHeaderVo> = await API.Global.request({
      url: '/admin/model/workflow/list',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 查询指定版本号的流程模版
   * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
   */
   async getWorkflowTemplate (workflowSchemaCodeVo: WorkflowSchemaCodeVo) {
    const result:AxiosResponse<ResBodyWorkflowDraftVo> = await API.Global.request({
      url: '/admin/model/workflow/getWorkflowTemplate',
      method: 'post',
      data: workflowSchemaCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询流程模版草稿
   * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
   */
   async getWorkflowDraft (workflowSchemaCodeVo: WorkflowSchemaCodeVo) {
    const result:AxiosResponse<ResBodyWorkflowDraftVo> = await API.Global.request({
      url: '/admin/model/workflow/getWorkflowDraft',
      method: 'post',
      data: workflowSchemaCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取历史发布流程模版
   * @param workflowSchemaCodeVo - WorkflowSchemaCodeVo - body - workflowSchemaCodeVo - 必填
   */
   async getHistoricPublishedList (workflowSchemaCodeVo: WorkflowSchemaCodeVo) {
    const result:AxiosResponse<ResBodyListWorkflowDeploymentVo> = await API.Global.request({
      url: '/admin/model/workflow/getHistoricPublishedList',
      method: 'post',
      data: workflowSchemaCodeVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询流程模版
   * @param code - string - query - 流程编码 - 必填
   */
   async get (code: string) {
    const result:AxiosResponse<ResBodyWorkflowHeaderVo> = await API.Global.request({
      url: '/admin/model/workflow/get',
      method: 'get',
      params: { code },
    });
    return result;
  }
  
  
  
  /**
   * 创建流程模版
   * @param saveWorkflowTemplateVo - SaveWorkflowTemplateVo - body - saveWorkflowTemplateVo - 必填
   */
   async createWorkflow (saveWorkflowTemplateVo: SaveWorkflowTemplateVo) {
    const result:AxiosResponse<ResBodyWorkflowHeaderVo> = await API.Global.request({
      url: '/admin/model/workflow/createWorkflow',
      method: 'post',
      data: saveWorkflowTemplateVo,
    });
    return result;
  }
  
  
  
  /**
   * 克隆流程
   * @param codeNameVo - CodeNameVo - body - codeNameVo - 必填
   */
   async clone (codeNameVo: CodeNameVo) {
    const result:AxiosResponse<ResBodyWorkflowDraftVo> = await API.Global.request({
      url: '/admin/model/workflow/clone',
      method: 'post',
      data: codeNameVo,
    });
    return result;
  }
  
  
}
