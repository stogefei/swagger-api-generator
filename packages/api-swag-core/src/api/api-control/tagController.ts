/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BatchTagVo, ResBodyVoid, ResBodyListTagTreeVo, ResBodyPageVOTagUnitVo, TagUnitIdsVo, TagGroupVo, ResBodyTagGroupVo, TagUnitReqVo, ResBodyListTagGroupVo, TagUpdateVo, ResBodyTagVo,
} from '../model';

/**
 * tag-controller
 */
export class TagController {
  
  /**
   * 修改标签
   * @param tagUpdateVo - TagUpdateVo - body - tagUpdateVo - 必填
   */
   async updateTag (tagUpdateVo: TagUpdateVo) {
    const result:AxiosResponse<ResBodyTagVo> = await API.Global.request({
      url: '/admin/org/tag/updateTag',
      method: 'post',
      data: tagUpdateVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据关键字搜索标签组
   * @param keyword - string - query - 关键字 - 可空
   */
   async searchTagGroup (keyword?: string) {
    const result:AxiosResponse<ResBodyListTagGroupVo> = await API.Global.request({
      url: '/admin/org/tag/searchTagGroup',
      method: 'get',
      params: { keyword },
    });
    return result;
  }
  
  
  
  /**
   * 保存标签用户信息
   * @param tagUnitReqVo - TagUnitReqVo - body - tagUnitReqVo - 必填
   */
   async saveUserToTag (tagUnitReqVo: TagUnitReqVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/tag/saveUserToTag',
      method: 'post',
      data: tagUnitReqVo,
    });
    return result;
  }
  
  
  
  /**
   * 保存标签组
   * @param tagGroupVo - TagGroupVo - body - tagGroupVo - 必填
   */
   async saveGroup (tagGroupVo: TagGroupVo) {
    const result:AxiosResponse<ResBodyTagGroupVo> = await API.Global.request({
      url: '/admin/org/tag/saveGroup',
      method: 'post',
      data: tagGroupVo,
    });
    return result;
  }
  
  
  
  /**
   * 移除标签组织
   * @param tagUnitIdsVo - TagUnitIdsVo - body - tagUnitIdsVo - 必填
   */
   async removeUnits (tagUnitIdsVo: TagUnitIdsVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/tag/removeUnits',
      method: 'post',
      data: tagUnitIdsVo,
    });
    return result;
  }
  
  
  
  /**
   * 删除标签
   * @param ids - Array<string> - body - ids - 必填
   */
   async removeTag (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/tag/removeTag',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 删除标签组
   * @param ids - Array<string> - body - ids - 必填
   */
   async removeGroup (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/tag/removeGroup',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 分页获取标签下的用户列表
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   * @param tagId - string - query - 标签id - 必填
   * @param keyword - string - query - 关键字 - 可空
   */
   async getUserListByPage (pageNum: number, pageSize: number, tagId: string, keyword?: string) {
    const result:AxiosResponse<ResBodyPageVOTagUnitVo> = await API.Global.request({
      url: '/admin/org/tag/getUserListByPage',
      method: 'get',
      params: { keyword, pageNum, pageSize, tagId },
    });
    return result;
  }
  
  
  
  /**
   * 获取标签树
   * @param groupId - string - query - 标签组id - 可空
   */
   async getTagTreeWithoutOrg (groupId?: string) {
    const result:AxiosResponse<ResBodyListTagTreeVo> = await API.Global.request({
      url: '/admin/org/tag/getTagTreeWithoutOrg',
      method: 'get',
      params: { groupId },
    });
    return result;
  }
  
  
  
  /**
   * 批量保存标签
   * @param batchTagList - Array<BatchTagVo> - body - batchTagList - 必填
   */
   async batchSaveTag (batchTagList: Array<BatchTagVo>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/admin/org/tag/batchSaveTag',
      method: 'post',
      data: batchTagList,
    });
    return result;
  }
  
  
}
