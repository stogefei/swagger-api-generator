import { AxiosResponse } from 'axios';
import { ResBodyDataSourceListVo, DataSourceVo, ResBodyListBizPropertyVo } from '../model';
/**
 * report-data-source-controller
 */
export declare class ReportDataSourceController {
    /**
     * 获取数据源字段列表
     * @param dataSourceVo - DataSourceVo - body - dataSourceVo - 必填
     */
    propertys(dataSourceVo: DataSourceVo): Promise<AxiosResponse<ResBodyListBizPropertyVo, any>>;
    /**
     * 获取数据源列表
     */
    list(): Promise<AxiosResponse<ResBodyDataSourceListVo, any>>;
}
