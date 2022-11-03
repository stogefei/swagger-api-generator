import { AxiosResponse } from 'axios';
import { ResBodyFormDataVo, ExternalSubmitVo, ResBodystring } from '../model';
/**
 * external-controller
 */
export declare class ExternalController {
    /**
     * 提交表单
     * @param externalSubmitVo - ExternalSubmitVo - body - externalSubmitVo - 必填
     */
    submit(externalSubmitVo: ExternalSubmitVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 发起流程
     * @param externalSubmitVo - ExternalSubmitVo - body - externalSubmitVo - 必填
     */
    startWorkflow(externalSubmitVo: ExternalSubmitVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 加载表单
     * @param shortCode - string - query - 外链短码 - 必填
     */
    load(shortCode: string): Promise<AxiosResponse<ResBodyFormDataVo, any>>;
}
