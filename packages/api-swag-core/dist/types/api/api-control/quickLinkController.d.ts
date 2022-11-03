import { AxiosResponse } from 'axios';
import { QuickLinkFunVo, ResBodyVoid, ResBodyListQuickLinkVo } from '../model';
/**
 * quick-link-controller
 */
export declare class QuickLinkController {
    /**
     * 保存快捷链接
     * @param quickLinkFuns - Array<QuickLinkFunVo> - body - quickLinkFuns - 必填
     */
    save(quickLinkFuns: Array<QuickLinkFunVo>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取当前用户设置的快捷链接
     */
    list(): Promise<AxiosResponse<ResBodyListQuickLinkVo, any>>;
    /**
     * 删除快捷链接
     * @param quickLinkFunVo - QuickLinkFunVo - body - quickLinkFunVo - 必填
     */
    delete(quickLinkFunVo: QuickLinkFunVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 新增快捷链接
     * @param quickLinkFunVo - QuickLinkFunVo - body - quickLinkFunVo - 必填
     */
    add(quickLinkFunVo: QuickLinkFunVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
