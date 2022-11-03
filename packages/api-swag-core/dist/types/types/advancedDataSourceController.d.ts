import { AdvancedDataSourceVo, ResBodyAdvancedDataSourceVo, IDVo, ResBodyVoid, ResBodyListAdvancedDataSourceVo, ResBodyobject } from '../api/model';
/**
 * advanced-data-source-controller
 */
export interface AdvancedDataSourceController {
    /**
     * 修改数据源
     * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
     */
    update(advancedDataSourceVo: AdvancedDataSourceVo): Promise<ResBodyAdvancedDataSourceVo>;
    /**
     * 测试运行
     * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
     */
    testRun(advancedDataSourceVo: AdvancedDataSourceVo): Promise<ResBodyobject>;
    /**
     * 获取数据源列表
     */
    list(): Promise<ResBodyListAdvancedDataSourceVo>;
    /**
     * 获取数据源详情
     * @param id - string - query - 数据源id - 必填
     */
    get(id: string): Promise<ResBodyAdvancedDataSourceVo>;
    /**
     * 删除数据源
     * @param idVo - IDVo - body - idVo - 必填
     */
    delete(idVo: IDVo): Promise<ResBodyVoid>;
    /**
     * 创建数据源
     * @param advancedDataSourceVo - AdvancedDataSourceVo - body - advancedDataSourceVo - 必填
     */
    create(advancedDataSourceVo: AdvancedDataSourceVo): Promise<ResBodyAdvancedDataSourceVo>;
}
