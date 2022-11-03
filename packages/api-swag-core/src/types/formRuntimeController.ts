/* eslint-disable */
import {
  CalculateVo, ResBodyListCalculateResultVo, LoadFormDataParamVo, ResBodyFormDataVo, ResBodyWorkflowFormDataVo, LoadFormSheetDataParamVo, ResBodyListMapstringobject, LoadWorkflowFormDataParamVo, FormRemindVo, ResBodyFormRemindVo, ResBodyViewCorrelationFormVo,
} from '../api/model';

/**
 * form-runtime-controller
 */
export interface FormRuntimeController {

  /**
   * 预览关联表单
   * @param bizObjectId - string - query - 业务对象数据id - 必填
   * @param schemaCode - string - query - 模型编码 - 必填
   * @param viewCode - string - query - 视图编码 - 必填
   */
  viewCorrelationForm (bizObjectId: string, schemaCode: string, viewCode: string): Promise<ResBodyViewCorrelationFormVo>;

  /**
   * 表单提醒设置
   * @param formRemindVo - FormRemindVo - body - formRemindVo - 必填
   */
  remind (formRemindVo: FormRemindVo): Promise<ResBodyFormRemindVo>;

  /**
   * 加载流程表单数据
   * @param loadWorkflowFormDataParamVo - LoadWorkflowFormDataParamVo - body - loadWorkflowFormDataParamVo - 必填
   */
  loadWorkflowData (loadWorkflowFormDataParamVo: LoadWorkflowFormDataParamVo): Promise<ResBodyWorkflowFormDataVo>;

  /**
   * 加载表单子表数据
   * @param loadFormSheetDataParamVo - LoadFormSheetDataParamVo - body - loadFormSheetDataParamVo - 必填
   */
  loadSheetDatas (loadFormSheetDataParamVo: LoadFormSheetDataParamVo): Promise<ResBodyListMapstringobject>;

  /**
   * 根据表单评论加载表单数据
   * @param commentId - string - query - commentId - 必填
   */
  loadDataByCommentId (commentId: string): Promise<ResBodyWorkflowFormDataVo>;

  /**
   * 加载业务表单数据
   * @param loadFormDataParamVo - LoadFormDataParamVo - body - loadFormDataParamVo - 必填
   */
  loadBizData (loadFormDataParamVo: LoadFormDataParamVo): Promise<ResBodyFormDataVo>;

  /**
   * 公式计算
   * @param calculateList - Array<CalculateVo> - body - calculateList - 必填
   */
  calculate (calculateList: Array<CalculateVo>): Promise<ResBodyListCalculateResultVo>;
}
