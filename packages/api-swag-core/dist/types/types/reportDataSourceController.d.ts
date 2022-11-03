import { ResBodyDataSourceListVo, DataSourceVo, ResBodyListBizPropertyVo } from '../api/model';
/**
 * report-data-source-controller
 */
export interface ReportDataSourceController {
    /**
     * 获取数据源字段列表
     * @param dataSourceVo - DataSourceVo - body - dataSourceVo - 必填
     */
    propertys(dataSourceVo: DataSourceVo): Promise<ResBodyListBizPropertyVo>;
    /**
     * 获取数据源列表
     */
    list(): Promise<ResBodyDataSourceListVo>;
}
