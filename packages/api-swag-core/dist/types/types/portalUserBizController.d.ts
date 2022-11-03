import { SignFileVo, ResBodyVoid, IDVo, ResBodyListUserCommonsVo } from '../api/model';
/**
 * portal-user-biz-controller
 */
export interface PortalUserBizController {
    /**
     * 查询当前用户常用审批附件列表
     */
    list(): Promise<ResBodyListUserCommonsVo>;
    /**
     * 删除常用审批附件
     * @param idVo - IDVo - body - idVo - 必填
     */
    delete(idVo: IDVo): Promise<ResBodyVoid>;
    /**
     * 新增常用审批附件
     * @param signFileVo - SignFileVo - body - signFileVo - 必填
     */
    create(signFileVo: SignFileVo): Promise<ResBodyVoid>;
}
