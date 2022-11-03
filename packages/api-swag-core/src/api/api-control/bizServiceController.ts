/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizServiceVo, ResBodyBizServiceVo, ResBodyListBizServiceVo, ResBodyListBizServiceCategoryVo, ResBodyVoid,
} from '../model';

/**
 * biz-service-controller
 */
export class BizServiceController {
  
  /**
   * 修改业务服务
   * @param bizServiceVo - BizServiceVo - body - bizServiceVo - 必填
   */
   async update (bizServiceVo: BizServiceVo) {
    const result:AxiosResponse<ResBodyBizServiceVo> = await API.Global.request({
      url: '/admin/bizbus/service/update',
      method: 'post',
      data: bizServiceVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除业务服务
   * @param codes - Array<string> - body - codes - 必填
   */
   async remove (codes: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/bizbus/service/remove',
      method: 'post',
      data: codes,
    });
    return result;
  }
  
  
  
  /**
   * 获取所有业务服务树
   */
   async listServiceTree () {
    const result:AxiosResponse<ResBodyListBizServiceCategoryVo> = await API.Global.request({
      url: '/admin/bizbus/service/listServiceTree',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 获取所有业务服务
   */
   async listAll () {
    const result:AxiosResponse<ResBodyListBizServiceVo> = await API.Global.request({
      url: '/admin/bizbus/service/listAll',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 根据关键字获取业务服务列表
   * @param categroyId - string - query - 分类id - 必填
   * @param keyword - string - query - 关键字 - 可空
   */
   async getList (categroyId: string, keyword?: string) {
    const result:AxiosResponse<ResBodyListBizServiceVo> = await API.Global.request({
      url: '/admin/bizbus/service/getList',
      method: 'get',
      params: { categroyId, keyword },
    });
    return result;
  }
  
  
  
  /**
   * 新建业务服务
   * @param bizServiceVo - BizServiceVo - body - bizServiceVo - 必填
   */
   async create (bizServiceVo: BizServiceVo) {
    const result:AxiosResponse<ResBodyBizServiceVo> = await API.Global.request({
      url: '/admin/bizbus/service/create',
      method: 'post',
      data: bizServiceVo,
    });
    return result;
  }
  
  
}
