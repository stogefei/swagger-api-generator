/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizFormVo, ResBodyBizFormVo, ResBodyListBizFormVo, FormCodesVo, ResBodyVoid,
} from '../model';

/**
 * form-design-controller
 */
export class FormDesignController {
  
  /**
   * 删除表单
   * @param formCodesVo - FormCodesVo - body - formCodesVo - 必填
   */
   async remove (formCodesVo: FormCodesVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/form/remove',
      method: 'post',
      data: formCodesVo,
    });
    return result;
  }
  
  
  
  /**
   * 发布表单
   * @param bizFormVo - BizFormVo - body - bizFormVo - 必填
   */
   async publish (bizFormVo: BizFormVo) {
    const result:AxiosResponse<ResBodyBizFormVo> = await API.Global.request({
      url: '/admin/form/publish',
      method: 'post',
      data: bizFormVo,
    });
    return result;
  }
  
  
  
  /**
   * 修改表单
   * @param bizFormVo - BizFormVo - body - bizFormVo - 必填
   */
   async modify (bizFormVo: BizFormVo) {
    const result:AxiosResponse<ResBodyBizFormVo> = await API.Global.request({
      url: '/admin/form/modify',
      method: 'post',
      data: bizFormVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取表单列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async list (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizFormVo> = await API.Global.request({
      url: '/admin/form/list',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取表单详情
   * @param code - string - query - 表单编码 - 必填
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async getInfo (code: string, schemaCode: string) {
    const result:AxiosResponse<ResBodyBizFormVo> = await API.Global.request({
      url: '/admin/form/getInfo',
      method: 'get',
      params: { code, schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 获取表单
   * @param code - string - query - 表单编码 - 必填
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async get (code: string, schemaCode: string) {
    const result:AxiosResponse<ResBodyBizFormVo> = await API.Global.request({
      url: '/admin/form/get',
      method: 'get',
      params: { code, schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 新建表单
   * @param bizFormVo - BizFormVo - body - bizFormVo - 必填
   */
   async create (bizFormVo: BizFormVo) {
    const result:AxiosResponse<ResBodyBizFormVo> = await API.Global.request({
      url: '/admin/form/create',
      method: 'post',
      data: bizFormVo,
    });
    return result;
  }
  
  
}
