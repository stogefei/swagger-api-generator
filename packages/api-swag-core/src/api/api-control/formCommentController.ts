/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    BizFormCommentVo, ResBodyVoid, ResBodyListBizFormCommentVo, ResBodyPageVOAtUserQueryResultVo,
} from '../model';

/**
 * form-comment-controller
 */
export class FormCommentController {
  
  /**
   * 分页查询表单评论可@用户列表
   * @param atUserQueryVo - BizFormCommentVo - body - atUserQueryVo - 必填
   */
   async queryAtUser (atUserQueryVo: BizFormCommentVo) {
    const result:AxiosResponse<ResBodyPageVOAtUserQueryResultVo> = await API.Global.request({
      url: '/portal/form/comment/queryAtUser',
      method: 'get',
      data: atUserQueryVo,
    });
    return result;
  }
  
  
  
  /**
   * 根据表单id查询所属评论列表
   * @param bizObjectId - string - query - 模型编码 - 必填
   */
   async findByBizObjectId (bizObjectId: string) {
    const result:AxiosResponse<ResBodyListBizFormCommentVo> = await API.Global.request({
      url: '/portal/form/comment/findByBizObjectId',
      method: 'get',
      params: { bizObjectId },
    });
    return result;
  }
  
  
  
  /**
   * 评论删除
   * @param id - string - query - id - 必填
   */
   async delete (id: string) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/form/comment/delete',
      method: 'get',
      params: { id },
    });
    return result;
  }
  
  
  
  /**
   * 添加评论
   * @param bizFormCommentVo - BizFormCommentVo - body - bizFormCommentVo - 必填
   */
   async create (bizFormCommentVo: BizFormCommentVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/form/comment/create',
      method: 'post',
      data: bizFormCommentVo,
    });
    return result;
  }
  
  
}
