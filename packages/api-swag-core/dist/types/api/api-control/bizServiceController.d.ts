import { AxiosResponse } from 'axios';
import { BizServiceVo, ResBodyBizServiceVo, ResBodyListBizServiceVo, ResBodyListBizServiceCategoryVo, ResBodyVoid } from '../model';
/**
 * biz-service-controller
 */
export declare class BizServiceController {
    /**
     * 修改业务服务
     * @param bizServiceVo - BizServiceVo - body - bizServiceVo - 必填
     */
    update(bizServiceVo: BizServiceVo): Promise<AxiosResponse<ResBodyBizServiceVo, any>>;
    /**
     * 删除业务服务
     * @param codes - Array<string> - body - codes - 必填
     */
    remove(codes: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取所有业务服务树
     */
    listServiceTree(): Promise<AxiosResponse<ResBodyListBizServiceCategoryVo, any>>;
    /**
     * 获取所有业务服务
     */
    listAll(): Promise<AxiosResponse<ResBodyListBizServiceVo, any>>;
    /**
     * 根据关键字获取业务服务列表
     * @param categroyId - string - query - 分类id - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    getList(categroyId: string, keyword?: string): Promise<AxiosResponse<ResBodyListBizServiceVo, any>>;
    /**
     * 新建业务服务
     * @param bizServiceVo - BizServiceVo - body - bizServiceVo - 必填
     */
    create(bizServiceVo: BizServiceVo): Promise<AxiosResponse<ResBodyBizServiceVo, any>>;
}
