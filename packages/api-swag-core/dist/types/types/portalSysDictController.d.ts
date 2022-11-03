import { ResBodyListSystemDictConfigVo } from '../api/model';
/**
 * portal-sys-dict-controller
 */
export interface PortalSysDictController {
    /**
     * 查询字典数据项列表
     * @param dictId - string - query - 字典id - 必填
     * @param status - boolean - query - 状态 - 可空
     */
    listByDictId(dictId: string, status?: boolean): Promise<ResBodyListSystemDictConfigVo>;
}
