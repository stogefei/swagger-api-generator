import { AxiosResponse } from 'axios';
import { UrlVo, ResBodyWxJsapiSignature } from '../model';
/**
 * js-sign-controller
 */
export declare class JsSignController {
    /**
     * 微信js签名
     * @param urlVo - UrlVo - body - urlVo - 必填
     */
    wechat(urlVo: UrlVo): Promise<AxiosResponse<ResBodyWxJsapiSignature, any>>;
}
