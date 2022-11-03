/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizPropertyFormulaVo, ResBodyVoid, ResBodyListBizPropertyFormulaVo,
} from '../model';

/**
 * biz-property-formula-controller
 */
export class BizPropertyFormulaController {
  
  /**
   * 编辑计算规则
   * @param bizPropertyFormulaVo - BizPropertyFormulaVo - body - bizPropertyFormulaVo - 必填
   */
   async update (bizPropertyFormulaVo: BizPropertyFormulaVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/formula/update',
      method: 'post',
      data: bizPropertyFormulaVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除计算规则
   * @param ids - Array<string> - body - ids - 必填
   */
   async remove (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/formula/remove',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 获取计算规则列表
   * @param schemaCode - string - query - 模型编码 - 必填
   */
   async list (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizPropertyFormulaVo> = await API.Global.request({
      url: '/admin/model/schema/formula/list',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 新建计算规则
   * @param bizPropertyFormulaVo - BizPropertyFormulaVo - body - bizPropertyFormulaVo - 必填
   */
   async create (bizPropertyFormulaVo: BizPropertyFormulaVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/schema/formula/create',
      method: 'post',
      data: bizPropertyFormulaVo,
    });
    return result;
  }
  
  
}
