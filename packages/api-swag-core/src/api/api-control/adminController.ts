/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    SaveAdminVo, ResBodyVoid, ResBodyPageVOAdminVo,
} from '../model';

/**
 * admin-controller
 */
export class AdminController {
  
  /**
   * 删除系统管理员
   * @param userIds - Array<string> - body - userIds - 必填
   */
   async removeSysAdmin (userIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/permission/admin/removeSysAdmin',
      method: 'post',
      data: userIds,
    });
    return result;
  }
  
  
  
  /**
   * 分页获取系统管理员
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   * @param keyword - string - query - 关键字 - 可空
   */
   async getSysAdminsByPage (pageNum: number, pageSize: number, keyword?: string) {
    const result:AxiosResponse<ResBodyPageVOAdminVo> = await API.Global.request({
      url: '/admin/permission/admin/getSysAdminsByPage',
      method: 'get',
      params: { keyword, pageNum, pageSize },
    });
    return result;
  }
  
  
  
  /**
   * 新增系统管理员
   * @param saveAdminVo - SaveAdminVo - body - saveAdminVo - 必填
   */
   async addSysAdmin (saveAdminVo: SaveAdminVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/permission/admin/addSysAdmin',
      method: 'post',
      data: saveAdminVo,
    });
    return result;
  }
  
  
}
