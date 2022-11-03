import { AxiosResponse } from 'axios';
import { SignFileVo, ResBodyVoid, IDVo, ResBodyListUserCommonsVo } from '../model';
/**
 * portal-user-biz-controller
 */
export declare class PortalUserBizController {
    /**
     * 查询当前用户常用审批附件列表
     */
    list(): Promise<AxiosResponse<ResBodyListUserCommonsVo, any>>;
    /**
     * 删除常用审批附件
     * @param idVo - IDVo - body - idVo - 必填
     */
    delete(idVo: IDVo): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 新增常用审批附件
     * @param signFileVo - SignFileVo - body - signFileVo - 必填
     */
    create(signFileVo: SignFileVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
