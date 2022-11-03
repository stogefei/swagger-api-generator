import { OlapQueryVo, ResBodyobject } from '../api/model';
/**
 * olap-runtime-controller
 */
export interface OlapRuntimeController {
    /**
     * 查询数据
     * @param olapQueryVo - OlapQueryVo - body - olapQueryVo - 必填
     */
    query(olapQueryVo: OlapQueryVo): Promise<ResBodyobject>;
}
