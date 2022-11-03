import { AxiosResponse } from 'axios';
import { BizMethodInvokeVo, ResBodyobject, BizRuleInvokeVo } from '../model';
/**
 * biz-server-invoke-controller
 */
export declare class BizServerInvokeController {
    /**
     * 调用业务规则
     * @param invokeVo - BizRuleInvokeVo - body - invokeVo - 必填
     */
    bizRule(invokeVo: BizRuleInvokeVo): Promise<AxiosResponse<ResBodyobject, any>>;
    /**
     * 调用业务集成方法
     * @param invokeVo - BizMethodInvokeVo - body - invokeVo - 必填
     */
    bizBus(invokeVo: BizMethodInvokeVo): Promise<AxiosResponse<ResBodyobject, any>>;
}
