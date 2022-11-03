import { BatchTagVo, ResBodyVoid, ResBodyListTagTreeVo, ResBodyPageVOTagUnitVo, TagUnitIdsVo, TagGroupVo, ResBodyTagGroupVo, TagUnitReqVo, ResBodyListTagGroupVo, TagUpdateVo, ResBodyTagVo } from '../api/model';
/**
 * tag-controller
 */
export interface TagController {
    /**
     * 修改标签
     * @param tagUpdateVo - TagUpdateVo - body - tagUpdateVo - 必填
     */
    updateTag(tagUpdateVo: TagUpdateVo): Promise<ResBodyTagVo>;
    /**
     * 根据关键字搜索标签组
     * @param keyword - string - query - 关键字 - 可空
     */
    searchTagGroup(keyword?: string): Promise<ResBodyListTagGroupVo>;
    /**
     * 保存标签用户信息
     * @param tagUnitReqVo - TagUnitReqVo - body - tagUnitReqVo - 必填
     */
    saveUserToTag(tagUnitReqVo: TagUnitReqVo): Promise<ResBodyVoid>;
    /**
     * 保存标签组
     * @param tagGroupVo - TagGroupVo - body - tagGroupVo - 必填
     */
    saveGroup(tagGroupVo: TagGroupVo): Promise<ResBodyTagGroupVo>;
    /**
     * 移除标签组织
     * @param tagUnitIdsVo - TagUnitIdsVo - body - tagUnitIdsVo - 必填
     */
    removeUnits(tagUnitIdsVo: TagUnitIdsVo): Promise<ResBodyVoid>;
    /**
     * 删除标签
     * @param ids - Array<string> - body - ids - 必填
     */
    removeTag(ids: Array<string>): Promise<ResBodyVoid>;
    /**
     * 删除标签组
     * @param ids - Array<string> - body - ids - 必填
     */
    removeGroup(ids: Array<string>): Promise<ResBodyVoid>;
    /**
     * 分页获取标签下的用户列表
     * @param pageNum - number - query - 开始页数 - 必填
     * @param pageSize - number - query - 每页显示数量 - 必填
     * @param tagId - string - query - 标签id - 必填
     * @param keyword - string - query - 关键字 - 可空
     */
    getUserListByPage(pageNum: number, pageSize: number, tagId: string, keyword?: string): Promise<ResBodyPageVOTagUnitVo>;
    /**
     * 获取标签树
     * @param groupId - string - query - 标签组id - 可空
     */
    getTagTreeWithoutOrg(groupId?: string): Promise<ResBodyListTagTreeVo>;
    /**
     * 批量保存标签
     * @param batchTagList - Array<BatchTagVo> - body - batchTagList - 必填
     */
    batchSaveTag(batchTagList: Array<BatchTagVo>): Promise<ResBodyVoid>;
}
