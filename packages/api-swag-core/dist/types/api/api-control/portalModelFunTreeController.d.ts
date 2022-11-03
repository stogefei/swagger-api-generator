import { AxiosResponse } from 'axios';
import { ResBodyListFunTreeVo } from '../model';
/**
 * portal-model-fun-tree-controller
 */
export declare class PortalModelFunTreeController {
    /**
     * 获取应用模型功能树
     * @param funType - string - query - 功能类型：APP：应用， MODEL：模型，流程：WORKFLOW - 可空
     */
    tree(funType?: string): Promise<AxiosResponse<ResBodyListFunTreeVo, any>>;
}
