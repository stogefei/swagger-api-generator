/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BatchDeptInsertVo, ResBodyListDepartmentVo, ResBodyDepartmentVo, ResBodyOrganizationChartVo, QueryChildDeptVo, ResBodyListUserVo, ResBodyPageVOUserVo, ResBodyUnitGroupVo, ResBodyVoid, DeptUserIdsVO, DepartmentVo,
} from '../model';

/**
 * department-controller
 */
export class DepartmentController {
  
  /**
   * 根据关键字搜索组织
   * @param keyword - string - query - 关键字 - 必填
   */
   async search (keyword: string) {
    const result:AxiosResponse<ResBodyListDepartmentVo> = await API.Global.request({
      url: '/admin/org/dept/search',
      method: 'get',
      params: { keyword },
    });
    return result;
  }
  
  
  
  /**
   * 保存部门
   * @param departmentVo - DepartmentVo - body - departmentVo - 必填
   */
   async save (departmentVo: DepartmentVo) {
    const result:AxiosResponse<ResBodyDepartmentVo> = await API.Global.request({
      url: '/admin/org/dept/save',
      method: 'post',
      data: departmentVo,
    });
    return result;
  }
  
  
  
  /**
   * 移除用户
   * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
   */
   async removeUser (deptUserIdsVo: DeptUserIdsVO) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/dept/removeUser',
      method: 'post',
      data: deptUserIdsVo,
    });
    return result;
  }
  
  
  
  /**
   * 移除部门
   * @param deptIds - Array<string> - body - deptIds - 必填
   */
   async remove (deptIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/dept/remove',
      method: 'post',
      data: deptIds,
    });
    return result;
  }
  
  
  
  /**
   * 根据父级id获取子级部门与用户列表
   * @param parentId - string - query - 父id - 可空
   */
   async listChildUnit (parentId?: string) {
    const result:AxiosResponse<ResBodyUnitGroupVo> = await API.Global.request({
      url: '/admin/org/dept/listChildUnit',
      method: 'get',
      params: { parentId },
    });
    return result;
  }
  
  
  
  /**
   * 分页获取部门下用户列表
   * @param deptId - string - query - 部门id - 必填
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   * @param keyword - string - query - 关键字 - 可空
   */
   async getDeptUserListByPage (deptId: string, pageNum: number, pageSize: number, keyword?: string) {
    const result:AxiosResponse<ResBodyPageVOUserVo> = await API.Global.request({
      url: '/admin/org/dept/getDeptUserListByPage',
      method: 'get',
      params: { deptId, keyword, pageNum, pageSize },
    });
    return result;
  }
  
  
  
  /**
   * 获取部门下用户列表
   * @param deptId - string - query - 部门id - 必填
   */
   async getDeptUserList (deptId: string) {
    const result:AxiosResponse<ResBodyListUserVo> = await API.Global.request({
      url: '/admin/org/dept/getDeptUserList',
      method: 'get',
      params: { deptId },
    });
    return result;
  }
  
  
  
  /**
   * 根据父级id获取子级部门列表
   * @param queryChildDeptVo - QueryChildDeptVo - body - queryChildDeptVo - 必填
   */
   async getChildList (queryChildDeptVo: QueryChildDeptVo) {
    const result:AxiosResponse<ResBodyListDepartmentVo> = await API.Global.request({
      url: '/admin/org/dept/getChildList',
      method: 'post',
      data: queryChildDeptVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取完整组织树
   * @param parentId - string - query - 父id - 必填
   */
   async getAllDeptTree (parentId: string) {
    const result:AxiosResponse<ResBodyOrganizationChartVo> = await API.Global.request({
      url: '/admin/org/dept/getAllDeptTree',
      method: 'get',
      params: { parentId },
    });
    return result;
  }
  
  
  
  /**
   * 获取部门详情
   * @param deptId - string - query - 部门id - 必填
   */
   async get (deptId: string) {
    const result:AxiosResponse<ResBodyDepartmentVo> = await API.Global.request({
      url: '/admin/org/dept/get',
      method: 'get',
      params: { deptId },
    });
    return result;
  }
  
  
  
  /**
   * 批量新增部门
   * @param batchDeptInsertVo - BatchDeptInsertVo - body - batchDeptInsertVo - 必填
   */
   async batchSaveDept (batchDeptInsertVo: BatchDeptInsertVo) {
    const result:AxiosResponse<ResBodyListDepartmentVo> = await API.Global.request({
      url: '/admin/org/dept/batchSaveDept',
      method: 'post',
      data: batchDeptInsertVo,
    });
    return result;
  }
  
  
}
