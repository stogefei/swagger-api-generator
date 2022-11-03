/* eslint-disable */
import {
  BizServiceMethodVo, ResBodyBizServiceMethodVo, BizServiceMethodCodeVo, ResBodyListBizServiceMethodVo, ResBodyVoid, MethodInvokeParamVo, ResBodyobject,
} from '../api/model';

/**
 * biz-service-method-controller
 */
export interface BizServiceMethodController {

  /**
   * 修改业务方法
   * @param bizServiceMethodVo - BizServiceMethodVo - body - bizServiceMethodVo - 必填
   */
  update (bizServiceMethodVo: BizServiceMethodVo): Promise<ResBodyBizServiceMethodVo>;

  /**
   * 测试连接
   * @param invokeParam - MethodInvokeParamVo - body - invokeParam - 必填
   */
  testConnect (invokeParam: MethodInvokeParamVo): Promise<ResBodyobject>;

  /**
   * 删除业务方法
   * @param bizServiceMethodCodeVo - BizServiceMethodCodeVo - body - bizServiceMethodCodeVo - 必填
   */
  remove (bizServiceMethodCodeVo: BizServiceMethodCodeVo): Promise<ResBodyVoid>;

  /**
   * 获取业务方法列表
   * @param serviceCode - string - query - 业务服务编码 - 必填
   */
  getList (serviceCode: string): Promise<ResBodyListBizServiceMethodVo>;

  /**
   * 获取指定业务方法
   * @param methodCode - string - query - 业务方法编码 - 必填
   * @param serviceCode - string - query - 业务服务编码 - 必填
   */
  get (methodCode: string, serviceCode: string): Promise<ResBodyBizServiceMethodVo>;

  /**
   * 新建业务方法
   * @param bizServiceMethodVo - BizServiceMethodVo - body - bizServiceMethodVo - 必填
   */
  bizServiceMethodVo (bizServiceMethodVo: BizServiceMethodVo): Promise<ResBodyBizServiceMethodVo>;

  /**
   * 批量获取业务方法
   * @param methodCodeVos - Array<BizServiceMethodCodeVo> - body - methodCodeVos - 必填
   */
  batchList (methodCodeVos: Array<BizServiceMethodCodeVo>): Promise<ResBodyListBizServiceMethodVo>;
}
