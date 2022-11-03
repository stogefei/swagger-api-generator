import { AxiosResponse } from 'axios';
import { BizServiceCategoryVo, ResBodyBizServiceCategoryVo, ResBodyListBizServiceCategoryVo, ResBodyVoid } from '../model';
/**
 * biz-service-categroy-controller
 */
export declare class BizServiceCategroyController {
    /**
     * 修改目录
     * @param bizServiceCategoryVo - BizServiceCategoryVo - body - bizServiceCategoryVo - 必填
     */
    update(bizServiceCategoryVo: BizServiceCategoryVo): Promise<AxiosResponse<ResBodyBizServiceCategoryVo, any>>;
    /**
     * 删除目录
     * @param ids - Array<string> - body - ids - 必填
     */
    remove(ids: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 根据关键字获取目录列表
     * @param keyword - string - query - 关键字 - 可空
     */
    getList(keyword?: string): Promise<AxiosResponse<ResBodyListBizServiceCategoryVo, any>>;
    /**
     * 新建目录
     * @param bizServiceCategoryVo - BizServiceCategoryVo - body - bizServiceCategoryVo - 必填
     */
    create(bizServiceCategoryVo: BizServiceCategoryVo): Promise<AxiosResponse<ResBodyBizServiceCategoryVo, any>>;
}
