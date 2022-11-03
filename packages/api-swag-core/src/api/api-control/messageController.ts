/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyVoid, ResBodyPageVOMessageVo, ResBodyListMessageVo, IDVo,
} from '../model';

/**
 * message-controller
 */
export class MessageController {
  
  /**
   * 全部读
   */
   async readAll () {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/message/readAll',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 读消息
   * @param idVo - IDVo - body - idVo - 必填
   */
   async read (idVo: IDVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/message/read',
      method: 'post',
      data: idVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取未读消息，返回前20条
   */
   async listUnreadLimit () {
    const result:AxiosResponse<ResBodyListMessageVo> = await API.Global.request({
      url: '/portal/message/listUnreadLimit',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 分页获取消息
   * @param pageNum - number - query - 开始页数 - 必填
   * @param pageSize - number - query - 每页显示数量 - 必填
   * @param read - boolean - query - 是否已读 - 可空
   */
   async list (pageNum: number, pageSize: number, read?: boolean) {
    const result:AxiosResponse<ResBodyPageVOMessageVo> = await API.Global.request({
      url: '/portal/message/list',
      method: 'get',
      params: { pageNum, pageSize, read },
    });
    return result;
  }
  
  
  
  /**
   * 清除全部已读
   */
   async cleadAllRead () {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/message/cleadAllRead',
      method: 'post',
    });
    return result;
  }
  
  
}
