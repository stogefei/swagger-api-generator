/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    AppPackageVo, ResBodyAppPackageVo, ResBodyVoid, NameVo, ResBodyAppGroupVo, ResBodyListAppGroupVo, IDVo, AppGroupVo, ResBodyListAppPackageVo, FlagVo, ResBodyListFunTreeVo,
} from '../model';

/**
 * app-package-controller
 */
export class AppPackageController {
  
  /**
   * 设置应用按权限组授权
   * @param ids - Array<string> - body - ids - 必填
   */
   async visiblePerGroup (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/visiblePerGroup',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 设置应用所有用户可见
   * @param ids - Array<string> - body - ids - 必填
   */
   async visibleAll (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/visibleAll',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 删除应用
   * @param ids - Array<string> - body - ids - 必填
   */
   async remove (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/remove',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 编辑应用
   * @param appPackageVo - AppPackageVo - body - appPackageVo - 必填
   */
   async modify (appPackageVo: AppPackageVo) {
    const result:AxiosResponse<ResBodyAppPackageVo> = await API.Global.request({
      url: '/admin/model/app/modify',
      method: 'post',
      data: appPackageVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取用户拥有的应用列表
   * @param userId - string - query - 用户id - 必填
   */
   async listOwn (userId: string) {
    const result:AxiosResponse<ResBodyListAppPackageVo> = await API.Global.request({
      url: '/admin/model/app/listOwn',
      method: 'get',
      params: { userId },
    });
    return result;
  }
  
  
  
  /**
   * 分组方式获取应用列表
   * @param flagVo - FlagVo - body - flagVo - 必填
   */
   async listGroupBy (flagVo: FlagVo) {
    const result:AxiosResponse<ResBodyListFunTreeVo> = await API.Global.request({
      url: '/admin/model/app/listGroupBy',
      method: 'post',
      data: flagVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取启用的应用列表
   */
   async listEnable () {
    const result:AxiosResponse<ResBodyListAppPackageVo> = await API.Global.request({
      url: '/admin/model/app/listEnable',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 获取应用列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListAppPackageVo> = await API.Global.request({
      url: '/admin/model/app/list',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 修改应用分组名称
   * @param appGroupVo - AppGroupVo - body - appGroupVo - 必填
   */
   async groupUpdate (appGroupVo: AppGroupVo) {
    const result:AxiosResponse<ResBodyAppGroupVo> = await API.Global.request({
      url: '/admin/model/app/groupUpdate',
      method: 'post',
      data: appGroupVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除应用分组
   * @param idVo - IDVo - body - idVo - 必填
   */
   async groupRemove (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/groupRemove',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取应用分组列表
   */
   async groupList () {
    const result:AxiosResponse<ResBodyListAppGroupVo> = await API.Global.request({
      url: '/admin/model/app/groupList',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 新增应用分组
   * @param nameVo - NameVo - body - nameVo - 必填
   */
   async groupAdd (nameVo: NameVo) {
    const result:AxiosResponse<ResBodyAppGroupVo> = await API.Global.request({
      url: '/admin/model/app/groupAdd',
      method: 'post',
      data: nameVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据应用编码获取应用详情
   * @param code - string - query - 应用编码 - 必填
   */
   async getByCode (code: string) {
    const result:AxiosResponse<ResBodyAppPackageVo> = await API.Global.request({
      url: '/admin/model/app/getByCode',
      method: 'get',
      params: { code },
    });
    return result;
  }
  
  
  
  /**
   * 获取应用详情
   * @param id - string - query - 应用id - 必填
   */
   async get (id: string) {
    const result:AxiosResponse<ResBodyAppPackageVo> = await API.Global.request({
      url: '/admin/model/app/get',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 启用应用
   * @param ids - Array<string> - body - ids - 必填
   */
   async enable (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/enable',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 禁用应用
   * @param ids - Array<string> - body - ids - 必填
   */
   async disable (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/app/disable',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 创建应用
   * @param appPackageVo - AppPackageVo - body - appPackageVo - 必填
   */
   async create (appPackageVo: AppPackageVo) {
    const result:AxiosResponse<ResBodyAppPackageVo> = await API.Global.request({
      url: '/admin/model/app/create',
      method: 'post',
      data: appPackageVo,
    });
    return result;
  }
  
  
}
