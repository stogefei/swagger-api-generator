import { AxiosResponse } from 'axios';
import { ResBodyLicenseInfoVo, ResBodyLicenseCheckModel } from '../model';
/**
 * license-controller
 */
export declare class LicenseController {
    /**
     * 获取服务器硬件信息
     * @param osName - string - query - osName - 可空
     */
    serverInfo(osName?: string): Promise<AxiosResponse<ResBodyLicenseCheckModel, any>>;
    /**
     * 获取license信息
     */
    info(): Promise<AxiosResponse<ResBodyLicenseInfoVo, any>>;
}
