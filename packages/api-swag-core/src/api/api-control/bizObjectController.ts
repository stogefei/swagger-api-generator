/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BatchListSheetDataVo, ResBodyMapstringListMapstringobject, BatchUpdateBizObjectVo, ResBodyListBizObjectBo, BizObjectIdsVo, ResBodyListMapstringobject, BizObjectSubmitVo, ResBodyMapstringobject, ResBodyListBizPropertyVo, ListTemplateDataQueryVo, ResBodyListTemplateDataVo, ResBodyVoid, UniqueValidateVo, ResBodyboolean,
} from '../model';

/**
 * biz-object-controller
 */
export class BizObjectController {
  
  /**
   * 修改数据
   * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
   */
   async update (bizObjectSubmitVo: BizObjectSubmitVo) {
    const result:AxiosResponse<ResBodyMapstringobject> = await API.Global.request({
      url: '/portal/bizObject/update',
      method: 'post',
      data: bizObjectSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 短文本唯一性校验
   * @param textUniqueValidateVo - UniqueValidateVo - body - textUniqueValidateVo - 必填
   */
   async uniqueValidate (textUniqueValidateVo: UniqueValidateVo) {
    const result:AxiosResponse<ResBodyboolean> = await API.Global.request({
      url: '/portal/bizObject/uniqueValidate',
      method: 'post',
      data: textUniqueValidateVo,
    });
    return result;
  }
  
  
  
  /**
   * 暂存数据
   * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
   */
   async temporary (bizObjectSubmitVo: BizObjectSubmitVo) {
    const result:AxiosResponse<ResBodyMapstringobject> = await API.Global.request({
      url: '/portal/bizObject/temporary',
      method: 'post',
      data: bizObjectSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除数据
   * @param bizObjectIdsVo - BizObjectIdsVo - body - bizObjectIdsVo - 必填
   */
   async remove (bizObjectIdsVo: BizObjectIdsVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/bizObject/remove',
      method: 'post',
      data: bizObjectIdsVo,
    });
    return result;
  }
  
  
  
  /**
   * 批量查询打印数据
   * @param queryVo - ListTemplateDataQueryVo - body - queryVo - 必填
   */
   async listTemplateData (queryVo: ListTemplateDataQueryVo) {
    const result:AxiosResponse<ResBodyListTemplateDataVo> = await API.Global.request({
      url: '/portal/bizObject/listTemplateData',
      method: 'post',
      data: queryVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询子表数据
   * @param id - string - query - 业务对象id - 必填
   * @param schemaCode - string - query - 模型编码 - 必填
   * @param sheetCode - string - query - 子表编码 - 必填
   */
   async listSheetDatas (id: string, schemaCode: string, sheetCode: string) {
    const result:AxiosResponse<ResBodyListMapstringobject> = await API.Global.request({
      url: '/portal/bizObject/listSheetDatas',
      method: 'get',
      params: { id, schemaCode, sheetCode },
    });
    return result;
  }
  
  
  
  /**
   * 查询数据项列表信息
   * @param schemaCode - string - query - schemaCode - 必填
   */
   async listProperty (schemaCode: string) {
    const result:AxiosResponse<ResBodyListBizPropertyVo> = await API.Global.request({
      url: '/portal/bizObject/listProperty',
      method: 'get',
      params: { schemaCode },
    });
    return result;
  }
  
  
  
  /**
   * 保存数据
   * @param bizObjectSubmitVo - BizObjectSubmitVo - body - bizObjectSubmitVo - 必填
   */
   async insert (bizObjectSubmitVo: BizObjectSubmitVo) {
    const result:AxiosResponse<ResBodyMapstringobject> = await API.Global.request({
      url: '/portal/bizObject/insert',
      method: 'post',
      data: bizObjectSubmitVo,
    });
    return result;
  }
  
  
  
  /**
   * 批量查询数据
   * @param bizObjectIdsVo - BizObjectIdsVo - body - bizObjectIdsVo - 必填
   */
   async getList (bizObjectIdsVo: BizObjectIdsVo) {
    const result:AxiosResponse<ResBodyListMapstringobject> = await API.Global.request({
      url: '/portal/bizObject/getList',
      method: 'post',
      data: bizObjectIdsVo,
    });
    return result;
  }
  
  
  
  /**
   * 批量修改数据
   * @param batchUpdateBizObjectVo - BatchUpdateBizObjectVo - body - batchUpdateBizObjectVo - 必填
   */
   async batchUpdate (batchUpdateBizObjectVo: BatchUpdateBizObjectVo) {
    const result:AxiosResponse<ResBodyListBizObjectBo> = await API.Global.request({
      url: '/portal/bizObject/batchUpdate',
      method: 'post',
      data: batchUpdateBizObjectVo,
    });
    return result;
  }
  
  
  
  /**
   * 批量查询查询子表数据
   * @param batchListSheetDataVo - BatchListSheetDataVo - body - batchListSheetDataVo - 必填
   */
   async batchListSheetDatas (batchListSheetDataVo: BatchListSheetDataVo) {
    const result:AxiosResponse<ResBodyMapstringListMapstringobject> = await API.Global.request({
      url: '/portal/bizObject/batchListSheetDatas',
      method: 'post',
      data: batchListSheetDataVo,
    });
    return result;
  }
  
  
}
