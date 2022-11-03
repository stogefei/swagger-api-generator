/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBodyOAuth2AccessToken,
} from '../model';

/**
 * auth-controller
 */
export class AuthController {
  
  /**
   * getAccessToken
   * @param parameters - any - query - parameters - 必填
   * @param name - string - query - 无 - 可空
   */
   async token_6 (parameters: any, name?: string) {
    const result:AxiosResponse<ResBodyOAuth2AccessToken> = await API.Global.request({
      url: '/oauth/token',
      method: 'patch',
      params: { name, parameters },
    });
    return result;
  }
  
  
  
  /**
   * getAccessToken
   * @param parameters - any - query - parameters - 必填
   * @param name - string - query - 无 - 可空
   */
   async token_5 (parameters: any, name?: string) {
    const result:AxiosResponse<ResBodyOAuth2AccessToken> = await API.Global.request({
      url: '/oauth/token',
      method: 'options',
      params: { name, parameters },
    });
    return result;
  }
  
  
  
  /**
   * getAccessToken
   * @param parameters - any - query - parameters - 必填
   * @param name - string - query - 无 - 可空
   */
   async token_4 (parameters: any, name?: string) {
    const result:AxiosResponse<ResBodyOAuth2AccessToken> = await API.Global.request({
      url: '/oauth/token',
      method: 'delete',
      params: { name, parameters },
    });
    return result;
  }
  
  
  
  /**
   * getAccessToken
   * @param parameters - any - query - parameters - 必填
   * @param name - string - query - 无 - 可空
   */
   async token_3 (parameters: any, name?: string) {
    const result:AxiosResponse<ResBodyOAuth2AccessToken> = await API.Global.request({
      url: '/oauth/token',
      method: 'put',
      params: { name, parameters },
    });
    return result;
  }
  
  
  
  /**
   * getAccessToken
   * @param parameters - any - query - parameters - 必填
   * @param name - string - query - 无 - 可空
   */
   async token_2 (parameters: any, name?: string) {
    const result:AxiosResponse<ResBodyOAuth2AccessToken> = await API.Global.request({
      url: '/oauth/token',
      method: 'post',
      params: { name, parameters },
    });
    return result;
  }
  
  
  
  /**
   * getAccessToken
   * @param parameters - any - query - parameters - 必填
   * @param name - string - query - 无 - 可空
   */
   async token_1 (parameters: any, name?: string) {
    const result:AxiosResponse<ResBodyOAuth2AccessToken> = await API.Global.request({
      url: '/oauth/token',
      method: 'head',
      params: { name, parameters },
    });
    return result;
  }
  
  
  
  /**
   * getAccessToken
   * @param parameters - any - query - parameters - 必填
   * @param name - string - query - 无 - 可空
   */
   async token (parameters: any, name?: string) {
    const result:AxiosResponse<ResBodyOAuth2AccessToken> = await API.Global.request({
      url: '/oauth/token',
      method: 'get',
      params: { name, parameters },
    });
    return result;
  }
  
  
}
