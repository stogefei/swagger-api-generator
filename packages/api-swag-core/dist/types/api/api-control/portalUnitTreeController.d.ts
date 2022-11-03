import { AxiosResponse } from 'axios';
import { QueryUnitTreeVo, ResBodyListUnitTreeVo, ResBodyUnitTreeSearchVo, QueryUserVo } from '../model';
/**
 * portal-unit-tree-controller
 */
export declare class PortalUnitTreeController {
    /**
     * 搜索人员
     * @param queryUserVo - QueryUserVo - body - queryUserVo - 必填
     */
    search_1(queryUserVo: QueryUserVo): Promise<AxiosResponse<ResBodyUnitTreeSearchVo, any>>;
    /**
     * 搜索人员、部门
     * @param queryUnitTreeVo - QueryUnitTreeVo - body - queryUnitTreeVo - 必填
     */
    search(queryUnitTreeVo: QueryUnitTreeVo): Promise<AxiosResponse<ResBodyUnitTreeSearchVo, any>>;
    /**
     * 根据父级id获取子级部门列表
     * @param queryUnitTreeVo - QueryUnitTreeVo - body - queryUnitTreeVo - 必填
     */
    getchildrenList(queryUnitTreeVo: QueryUnitTreeVo): Promise<AxiosResponse<ResBodyListUnitTreeVo, any>>;
}
