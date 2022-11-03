/* eslint-disable */
import {
  WorkItemSubmitVo, ResBodyVoid, WorkItemAddParticipantVo, WorkItemAssistVo, WorkItemBatchSubmitVo, WorkItemCirculateVo, InstanceCancelVo, RuntimePredictParticipantVo, ResBodyWorkflowNodeParticipantVo, WorkItemRejectVo, WorkItemRetrieveVo, WorkItemTransferVo,
} from '../api/model';

/**
 * work-item-runtime-controller
 */
export interface WorkItemRuntimeController {

  /**
   * 转办待办任务
   * @param workItemTransferVo - WorkItemTransferVo - body - workItemTransferVo - 必填
   */
  transfer (workItemTransferVo: WorkItemTransferVo): Promise<ResBodyVoid>;

  /**
   * 暂存待办任务
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
  temporary (workItemSubmitVo: WorkItemSubmitVo): Promise<ResBodyVoid>;

  /**
   * 提交待办任务-发起节点使用
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
  submit (workItemSubmitVo: WorkItemSubmitVo): Promise<ResBodyVoid>;

  /**
   * 取回
   * @param workItemRetrieveVo - WorkItemRetrieveVo - body - workItemRetrieveVo - 必填
   */
  retrieve (workItemRetrieveVo: WorkItemRetrieveVo): Promise<ResBodyVoid>;

  /**
   * 驳回待办任务
   * @param workItemRejectVo - WorkItemRejectVo - body - workItemRejectVo - 必填
   */
  reject (workItemRejectVo: WorkItemRejectVo): Promise<ResBodyVoid>;

  /**
   * 预测节点审批人
   * @param runtimePredictParticipantVo - RuntimePredictParticipantVo - body - runtimePredictParticipantVo - 必填
   */
  predictParticipant (runtimePredictParticipantVo: RuntimePredictParticipantVo): Promise<ResBodyWorkflowNodeParticipantVo>;

  /**
   * 作废
   * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
   */
  invalid (instanceCancelVo: InstanceCancelVo): Promise<ResBodyVoid>;

  /**
   * 提交任务-不同意
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
  disagree (workItemSubmitVo: WorkItemSubmitVo): Promise<ResBodyVoid>;

  /**
   * 结束流程
   * @param instanceCancelVo - InstanceCancelVo - body - instanceCancelVo - 必填
   */
  close (instanceCancelVo: InstanceCancelVo): Promise<ResBodyVoid>;

  /**
   * 传阅
   * @param workItemCirculateVo - WorkItemCirculateVo - body - workItemCirculateVo - 必填
   */
  circulate (workItemCirculateVo: WorkItemCirculateVo): Promise<ResBodyVoid>;

  /**
   * 提交任务-批量同意
   * @param batchSubmitVo - WorkItemBatchSubmitVo - body - batchSubmitVo - 必填
   */
  batchAgree (batchSubmitVo: WorkItemBatchSubmitVo): Promise<ResBodyVoid>;

  /**
   * 提交协办任务
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
  assistSubmit (workItemSubmitVo: WorkItemSubmitVo): Promise<ResBodyVoid>;

  /**
   * 协办任务
   * @param workItemAssistVo - WorkItemAssistVo - body - workItemAssistVo - 必填
   */
  assist (workItemAssistVo: WorkItemAssistVo): Promise<ResBodyVoid>;

  /**
   * 加签
   * @param workItemApposttileVo - WorkItemAddParticipantVo - body - workItemApposttileVo - 必填
   */
  apposttile (workItemApposttileVo: WorkItemAddParticipantVo): Promise<ResBodyVoid>;

  /**
   * 提交任务-同意
   * @param workItemSubmitVo - WorkItemSubmitVo - body - workItemSubmitVo - 必填
   */
  agree (workItemSubmitVo: WorkItemSubmitVo): Promise<ResBodyVoid>;
}
