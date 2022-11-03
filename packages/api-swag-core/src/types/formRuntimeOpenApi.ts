/* eslint-disable */
import {
  CalculateVo, ResBodyListCalculateResultVo, BizObjectSubmitVo, ResBodyMapstringobject, BizViewDataQueryVo, ResBodyPageVOMapstringobject, LoadFormDataParamVo, ResBodyFormDataVo, LoadWorkflowFormDataParamVo, ResBodyWorkflowFormDataVo, BizObjectIdsVo, ResBodyVoid,
} from '../api/model';

/**
 * form-runtime-open-api
 */
export interface FormRuntimeOpenApi {

  /**
   * 修改数据
   * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
   */
  update (bizObjectSubmitVo: BizObjectSubmitVo): Promise<ResBodyMapstringobject>;

  /**
   * 删除数据
   * @param bizObjectIdsVo - BizObjectIdsVo - body - bizObjectIdsVo - 必填
   */
  remove (bizObjectIdsVo: BizObjectIdsVo): Promise<ResBodyVoid>;

  /**
   * 加载流程表单数据
   * @param loadWorkflowFormDataParamVo - LoadWorkflowFormDataParamVo - body - loadWorkflowFormDataParamVo - 必填
   */
  loadWorkflowData (loadWorkflowFormDataParamVo: LoadWorkflowFormDataParamVo): Promise<ResBodyWorkflowFormDataVo>;

  /**
   * 加载业务表单数据
   * @param loadFormDataParamVo - LoadFormDataParamVo - body - loadFormDataParamVo - 必填
   */
  loadBizData (loadFormDataParamVo: LoadFormDataParamVo): Promise<ResBodyFormDataVo>;

  /**
   * 查询数据
   * @param bizViewDataQueryVo - BizViewDataQueryVo - body - bizViewDataQueryVo - 必填
   */
  listData (bizViewDataQueryVo: BizViewDataQueryVo): Promise<ResBodyPageVOMapstringobject>;

  /**
   * 保存数据
   * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
   */
  insert (bizObjectSubmitVo: BizObjectSubmitVo): Promise<ResBodyMapstringobject>;

  /**
   * 公式计算
   * @param calculateList - Array<CalculateVo> - body - calculateList - 必填
   */
  calculate (calculateList: Array<CalculateVo>): Promise<ResBodyListCalculateResultVo>;
}
