import { AxiosResponse } from 'axios';
import { BatchDeptInsertVo, ResBodyListDepartmentVo, ResBodyDepartmentVo, ResBodyOrganizationChartVo, QueryChildDeptVo, ResBodyListUserVo, ResBodyPageVOUserVo, ResBodyUnitGroupVo, ResBodyVoid, DeptUserIdsVO, DepartmentVo } from '../model';
/**
 * department-controller
 */
export declare class DepartmentController {
    /**
     * 根据关键字搜索组织
     * @param keyword - string - query - 关键字 - 必填
     */
    search(keyword: string): Promise<AxiosResponse<ResBodyListDepartmentVo, any>>;
    /**
     * 保存部门
     * @param departmentVo - DepartmentVo - body - departmentVo - 必填
     */
    save(departmentVo: DepartmentVo): Promise<AxiosResponse<ResBodyDepartmentVo, any>>;
    /**
     * 移除用户
     * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
     */
    removeUser(deptUserIdsVo: DeptUserIdsVO): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 移除部门
     * @param deptIds - Array<string> - body - deptIds - 必填
     */
    remove(deptIds: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 根据父级id获取子级部门与用户列表
     * @param parentId - string - query - 父id - 可空
     */
    listChildUnit(parentId?: string): Promise<AxiosResponse<ResBodyUnitGroupVo, any>>;
    /**
     * 分页获取部门下用户列表
     * @param deptId - string - query - 部门id - 必填
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    getDeptUserListByPage(deptId: string, pageNum: number, pageSize: number, keyword?: string): Promise<AxiosResponse<ResBodyPageVOUserVo, any>>;
    /**
     * 获取部门下用户列表
     * @param deptId - string - query - 部门id - 必填
     */
    getDeptUserList(deptId: string): Promise<AxiosResponse<ResBodyListUserVo, any>>;
    /**
     * 根据父级id获取子级部门列表
     * @param queryChildDeptVo - QueryChildDeptVo - body - queryChildDeptVo - 必填
     */
    getChildList(queryChildDeptVo: QueryChildDeptVo): Promise<AxiosResponse<ResBodyListDepartmentVo, any>>;
    /**
     * 获取完整组织树
     * @param parentId - string - query - 父id - 必填
     */
    getAllDeptTree(parentId: string): Promise<AxiosResponse<ResBodyOrganizationChartVo, any>>;
    /**
     * 获取部门详情
     * @param deptId - string - query - 部门id - 必填
     */
    get(deptId: string): Promise<AxiosResponse<ResBodyDepartmentVo, any>>;
    /**
     * 批量新增部门
     * @param batchDeptInsertVo - BatchDeptInsertVo - body - batchDeptInsertVo - 必填
     */
    batchSaveDept(batchDeptInsertVo: BatchDeptInsertVo): Promise<AxiosResponse<ResBodyListDepartmentVo, any>>;
}
