import { BatchDeptInsertVo, ResBodyListDepartmentVo, ResBodyDepartmentVo, ResBodyOrganizationChartVo, QueryChildDeptVo, ResBodyListUserVo, ResBodyPageVOUserVo, ResBodyUnitGroupVo, ResBodyVoid, DeptUserIdsVO, DepartmentVo } from '../api/model';
/**
 * department-controller
 */
export interface DepartmentController {
    /**
     * 根据关键字搜索组织
     * @param keyword - string - query - 关键字 - 必填
     */
    search(keyword: string): Promise<ResBodyListDepartmentVo>;
    /**
     * 保存部门
     * @param departmentVo - DepartmentVo - body - departmentVo - 必填
     */
    save(departmentVo: DepartmentVo): Promise<ResBodyDepartmentVo>;
    /**
     * 移除用户
     * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
     */
    removeUser(deptUserIdsVo: DeptUserIdsVO): Promise<ResBodyVoid>;
    /**
     * 移除部门
     * @param deptIds - Array<string> - body - deptIds - 必填
     */
    remove(deptIds: Array<string>): Promise<ResBodyVoid>;
    /**
     * 根据父级id获取子级部门与用户列表
     * @param parentId - string - query - 父id - 可空
     */
    listChildUnit(parentId?: string): Promise<ResBodyUnitGroupVo>;
    /**
     * 分页获取部门下用户列表
     * @param deptId - string - query - 部门id - 必填
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    getDeptUserListByPage(deptId: string, pageNum: number, pageSize: number, keyword?: string): Promise<ResBodyPageVOUserVo>;
    /**
     * 获取部门下用户列表
     * @param deptId - string - query - 部门id - 必填
     */
    getDeptUserList(deptId: string): Promise<ResBodyListUserVo>;
    /**
     * 根据父级id获取子级部门列表
     * @param queryChildDeptVo - QueryChildDeptVo - body - queryChildDeptVo - 必填
     */
    getChildList(queryChildDeptVo: QueryChildDeptVo): Promise<ResBodyListDepartmentVo>;
    /**
     * 获取完整组织树
     * @param parentId - string - query - 父id - 必填
     */
    getAllDeptTree(parentId: string): Promise<ResBodyOrganizationChartVo>;
    /**
     * 获取部门详情
     * @param deptId - string - query - 部门id - 必填
     */
    get(deptId: string): Promise<ResBodyDepartmentVo>;
    /**
     * 批量新增部门
     * @param batchDeptInsertVo - BatchDeptInsertVo - body - batchDeptInsertVo - 必填
     */
    batchSaveDept(batchDeptInsertVo: BatchDeptInsertVo): Promise<ResBodyListDepartmentVo>;
}
