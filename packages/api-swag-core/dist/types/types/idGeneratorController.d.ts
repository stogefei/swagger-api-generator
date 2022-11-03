import { ResBodyListstring } from '../api/model';
/**
 * id-generator-controller
 */
export interface IdGeneratorController {
    /**
     * 生成id
     */
    generateIds(): Promise<ResBodyListstring>;
}
