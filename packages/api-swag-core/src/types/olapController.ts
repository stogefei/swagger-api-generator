/* eslint-disable */
import {
  OlapQueryVo, ResBodyobject,
} from '../api/model';

/**
 * olap-controller
 */
export interface OlapController {

  /**
   * 查询数据
   * @param olapQueryVo - OlapQueryVo - body - olapQueryVo - 必填
   */
  query (olapQueryVo: OlapQueryVo): Promise<ResBodyobject>;
}
