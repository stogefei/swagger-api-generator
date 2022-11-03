/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BatchMoveUserDeptVo, ResBodyVoid, UserVo, ResBodyListUserVo, DeptUserIdsVO, ResBodyUserVo, ResBodyPageVOUserVo, ResetUserPwdVo, UpdateUserRemarkVo,
} from '../model';

/**
 * user-controller
 */
export class UserController {
  
  /**
   * 修改用户备注
   * @param updateUserRemarkVo - UpdateUserRemarkVo - body - updateUserRemarkVo - 必填
   */
   async updateQuitRemark (updateUserRemarkVo: UpdateUserRemarkVo) {
    const result:AxiosResponse<ResBodyUserVo> = await API.Global.request({
      url: '/admin/org/user/updateQuitRemark',
      method: 'post',
      data: updateUserRemarkVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存用户
   * @param userVo - UserVo - body - userVO - 必填
   */
   async save (userVo: UserVo) {
    const result:AxiosResponse<ResBodyUserVo> = await API.Global.request({
      url: '/admin/org/user/save',
      method: 'post',
      data: userVo,
    });
    return result;
  }
  
  
  
  /**
   * 批量恢复用户
   * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
   */
   async restore (deptUserIdsVo: DeptUserIdsVO) {
    const result:AxiosResponse<ResBodyListUserVo> = await API.Global.request({
      url: '/admin/org/user/restore',
      method: 'post',
      data: deptUserIdsVo,
    });
    return result;
  }
  
  
  
  /**
   * 重置用户密码
   * @param resetUserPwdVo - ResetUserPwdVo - body - resetUserPwdVo - 必填
   */
   async resetPwd (resetUserPwdVo: ResetUserPwdVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/user/resetPwd',
      method: 'post',
      data: resetUserPwdVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取离职用户列表
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   * @param keyword - string - query - 关键字 - 可空
   */
   async listQuitUsers (pageNum: number, pageSize: number, keyword?: string) {
    const result:AxiosResponse<ResBodyPageVOUserVo> = await API.Global.request({
      url: '/admin/org/user/listQuitUsers',
      method: 'get',
      params: { keyword, pageNum, pageSize },
    });
    return result;
  }
  
  
  
  /**
   * 获取用户详情
   * @param userId - string - query - 用户id - 必填
   */
   async get (userId: string) {
    const result:AxiosResponse<ResBodyUserVo> = await API.Global.request({
      url: '/admin/org/user/get',
      method: 'get',
      params: { userId },
    });
    return result;
  }
  
  
  
  /**
   * 批量禁用用户
   * @param userIds - Array<string> - body - userIds - 必填
   */
   async disable (userIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/user/disable',
      method: 'post',
      data: userIds,
    });
    return result;
  }
  
  
  
  /**
   * 删除用户
   * @param deptUserIdsVo - DeptUserIdsVO - body - deptUserIdsVO - 必填
   */
   async delete (deptUserIdsVo: DeptUserIdsVO) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/user/delete',
      method: 'post',
      data: deptUserIdsVo,
    });
    return result;
  }
  
  
  
  /**
   * 批量保存用户
   * @param userVoList - Array<UserVo> - body - userVoList - 必填
   */
   async batchSave (userVoList: Array<UserVo>) {
    const result:AxiosResponse<ResBodyListUserVo> = await API.Global.request({
      url: '/admin/org/user/batchSave',
      method: 'post',
      data: userVoList,
    });
    return result;
  }
  
  
  
  /**
   * 批量转换用户部门
   * @param batchMoveUserDeptVo - BatchMoveUserDeptVo - body - batchMoveUserDeptVo - 必填
   */
   async batchMoveUserDept (batchMoveUserDeptVo: BatchMoveUserDeptVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/user/batchMoveUserDept',
      method: 'post',
      data: batchMoveUserDeptVo,
    });
    return result;
  }
  
  
}
