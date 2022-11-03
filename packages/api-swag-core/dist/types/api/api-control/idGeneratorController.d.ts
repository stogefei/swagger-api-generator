import { AxiosResponse } from 'axios';
import { ResBodyListstring } from '../model';
/**
 * id-generator-controller
 */
export declare class IdGeneratorController {
    /**
     * 生成id
     */
    generateIds(): Promise<AxiosResponse<ResBodyListstring, any>>;
}
