import { BizMenuVo, ResBodyBizMenuVo, CodeVo, ResBodyVoid } from '../api/model';
/**
 * biz-menu-controller
 */
export interface BizMenuController {
    /**
     * 删除自定义菜单
     * @param codeVo - CodeVo - body - codeVo - 必填
     */
    remove(codeVo: CodeVo): Promise<ResBodyVoid>;
    /**
     * 修改自定义菜单
     * @param bizMenuVo - BizMenuVo - body - bizMenuVo - 必填
     */
    modify(bizMenuVo: BizMenuVo): Promise<ResBodyBizMenuVo>;
    /**
     * 获取自定义菜单详情
     * @param code - string - query - 菜单编码 - 必填
     */
    get(code: string): Promise<ResBodyBizMenuVo>;
    /**
     * 创建自定义菜单
     * @param bizMenuVo - BizMenuVo - body - bizMenuVo - 必填
     */
    create(bizMenuVo: BizMenuVo): Promise<ResBodyBizMenuVo>;
}
