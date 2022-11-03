/* eslint-disable */
import {
  QuickLinkFunVo, ResBodyVoid, ResBodyListQuickLinkVo,
} from '../api/model';

/**
 * quick-link-controller
 */
export interface QuickLinkController {

  /**
   * 保存快捷链接
   * @param quickLinkFuns - Array<QuickLinkFunVo> - body - quickLinkFuns - 必填
   */
  save (quickLinkFuns: Array<QuickLinkFunVo>): Promise<ResBodyVoid>;

  /**
   * 获取当前用户设置的快捷链接
   */
  list (): Promise<ResBodyListQuickLinkVo>;

  /**
   * 删除快捷链接
   * @param quickLinkFunVo - QuickLinkFunVo - body - quickLinkFunVo - 必填
   */
  delete (quickLinkFunVo: QuickLinkFunVo): Promise<ResBodyVoid>;

  /**
   * 新增快捷链接
   * @param quickLinkFunVo - QuickLinkFunVo - body - quickLinkFunVo - 必填
   */
  add (quickLinkFunVo: QuickLinkFunVo): Promise<ResBodyVoid>;
}
