/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyDashboardVo, ResBodyBizMenuVo, ResBodyBizSchemaVo, ResBodyAppPackageVo, ResBodyListAppPackageVo, ResBodyListFunTreeVo, ResBodyListBizSchemaVo,
} from '../model';

/**
 * app-controller
 */
export class AppController {
  
  /**
   * 搜索模型
   * @param keyword - string - query - 关键字 - 必填
   */
   async searchSchemas (keyword: string) {
    const result:AxiosResponse<ResBodyListBizSchemaVo> = await API.Global.request({
      url: '/portal/app/searchSchemas',
      method: 'get',
      params: { keyword },
    });
    return result;
  }
  
  
  
  /**
   * 分组方式获取启用的应用列表
   */
   async listGroupBy () {
    const result:AxiosResponse<ResBodyListFunTreeVo> = await API.Global.request({
      url: '/portal/app/listGroupBy',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 获取启用的应用列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListAppPackageVo> = await API.Global.request({
      url: '/portal/app/list',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 获取应用详情
   * @param appCode - string - query - 应用编码 - 必填
   */
   async info (appCode: string) {
    const result:AxiosResponse<ResBodyAppPackageVo> = await API.Global.request({
      url: '/portal/app/info',
      method: 'get',
      params: { appCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取模型详情
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async getSchemaInfo (schemaCode: string) {
    const result:AxiosResponse<ResBodyBizSchemaVo> = await API.Global.request({
      url: '/portal/app/getSchemaInfo',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取自定义菜单详情
   * @param menuCode - string - query - 菜单编码 - 必填
   */
   async getMenuInfo (menuCode: string) {
    const result:AxiosResponse<ResBodyBizMenuVo> = await API.Global.request({
      url: '/portal/app/getMenuInfo',
      method: 'get',
      params: { menuCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取仪表盘详情
   * @param code - string - query - 仪表盘编码 - 必填
   */
   async getDashboardInfo (code: string) {
    const result:AxiosResponse<ResBodyDashboardVo> = await API.Global.request({
      url: '/portal/app/getDashboardInfo',
      method: 'get',
      params: { code },
    });
    return result;
  }
  
  
}
