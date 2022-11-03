import { AxiosResponse } from 'axios';
import { ResBody, ResBodyVoid, ResBodyDocumentFileVo } from '../model';
/**
 * document-file-controller
 */
export declare class DocumentFileController {
    /**
     * 上传永久文件
     * @param file - string | Blob - formData - 上传文件 - 必填
     * @param dir - string - formData - 文件目录 - 可空
     */
    upload_1(file: string | Blob, dir?: string): Promise<AxiosResponse<ResBodyDocumentFileVo, any>>;
    /**
     * 上传临时文件
     * @param file - string | Blob - formData - 上传文件 - 必填
     * @param expire - string - formData - 过期时间（单位S） - 可空
    */
    uploadTemp(file: string | Blob, expire?: string): Promise<AxiosResponse<ResBodyDocumentFileVo, any>>;
    /**
     * 富文本上传永久文件
     * @param file - string | Blob - formData - 上传文件 - 必填
     * @param dir - string - formData - 文件目录 - 可空
    */
    upload(file: string | Blob, dir?: string): Promise<AxiosResponse<ResBodyDocumentFileVo, any>>;
    /**
     * 查看临时文件
     * @param documentId - string - path - 文档ID - 必填
     */
    documentId_2(documentId: string): Promise<AxiosResponse<void, any>>;
    /**
     * 查看文件
     * @param documentId - string - path - 文档ID - 必填
     */
    documentId_1(documentId: string): Promise<AxiosResponse<void, any>>;
    /**
     * 查看缩略图文件
     * @param documentId - string - path - 文档ID - 必填
     */
    documentId(documentId: string): Promise<AxiosResponse<void, any>>;
    /**
     * 删除临时文件
     * @param documentIds - Array<string> - body - documentIds - 必填
     */
    deleteTemp(documentIds: Array<string>): Promise<AxiosResponse<ResBodyVoid, any>>;
    /**
     * 删除文件
     * @param documentIds - Array<string> - body - documentIds - 必填
     */
    delete(documentIds: Array<string>): Promise<AxiosResponse<ResBody, any>>;
}
