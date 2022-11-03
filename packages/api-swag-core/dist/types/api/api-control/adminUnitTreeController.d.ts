import { AxiosResponse } from 'axios';
import { QueryUnitTreeVo, ResBodyListUnitTreeVo, ResBodyUnitTreeSearchVo } from '../model';
/**
 * admin-unit-tree-controller
 */
export declare class AdminUnitTreeController {
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
