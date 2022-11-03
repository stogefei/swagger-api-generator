import { AxiosResponse } from 'axios';
import { OlapQueryVo, ResBodyobject } from '../model';
/**
 * olap-controller
 */
export declare class OlapController {
    /**
     * 查询数据
     * @param olapQueryVo - OlapQueryVo - body - olapQueryVo - 必填
     */
    query(olapQueryVo: OlapQueryVo): Promise<AxiosResponse<ResBodyobject, any>>;
}
