import { AxiosResponse } from 'axios';
import { IncrementNotifyVo, ResBodyobject } from '../model';
/**
 * notify-controller
 */
export declare class NotifyController {
    /**
     * 微信增量回调消息通知
     * @param body - string - body - body - 可空
     */
    wechat_1(body?: string): Promise<AxiosResponse<string, any>>;
    /**
     * 微信增量回调消息通知
     * @param body - string - body - body - 可空
     */
    wechat(body?: string): Promise<AxiosResponse<string, any>>;
    /**
     * openApi类型增量回调事件处理
     * @param incrementNotifyVo - IncrementNotifyVo - body - incrementNotifyVo - 必填
     */
    openapi(incrementNotifyVo: IncrementNotifyVo): Promise<AxiosResponse<ResBodyobject, any>>;
    /**
     * 钉钉增量回调消息通知
     * @param body - string - body - body - 必填
     */
    dingtalk_1(body: string | any): Promise<AxiosResponse<any, any>>;
    /**
     * 钉钉增量回调消息通知
     * @param body - string - body - body - 必填
     */
    dingtalk(body: string | any): Promise<AxiosResponse<any, any>>;
}
