import { AxiosResponse } from 'axios';
import { ResBodyListSystemDictConfigVo } from '../model';
/**
 * portal-sys-dict-controller
 */
export declare class PortalSysDictController {
    /**
     * 查询字典数据项列表
     * @param dictId - string - query - 字典id - 必填
     * @param status - boolean - query - 状态 - 可空
     */
    listByDictId(dictId: string, status?: boolean): Promise<AxiosResponse<ResBodyListSystemDictConfigVo, any>>;
}
