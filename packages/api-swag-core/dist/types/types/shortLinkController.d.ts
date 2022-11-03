import { ShortLink, ResBodyListstring, ResBodystring } from '../api/model';
/**
 * short-link-controller
 */
export interface ShortLinkController {
    /**
     * 获取短链接
     * @param shortLink - ShortLink - body - shortLink - 必填
     */
    get(shortLink: ShortLink): Promise<ResBodystring>;
    /**
     * 批量获取短链接
     * @param shortLinks - Array<ShortLink> - body - shortLinks - 必填
     */
    batchGet(shortLinks: Array<ShortLink>): Promise<ResBodyListstring>;
}
