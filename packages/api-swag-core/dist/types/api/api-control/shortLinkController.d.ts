import { AxiosResponse } from 'axios';
import { ShortLink, ResBodyListstring, ResBodystring } from '../model';
/**
 * short-link-controller
 */
export declare class ShortLinkController {
    /**
     * 获取短链接
     * @param shortLink - ShortLink - body - shortLink - 必填
     */
    get(shortLink: ShortLink): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 批量获取短链接
     * @param shortLinks - Array<ShortLink> - body - shortLinks - 必填
     */
    batchGet(shortLinks: Array<ShortLink>): Promise<AxiosResponse<ResBodyListstring, any>>;
}
