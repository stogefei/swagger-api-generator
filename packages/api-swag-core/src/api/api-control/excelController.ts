/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ImportVo, ExportVo, ResBodystring, ResBodyExportProgressVo, ResBodyImportProgressVo,
} from '../model';

/**
 * excel-controller
 */
export class ExcelController {
  
  /**
   * excel导入
   * @param importVo - ImportVo - body - importVo - 必填
   */
   async import (importVo: ImportVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/excel/import',
      method: 'post',
      data: importVo,
    });
    return result;
  }
  
  
  
  /**
   * 查询导入进度
   * @param taskId - string - query - 导入任务id - 必填
   */
   async getImportProgress (taskId: string) {
    const result:AxiosResponse<ResBodyImportProgressVo> = await API.Global.request({
      url: '/excel/getImportProgress',
      method: 'get',
      params: { taskId },
    });
    return result;
  }
  
  
  
  /**
   * 查询导出进度
   * @param taskId - string - query - 导出任务id - 必填
   */
   async getExportProgress (taskId: string) {
    const result:AxiosResponse<ResBodyExportProgressVo> = await API.Global.request({
      url: '/excel/getExportProgress',
      method: 'get',
      params: { taskId },
    });
    return result;
  }
  
  
  
  /**
   * excel导出
   * @param exportVo - ExportVo - body - exportVo - 必填
   */
   async excelExport (exportVo: ExportVo) {
    const result:AxiosResponse<ResBodystring> = await API.Global.request({
      url: '/excel/excelExport',
      method: 'post',
      data: exportVo,
    });
    return result;
  }
  
  
  
  /**
   * 下载excel导入模版
   * @param importVo - ImportVo - body - importVo - 可空
   */
   async downloadTemplate (importVo?: ImportVo) {
    const result:AxiosResponse<void> = await API.Global.request({
      url: '/excel/downloadTemplate',
      method: 'post',
      data: importVo,
    });
    return result;
  }
  
  
}
