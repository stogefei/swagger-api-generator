import { UrlVo, ResBodyWxJsapiSignature } from '../api/model';
/**
 * js-sign-controller
 */
export interface JsSignController {
    /**
     * 微信js签名
     * @param urlVo - UrlVo - body - urlVo - 必填
     */
    wechat(urlVo: UrlVo): Promise<ResBodyWxJsapiSignature>;
}
