import { AxiosResponse } from 'axios';
import { ResBodyDashboardVo, ResBodyBizMenuVo, ResBodyBizSchemaVo, ResBodyAppPackageVo, ResBodyListAppPackageVo, ResBodyListFunTreeVo, ResBodyListBizSchemaVo } from '../model';
/**
 * app-controller
 */
export declare class AppController {
    /**
     * 搜索模型
     * @param keyword - string - query - 关键字 - 必填
     */
    searchSchemas(keyword: string): Promise<AxiosResponse<ResBodyListBizSchemaVo, any>>;
    /**
     * 分组方式获取启用的应用列表
     */
    listGroupBy(): Promise<AxiosResponse<ResBodyListFunTreeVo, any>>;
    /**
     * 获取启用的应用列表
     */
    list(): Promise<AxiosResponse<ResBodyListAppPackageVo, any>>;
    /**
     * 获取应用详情
     * @param appCode - string - query - 应用编码 - 必填
     */
    info(appCode: string): Promise<AxiosResponse<ResBodyAppPackageVo, any>>;
    /**
     * 获取模型详情
     * @param schemaCode - string - query - 模型编码 - 必填
     */
    getSchemaInfo(schemaCode: string): Promise<AxiosResponse<ResBodyBizSchemaVo, any>>;
    /**
     * 获取自定义菜单详情
     * @param menuCode - string - query - 菜单编码 - 必填
     */
    getMenuInfo(menuCode: string): Promise<AxiosResponse<ResBodyBizMenuVo, any>>;
    /**
     * 获取仪表盘详情
     * @param code - string - query - 仪表盘编码 - 必填
     */
    getDashboardInfo(code: string): Promise<AxiosResponse<ResBodyDashboardVo, any>>;
}
