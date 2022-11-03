import { ResBodyOAuth2AccessToken } from '../api/model';
/**
 * auth-controller
 */
export interface AuthController {
    /**
     * getAccessToken
     * @param parameters - any - query - parameters - 必填
     * @param name - string - query - 无 - 可空
     */
    token_6(parameters: any, name?: string): Promise<ResBodyOAuth2AccessToken>;
    /**
     * getAccessToken
     * @param parameters - any - query - parameters - 必填
     * @param name - string - query - 无 - 可空
     */
    token_5(parameters: any, name?: string): Promise<ResBodyOAuth2AccessToken>;
    /**
     * getAccessToken
     * @param parameters - any - query - parameters - 必填
     * @param name - string - query - 无 - 可空
     */
    token_4(parameters: any, name?: string): Promise<ResBodyOAuth2AccessToken>;
    /**
     * getAccessToken
     * @param parameters - any - query - parameters - 必填
     * @param name - string - query - 无 - 可空
     */
    token_3(parameters: any, name?: string): Promise<ResBodyOAuth2AccessToken>;
    /**
     * getAccessToken
     * @param parameters - any - query - parameters - 必填
     * @param name - string - query - 无 - 可空
     */
    token_2(parameters: any, name?: string): Promise<ResBodyOAuth2AccessToken>;
    /**
     * getAccessToken
     * @param parameters - any - query - parameters - 必填
     * @param name - string - query - 无 - 可空
     */
    token_1(parameters: any, name?: string): Promise<ResBodyOAuth2AccessToken>;
    /**
     * getAccessToken
     * @param parameters - any - query - parameters - 必填
     * @param name - string - query - 无 - 可空
     */
    token(parameters: any, name?: string): Promise<ResBodyOAuth2AccessToken>;
}
