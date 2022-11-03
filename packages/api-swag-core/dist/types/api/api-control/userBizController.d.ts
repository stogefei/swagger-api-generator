import { AxiosResponse } from 'axios';
import { ResBodystring, SearchWorkItemVo, ResBodyPageVOWorkItemVo, UserTransferVo } from '../model';
/**
 * user-biz-controller
 */
export declare class UserBizController {
    /**
     * 工作交接
     * @param userTransferVo - UserTransferVo - body - userTransferVo - 必填
     */
    transfer(userTransferVo: UserTransferVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 查询指定用户代办任务
     * @param searchWorkItemVo - SearchWorkItemVo - body - searchWorkItemVo - 必填
     */
    searchUserWorkItems(searchWorkItemVo: SearchWorkItemVo): Promise<AxiosResponse<ResBodyPageVOWorkItemVo, any>>;
    /**
     * 工作交接结果获取
     * @param taskId - string - query - taskId - 必填
     */
    genResult(taskId: string): Promise<AxiosResponse<ResBodystring, any>>;
}
