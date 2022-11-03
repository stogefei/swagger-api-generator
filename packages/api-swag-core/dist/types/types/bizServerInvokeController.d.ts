import { BizMethodInvokeVo, ResBodyobject, BizRuleInvokeVo } from '../api/model';
/**
 * biz-server-invoke-controller
 */
export interface BizServerInvokeController {
    /**
     * 调用业务规则
     * @param invokeVo - BizRuleInvokeVo - body - invokeVo - 必填
     */
    bizRule(invokeVo: BizRuleInvokeVo): Promise<ResBodyobject>;
    /**
     * 调用业务集成方法
     * @param invokeVo - BizMethodInvokeVo - body - invokeVo - 必填
     */
    bizBus(invokeVo: BizMethodInvokeVo): Promise<ResBodyobject>;
}
