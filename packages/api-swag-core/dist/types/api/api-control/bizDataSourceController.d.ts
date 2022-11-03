import { AxiosResponse } from 'axios';
import { BizDataSourceVo, ResBodyBizDataSourceVo, ResBodyListBizDataSourceVo, ResBodyVoid } from '../model';
/**
 * biz-data-source-controller
 */
export declare class BizDataSourceController {
    /**
     * 修改数据源
     * @param bizDataSourceVo - BizDataSourceVo - body - bizDataSourceVo - 必填
     */
    update(bizDataSourceVo: BizDataSourceVo): Promise<AxiosResponse<ResBodyBizDataSourceVo, any>>;
    /**
     * 删除数据源
     * @param codes - Array<string> - body - codes - 必填
     */
    remove(codes: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 根据关键字获取数据源列表
     * @param keyword - string - query - 关键字 - 可空
     */
    getList(keyword?: string): Promise<AxiosResponse<ResBodyListBizDataSourceVo, any>>;
    /**
     * 新建数据源
     * @param bizDataSourceVo - BizDataSourceVo - body - bizDataSourceVo - 必填
     */
    create(bizDataSourceVo: BizDataSourceVo): Promise<AxiosResponse<ResBodyBizDataSourceVo, any>>;
}
