/* eslint-disable */
import {
  ResBodyVoid, ResBodyPageVOMessageVo, ResBodyListMessageVo, IDVo,
} from '../api/model';

/**
 * message-controller
 */
export interface MessageController {

  /**
   * 全部读
   */
  readAll (): Promise<ResBodyVoid>;

  /**
   * 读消息
   * @param idVo - IDVo - body - idVo - 必填
   */
  read (idVo: IDVo): Promise<ResBodyVoid>;

  /**
   * 获取未读消息，返回前20条
   */
  listUnreadLimit (): Promise<ResBodyListMessageVo>;

  /**
   * 分页获取消息
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   * @param read - boolean - query - 是否已读 - 可空
   */
  list (pageNum: number, pageSize: number, read?: boolean): Promise<ResBodyPageVOMessageVo>;

  /**
   * 清除全部已读
   */
  cleadAllRead (): Promise<ResBodyVoid>;
}
