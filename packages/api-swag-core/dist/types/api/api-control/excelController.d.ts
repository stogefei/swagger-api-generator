import { AxiosResponse } from 'axios';
import { ImportVo, ExportVo, ResBodystring, ResBodyExportProgressVo, ResBodyImportProgressVo } from '../model';
/**
 * excel-controller
 */
export declare class ExcelController {
    /**
     * excel导入
     * @param importVo - ImportVo - body - importVo - 必填
     */
    import(importVo: ImportVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 查询导入进度
     * @param taskId - string - query - 导入任务id - 必填
     */
    getImportProgress(taskId: string): Promise<AxiosResponse<ResBodyImportProgressVo, any>>;
    /**
     * 查询导出进度
     * @param taskId - string - query - 导出任务id - 必填
     */
    getExportProgress(taskId: string): Promise<AxiosResponse<ResBodyExportProgressVo, any>>;
    /**
     * excel导出
     * @param exportVo - ExportVo - body - exportVo - 必填
     */
    excelExport(exportVo: ExportVo): Promise<AxiosResponse<ResBodystring, any>>;
    /**
     * 下载excel导入模版
     * @param importVo - ImportVo - body - importVo - 可空
     */
    downloadTemplate(importVo?: ImportVo): Promise<AxiosResponse<void, any>>;
}
