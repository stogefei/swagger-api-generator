import { AxiosResponse } from 'axios';
import { ResBodyGenKeyResultVo } from '../model';
/**
 * security-controller
 */
export declare class SecurityController {
    /**
     * 获取加密公钥
     */
    genRsaKey(): Promise<AxiosResponse<ResBodyGenKeyResultVo, any>>;
}
