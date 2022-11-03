/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    WorkflowDelegateVo, ResBodyVoid, ResBodyListWorkflowDelegateVo,
} from '../model';

/**
 * workflow-delegate-controller
 */
export class WorkflowDelegateController {
  
  /**
   * 修改委托
   * @param updateDelegateVo - WorkflowDelegateVo - body - updateDelegateVo - 必填
   */
   async update (updateDelegateVo: WorkflowDelegateVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/workflow/delegate/update',
      method: 'post',
      data: updateDelegateVo,
    });
    return result;
  }
  
  
  
  /**
   * 获取当前用户委托列表
   */
   async list () {
    const result:AxiosResponse<ResBodyListWorkflowDelegateVo> = await API.Global.request({
      url: '/portal/workflow/delegate/list',
      method: 'post',
    });
    return result;
  }
  
  
  
  /**
   * 删除委托
   * @param ids - Array<string> - body - ids - 必填
   */
   async delete (ids: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/workflow/delegate/delete',
      method: 'post',
      data: ids,
    });
    return result;
  }
  
  
  
  /**
   * 新建委托
   * @param createDelegateVo - WorkflowDelegateVo - body - createDelegateVo - 必填
   */
   async create (createDelegateVo: WorkflowDelegateVo) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/portal/workflow/delegate/create',
      method: 'post',
      data: createDelegateVo,
    });
    return result;
  }
  
  
}
