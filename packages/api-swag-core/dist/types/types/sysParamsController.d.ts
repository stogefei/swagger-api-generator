import { SystemParamsSettingVo, ResBodyVoid } from '../api/model';
/**
 * sys-params-controller
 */
export interface SysParamsController {
    /**
     * 添加短信模板
     * @param systemParamsSettingVo - SystemParamsSettingVo - body - systemParamsSettingVo - 必填
     */
    create(systemParamsSettingVo: SystemParamsSettingVo): Promise<ResBodyVoid>;
}
