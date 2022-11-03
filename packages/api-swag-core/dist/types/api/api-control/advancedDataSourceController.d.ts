import { AxiosResponse } from 'axios';
import { AdvancedDataSourceVo, ResBodyAdvancedDataSourceVo, IDVo, ResBodyVoid, ResBodyListAdvancedDataSourceVo, ResBodyobject } from '../model';
/**
 * advanced-data-source-controller
 */
export declare class AdvancedDataSourceController {
    /**
     * 修改数据源
     * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
     */
    update(advancedDataSourceVo: AdvancedDataSourceVo): Promise<AxiosResponse<ResBodyAdvancedDataSourceVo, any>>;
    /**
     * 测试运行
     * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
     */
    testRun(advancedDataSourceVo: AdvancedDataSourceVo): Promise<AxiosResponse<ResBodyobject, any>>;
    /**
     * 获取数据源列表
     */
    list(): Promise<AxiosResponse<ResBodyListAdvancedDataSourceVo, any>>;
    /**
     * 获取数据源详情
     * @param id - string - query - 数据源id - 必填
     */
    get(id: string): Promise<AxiosResponse<ResBodyAdvancedDataSourceVo, any>>;
    /**
     * 删除数据源
     * @param idVo - IDVo - body - idVo - 必填
     */
    delete(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 创建数据源
     * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
     */
    create(advancedDataSourceVo: AdvancedDataSourceVo): Promise<AxiosResponse<ResBodyAdvancedDataSourceVo, any>>;
}
