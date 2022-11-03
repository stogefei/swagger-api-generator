/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ModelFunRenameVo, ResBodyVoid, ModelFunSortVo, ResBodyListFunTreeVo,
} from '../model';

/**
 * model-fun-tree-controller
 */
export class ModelFunTreeController {
  
  /**
   * 获取应用模型功能树
   * @param funType - string - query - 功能类型：APP：应用， MODEL：模型，流程：WORKFLOW - 必填
   */
   async tree (funType: string) {
    const result:AxiosResponse<ResBodyListFunTreeVo> = await API.Global.request({
      url: '/admin/model/fun/tree',
      method: 'get',
      params: { funType },
    });
    return result;
  }
  
  
  
  /**
   * 排序
   * @param modelFunSortVo - ModelFunSortVo - body - modelFunSortVo - 必填
   */
   async sort (modelFunSortVo: ModelFunSortVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/fun/sort',
      method: 'post',
      data: modelFunSortVo,
    });
    return result;
  }
  
  
  
  /**
   * 重命名
   * @param renameVo - ModelFunRenameVo - body - renameVo - 必填
   */
   async rename (renameVo: ModelFunRenameVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/model/fun/rename',
      method: 'post',
      data: renameVo,
    });
    return result;
  }
  
  
}
