import { AxiosResponse } from 'axios';
import { BizFormCommentVo, ResBodyVoid, ResBodyListBizFormCommentVo, ResBodyPageVOAtUserQueryResultVo } from '../model';
/**
 * form-comment-controller
 */
export declare class FormCommentController {
    /**
     * 分页查询表单评论可@用户列表
     * @param atUserQueryVo - BizFormCommentVo - body - atUserQueryVo - 必填
     */
    queryAtUser(atUserQueryVo: BizFormCommentVo): Promise<AxiosResponse<ResBodyPageVOAtUserQueryResultVo, any>>;
    /**
     * 根据表单id查询所属评论列表
     * @param bizObjectId - string - query - 模型编码 - 必填
     */
    findByBizObjectId(bizObjectId: string): Promise<AxiosResponse<ResBodyListBizFormCommentVo, any>>;
    /**
     * 评论删除
     * @param id - string - query - id - 必填
     */
    delete(id: string): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 添加评论
     * @param bizFormCommentVo - BizFormCommentVo - body - bizFormCommentVo - 必填
     */
    create(bizFormCommentVo: BizFormCommentVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
