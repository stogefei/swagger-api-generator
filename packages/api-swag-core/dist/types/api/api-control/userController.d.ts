import { AxiosResponse } from 'axios';
import { BatchMoveUserDeptVo, ResBodyVoid, UserVo, ResBodyListUserVo, DeptUserIdsVO, ResBodyUserVo, ResBodyPageVOUserVo, ResetUserPwdVo, UpdateUserRemarkVo } from '../model';
/**
 * user-controller
 */
export declare class UserController {
    /**
     * 修改用户备注
     * @param updateUserRemarkVo - UpdateUserRemarkVo - body - updateUserRemarkVo - 必填
     */
    updateQuitRemark(updateUserRemarkVo: UpdateUserRemarkVo): Promise<AxiosResponse<ResBodyUserVo, any>>;
    /**
     * 保存用户
     * @param userVo - UserVo - body - userVO - 必填
     */
    save(userVo: UserVo): Promise<AxiosResponse<ResBodyUserVo, any>>;
    /**
     * 批量恢复用户
     * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
     */
    restore(deptUserIdsVo: DeptUserIdsVO): Promise<AxiosResponse<ResBodyListUserVo, any>>;
    /**
     * 重置用户密码
     * @param resetUserPwdVo - ResetUserPwdVo - body - resetUserPwdVo - 必填
     */
    resetPwd(resetUserPwdVo: ResetUserPwdVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取离职用户列表
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    listQuitUsers(pageNum: number, pageSize: number, keyword?: string): Promise<AxiosResponse<ResBodyPageVOUserVo, any>>;
    /**
     * 获取用户详情
     * @param userId - string - query - 用户id - 必填
     */
    get(userId: string): Promise<AxiosResponse<ResBodyUserVo, any>>;
    /**
     * 批量禁用用户
     * @param userIds - Array<string> - body - userIds - 必填
     */
    disable(userIds: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除用户
     * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
     */
    delete(deptUserIdsVo: DeptUserIdsVO): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 批量保存用户
     * @param userVoList - Array<UserVo> - body - userVoList - 必填
     */
    batchSave(userVoList: Array<UserVo>): Promise<AxiosResponse<ResBodyListUserVo, any>>;
    /**
     * 批量转换用户部门
     * @param batchMoveUserDeptVo - BatchMoveUserDeptVo - body - batchMoveUserDeptVo - 必填
     */
    batchMoveUserDept(batchMoveUserDeptVo: BatchMoveUserDeptVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
