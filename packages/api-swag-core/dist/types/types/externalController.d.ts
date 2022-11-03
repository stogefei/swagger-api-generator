import { ResBodyFormDataVo, ExternalSubmitVo, ResBodystring } from '../api/model';
/**
 * external-controller
 */
export interface ExternalController {
    /**
     * 提交表单
     * @param externalSubmitVo - ExternalSubmitVo - body - externalSubmitVo - 必填
     */
    submit(externalSubmitVo: ExternalSubmitVo): Promise<ResBodystring>;
    /**
     * 发起流程
     * @param externalSubmitVo - ExternalSubmitVo - body - externalSubmitVo - 必填
     */
    startWorkflow(externalSubmitVo: ExternalSubmitVo): Promise<ResBodystring>;
    /**
     * 加载表单
     * @param shortCode - string - query - 外链短码 - 必填
     */
    load(shortCode: string): Promise<ResBodyFormDataVo>;
}
