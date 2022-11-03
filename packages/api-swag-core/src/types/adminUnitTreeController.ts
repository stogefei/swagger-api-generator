/* eslint-disable */
import {
  QueryUnitTreeVo, ResBodyListUnitTreeVo, ResBodyUnitTreeSearchVo,
} from '../api/model';

/**
 * admin-unit-tree-controller
 */
export interface AdminUnitTreeController {

  /**
   * 搜索人员、部门
   * @param queryUnitTreeVo - QueryUnitTreeVo - body - queryUnitTreeVo - 必填
   */
  search (queryUnitTreeVo: QueryUnitTreeVo): Promise<ResBodyUnitTreeSearchVo>;

  /**
   * 根据父级id获取子级部门列表
   * @param queryUnitTreeVo - QueryUnitTreeVo - body - queryUnitTreeVo - 必填
   */
  getchildrenList (queryUnitTreeVo: QueryUnitTreeVo): Promise<ResBodyListUnitTreeVo>;
}
