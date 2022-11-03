/* eslint-disable */
import {
  SystemDictVo, ResBodyVoid, ResBodyListSystemDictConfigVo, ResBodySystemDictVo, SystemDictQueryVo, ResBodyPageVOSystemDictVo,
} from '../api/model';

/**
 * sys-dict-controller
 */
export interface SysDictController {

  /**
   * 数据字典修改
   * @param systemDictVo - SystemDictVo - body - systemDictVo - 必填
   */
  update (systemDictVo: SystemDictVo): Promise<ResBodyVoid>;

  /**
   * 分页查询数据字典列表
   * @param systemDictQueryVo - SystemDictQueryVo - body - systemDictQueryVo - 必填
   */
  page (systemDictQueryVo: SystemDictQueryVo): Promise<ResBodyPageVOSystemDictVo>;

  /**
   * 查询字典数据项列表
   * @param dictId - string - query - 字典id - 必填
   * @param status - boolean - query - 状态 - 可空
   */
  listByDictId (dictId: string, status?: boolean): Promise<ResBodyListSystemDictConfigVo>;

  /**
   * 查询字典详情
   * @param id - string - query - 字典id - 必填
   */
  get (id: string): Promise<ResBodySystemDictVo>;

  /**
   * 修改字典状态
   * @param id - string - query - id - 必填
   * @param status - boolean - query - 状态 - 必填
   */
  changeStatus (id: string, status: boolean): Promise<ResBodyVoid>;

  /**
   * 新增字典
   * @param systemDictVo - SystemDictVo - body - systemDictVo - 必填
   */
  add (systemDictVo: SystemDictVo): Promise<ResBodyVoid>;
}
