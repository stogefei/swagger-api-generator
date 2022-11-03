/* eslint-disable */
import {
  ResBodyLicenseInfoVo, ResBodyLicenseCheckModel,
} from '../api/model';

/**
 * license-controller
 */
export interface LicenseController {

  /**
   * 获取服务器硬件信息
   * @param osName - string - query - osName - 可空
   */
  serverInfo (osName?: string): Promise<ResBodyLicenseCheckModel>;

  /**
   * 获取license信息
   */
  info (): Promise<ResBodyLicenseInfoVo>;
}
