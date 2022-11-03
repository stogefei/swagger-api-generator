/* eslint-disable */
import {
  BizFormCommentVo, ResBodyVoid, ResBodyListBizFormCommentVo, ResBodyPageVOAtUserQueryResultVo,
} from '../api/model';

/**
 * form-comment-controller
 */
export interface FormCommentController {

  /**
   * 分页查询表单评论可@用户列表
   * @param atUserQueryVo - BizFormCommentVo - body - atUserQueryVo - 必填
   */
  queryAtUser (atUserQueryVo: BizFormCommentVo): Promise<ResBodyPageVOAtUserQueryResultVo>;

  /**
   * 根据表单id查询所属评论列表
   * @param bizObjectId - string - query - 模型编码 - 必填
   */
  findByBizObjectId (bizObjectId: string): Promise<ResBodyListBizFormCommentVo>;

  /**
   * 评论删除
   * @param id - string - query - id - 必填
   */
  delete (id: string): Promise<ResBodyVoid>;

  /**
   * 添加评论
   * @param bizFormCommentVo - BizFormCommentVo - body - bizFormCommentVo - 必填
   */
  create (bizFormCommentVo: BizFormCommentVo): Promise<ResBodyVoid>;
}
