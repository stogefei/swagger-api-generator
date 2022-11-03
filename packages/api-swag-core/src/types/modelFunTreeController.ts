/* eslint-disable */
import {
  ModelFunRenameVo, ResBodyVoid, ModelFunSortVo, ResBodyListFunTreeVo,
} from '../api/model';

/**
 * model-fun-tree-controller
 */
export interface ModelFunTreeController {

  /**
   * 获取应用模型功能树
   * @param funType - string - query - 功能类型：APP：应用， MODEL：模型，流程：WORKFLOW - 必填
   */
  tree (funType: string): Promise<ResBodyListFunTreeVo>;

  /**
   * 排序
   * @param modelFunSortVo - ModelFunSortVo - body - modelFunSortVo - 必填
   */
  sort (modelFunSortVo: ModelFunSortVo): Promise<ResBodyVoid>;

  /**
   * 重命名
   * @param renameVo - ModelFunRenameVo - body - renameVo - 必填
   */
  rename (renameVo: ModelFunRenameVo): Promise<ResBodyVoid>;
}
