/* eslint-disable */
import { AxiosResponse } from 'axios';
import API from '../../index'
import {
    ResBody, ResBodyVoid, ResBodyDocumentFileVo,
} from '../model';

/**
 * document-file-controller
 */
export class DocumentFileController {
  
  /**
   * 上传永久文件
   * @param file - string | Blob - formData - 上传文件 - 必填
   * @param dir - string - formData - 文件目录 - 可空
   */
   async upload_1 (file: string | Blob, dir?: string) {
    const result:AxiosResponse<ResBodyDocumentFileVo> = await API.Global.request({
      url: '/document/file/upload',
      method: 'post',
      data: dir,
    });
    return result;
  }
  
  
  
  /**
   * 上传临时文件
   * @param file - string | Blob - formData - 上传文件 - 必填
   * @param expire - string - formData - 过期时间（单位S） - 可空
  */
   async uploadTemp (file: string | Blob, expire?: string) {
    const formData: FormData = new FormData();
    Object.entries({ file }).forEach(([k, v]) => {
        formData.append(k, v);
    });
    const result:AxiosResponse<ResBodyDocumentFileVo> = await API.Global.request({
      url: '/document/file/uploadTemp',
      method: 'post',
      data: formData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return result;
  }
  
  
  
  /**
   * 富文本上传永久文件
   * @param file - string | Blob - formData - 上传文件 - 必填
   * @param dir - string - formData - 文件目录 - 可空
  */
   async upload (file: string | Blob, dir?: string) {
    const formData: FormData = new FormData();
    Object.entries({ file }).forEach(([k, v]) => {
        formData.append(k, v);
    });
    const result:AxiosResponse<ResBodyDocumentFileVo> = await API.Global.request({
      url: '/document/file/open/upload',
      method: 'post',
      data: formData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return result;
  }
  
  
  
  /**
   * 查看临时文件
   * @param documentId - string - path - 文档ID - 必填
   */
   async documentId_2 (documentId: string) {
    const result:AxiosResponse<void> = await API.Global.request({
      url: '/document/file/viewtmp/' + documentId + '',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 查看文件
   * @param documentId - string - path - 文档ID - 必填
   */
   async documentId_1 (documentId: string) {
    const result:AxiosResponse<void> = await API.Global.request({
      url: '/document/file/view/' + documentId + '',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 查看缩略图文件
   * @param documentId - string - path - 文档ID - 必填
   */
   async documentId (documentId: string) {
    const result:AxiosResponse<void> = await API.Global.request({
      url: '/document/file/thumb/' + documentId + '',
      method: 'get',
    });
    return result;
  }
  
  
  
  /**
   * 删除临时文件
   * @param documentIds - Array<string> - body - documentIds - 必填
   */
   async deleteTemp (documentIds: Array<string>) {
    const result:AxiosResponse<ResBodyVoid> = await API.Global.request({
      url: '/document/file/deleteTemp',
      method: 'post',
      data: documentIds,
    });
    return result;
  }
  
  
  
  /**
   * 删除文件
   * @param documentIds - Array<string> - body - documentIds - 必填
   */
   async delete (documentIds: Array<string>) {
    const result:AxiosResponse<ResBody> = await API.Global.request({
      url: '/document/file/delete',
      method: 'post',
      data: documentIds,
    });
    return result;
  }
  
  
}
