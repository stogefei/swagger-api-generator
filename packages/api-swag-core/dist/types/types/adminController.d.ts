import { SaveAdminVo, ResBodyVoid, ResBodyPageVOAdminVo } from '../api/model';
/**
 * admin-controller
 */
export interface AdminController {
    /**
     * 删除系统管理员
     * @param userIds - Array<string> - body - userIds - 必填
     */
    removeSysAdmin(userIds: Array<string>): Promise<ResBodyVoid>;
    /**
     * 分页获取系统管理员
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    getSysAdminsByPage(pageNum: number, pageSize: number, keyword?: string): Promise<ResBodyPageVOAdminVo>;
    /**
     * 新增系统管理员
     * @param saveAdminVo - SaveAdminVo - body - saveAdminVo - 必填
     */
    addSysAdmin(saveAdminVo: SaveAdminVo): Promise<ResBodyVoid>;
}
