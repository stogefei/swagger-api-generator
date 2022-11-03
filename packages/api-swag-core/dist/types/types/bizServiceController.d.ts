import { BizServiceVo, ResBodyBizServiceVo, ResBodyListBizServiceVo, ResBodyListBizServiceCategoryVo, ResBodyVoid } from '../api/model';
/**
 * biz-service-controller
 */
export interface BizServiceController {
    /**
     * 修改业务服务
     * @param bizServiceVo - BizServiceVo - body - bizServiceVo - 必填
     */
    update(bizServiceVo: BizServiceVo): Promise<ResBodyBizServiceVo>;
    /**
     * 删除业务服务
     * @param codes - Array<string> - body - codes - 必填
     */
    remove(codes: Array<string>): Promise<ResBodyVoid>;
    /**
     * 获取所有业务服务树
     */
    listServiceTree(): Promise<ResBodyListBizServiceCategoryVo>;
    /**
     * 获取所有业务服务
     */
    listAll(): Promise<ResBodyListBizServiceVo>;
    /**
     * 根据关键字获取业务服务列表
     * @param categroyId - string - query - 分类id - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    getList(categroyId: string, keyword?: string): Promise<ResBodyListBizServiceVo>;
    /**
     * 新建业务服务
     * @param bizServiceVo - BizServiceVo - body - bizServiceVo - 必填
     */
    create(bizServiceVo: BizServiceVo): Promise<ResBodyBizServiceVo>;
}
