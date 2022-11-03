import { IncrementNotifyVo, ResBodyobject } from '../api/model';
/**
 * notify-controller
 */
export interface NotifyController {
    /**
     * 微信增量回调消息通知
     * @param body - string - body - body - 可空
     */
    wechat_1(body?: string): Promise<string>;
    /**
     * 微信增量回调消息通知
     * @param body - string - body - body - 可空
     */
    wechat(body?: string): Promise<string>;
    /**
     * openApi类型增量回调事件处理
     * @param incrementNotifyVo - IncrementNotifyVo - body - incrementNotifyVo - 必填
     */
    openapi(incrementNotifyVo: IncrementNotifyVo): Promise<ResBodyobject>;
    /**
     * 钉钉增量回调消息通知
     * @param body - string - body - body - 必填
     */
    dingtalk_1(body: string | any): void;
    /**
     * 钉钉增量回调消息通知
     * @param body - string - body - body - 必填
     */
    dingtalk(body: string | any): void;
}
