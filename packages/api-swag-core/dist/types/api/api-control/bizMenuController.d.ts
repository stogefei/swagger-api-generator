import { AxiosResponse } from 'axios';
import { BizMenuVo, ResBodyBizMenuVo, CodeVo, ResBodyVoid } from '../model';
/**
 * biz-menu-controller
 */
export declare class BizMenuController {
    /**
     * 删除自定义菜单
     * @param codeVo - CodeVo - body - codeVo - 必填
     */
    remove(codeVo: CodeVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 修改自定义菜单
     * @param bizMenuVo - BizMenuVo - body - bizMenuVo - 必填
     */
    modify(bizMenuVo: BizMenuVo): Promise<AxiosResponse<ResBodyBizMenuVo, any>>;
    /**
     * 获取自定义菜单详情
     * @param code - string - query - 菜单编码 - 必填
     */
    get(code: string): Promise<AxiosResponse<ResBodyBizMenuVo, any>>;
    /**
     * 创建自定义菜单
     * @param bizMenuVo - BizMenuVo - body - bizMenuVo - 必填
     */
    create(bizMenuVo: BizMenuVo): Promise<AxiosResponse<ResBodyBizMenuVo, any>>;
}
