import { AxiosResponse } from 'axios';
import { SystemParamsSettingVo, ResBodyVoid } from '../model';
/**
 * sys-params-controller
 */
export declare class SysParamsController {
    /**
     * 添加短信模板
     * @param systemParamsSettingVo - SystemParamsSettingVo - body - systemParamsSettingVo - 必填
     */
    create(systemParamsSettingVo: SystemParamsSettingVo): Promise<AxiosResponse<ResBodyVoid, any>>;
}
