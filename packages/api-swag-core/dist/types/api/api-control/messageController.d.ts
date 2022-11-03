import { AxiosResponse } from 'axios';
import { ResBodyVoid, ResBodyPageVOMessageVo, ResBodyListMessageVo, IDVo } from '../model';
/**
 * message-controller
 */
export declare class MessageController {
    /**
     * 全部读
     */
    readAll(): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 读消息
     * @param idVo - IDVo - body - idVo - 必填
     */
    read(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 获取未读消息，返回前20条
     */
    listUnreadLimit(): Promise<AxiosResponse<ResBodyListMessageVo, any>>;
    /**
     * 分页获取消息
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     * @param read - boolean - query - 是否已读 - 可空
     */
    list(pageNum: number, pageSize: number, read?: boolean): Promise<AxiosResponse<ResBodyPageVOMessageVo, any>>;
    /**
     * 清除全部已读
     */
    cleadAllRead(): Promise<AxiosResponse<ResBodyVoid, any>>;
}
