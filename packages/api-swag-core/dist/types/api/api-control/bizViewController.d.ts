import { AxiosResponse } from 'axios';
import { BizViewVo, ResBodyBizViewVo, BizViewQueryVo, ResBodyListBizViewVo, ResBodyVoid, BizViewSortVo, BizViewVisibleVo } from '../model';
/**
 * biz-view-controller
 */
export declare class BizViewController {
    /**
     * 修改可见端
     * @param bizViewVisibleVo - BizViewVisibleVo - body - bizViewVisibleVo - 必填
     */
    updateVisible(bizViewVisibleVo: BizViewVisibleVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 编辑视图
     * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
     */
    update(bizViewVo: BizViewVo): Promise<AxiosResponse<ResBodyBizViewVo, any>>;
    /**
     * 排序
     * @param sortVo - BizViewSortVo - body - sortVo - 必填
     */
    sort(sortVo: BizViewSortVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除视图
     * @param bizViewQueryVo - BizViewQueryVo - body - bizViewQueryVo - 必填
     */
    remove(bizViewQueryVo: BizViewQueryVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 发布视图
     * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
     */
    publish(bizViewVo: BizViewVo): Promise<AxiosResponse<ResBodyBizViewVo, any>>;
    /**
     * 获取视图列表
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    list(schemaCode: string): Promise<AxiosResponse<ResBodyListBizViewVo, any>>;
    /**
     * 获取视图详情
     * @param bizViewQueryVo - BizViewQueryVo - body - bizViewQueryVo - 必填
     */
    getViewInfo(bizViewQueryVo: BizViewQueryVo): Promise<AxiosResponse<ResBodyBizViewVo, any>>;
    /**
     * 创建视图
     * @param bizViewVo - BizViewVo - body - bizViewVo - 必填
     */
    create(bizViewVo: BizViewVo): Promise<AxiosResponse<ResBodyBizViewVo, any>>;
}
