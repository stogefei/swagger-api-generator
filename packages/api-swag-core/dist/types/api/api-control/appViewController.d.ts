import { AxiosResponse } from 'axios';
import { BizViewQueryVo, ResBodyBizViewVo, ResBodyListBizViewVo, BizViewDataQueryVo, ResBodyPageVOMapstringobject } from '../model';
/**
 * app-view-controller
 */
export declare class AppViewController {
    /**
     * 查询数据
     * @param bizViewDataQueryVo - BizViewDataQueryVo - body - bizViewDataQueryVo - 必填
     */
    listData(bizViewDataQueryVo: BizViewDataQueryVo): Promise<AxiosResponse<ResBodyPageVOMapstringobject, any>>;
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
}
