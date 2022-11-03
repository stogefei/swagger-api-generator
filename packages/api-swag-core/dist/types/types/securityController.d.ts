import { ResBodyGenKeyResultVo } from '../api/model';
/**
 * security-controller
 */
export interface SecurityController {
    /**
     * 获取加密公钥
     */
    genRsaKey(): Promise<ResBodyGenKeyResultVo>;
}
