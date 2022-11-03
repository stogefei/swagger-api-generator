/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

import BizDataSourceController from './bizDataSourceController';
import BizServiceCategroyController from './bizServiceCategroyController';
import BizServiceController from './bizServiceController';
import BizServiceMethodController from './bizServiceMethodController';
import FormDesignController from './formDesignController';
import FormTemplateController from './formTemplateController';
import LicenseController from './licenseController';
import AppPackageController from './appPackageController';
import AppPermissionController from './appPermissionController';
import BizRuleController from './bizRuleController';
import ModelFunTreeController from './modelFunTreeController';
import BizMenuController from './bizMenuController';
import BizSchemaController from './bizSchemaController';
import BizSchemaEventController from './bizSchemaEventController';
import BizPropertyFormulaController from './bizPropertyFormulaController';
import BizPropertyController from './bizPropertyController';
import BizViewController from './bizViewController';
import WorkflowDesignController from './workflowDesignController';
import OrganizationController from './organizationController';
import DepartmentController from './departmentController';
import TagController from './tagController';
import AdminUnitTreeController from './adminUnitTreeController';
import UserController from './userController';
import UserBizController from './userBizController';
import AdminController from './adminController';
import AdminRoleController from './adminRoleController';
import AdvancedDataSourceController from './advancedDataSourceController';
import ChartController from './chartController';
import DashboardController from './dashboardController';
import ReportDataSourceController from './reportDataSourceController';
import OlapController from './olapController';
import SchedulerController from './schedulerController';
import SysDictController from './sysDictController';
import SysLogController from './sysLogController';
import SysParamsController from './sysParamsController';
import SecurityClientController from './securityClientController';
import LoginController from './loginController';
import DocumentFileController from './documentFileController';
import ExcelController from './excelController';
import AuthController from './authController';
import OrganizationOpenApi from './organizationOpenApi';
import FormRuntimeOpenApi from './formRuntimeOpenApi';
import InstanceRuntimeOpenApi from './instanceRuntimeOpenApi';
import WorkflowRuntimeOpenApi from './workflowRuntimeOpenApi';
import WorkItemRuntimeOpenApi from './workItemRuntimeOpenApi';
import AppController from './appController';
import BizObjectController from './bizObjectController';
import FormCommentController from './formCommentController';
import PortalFormTemplateController from './portalFormTemplateController';
import JsSignController from './jsSignController';
import MessageController from './messageController';
import PortalModelFunTreeController from './portalModelFunTreeController';
import OlapRuntimeController from './olapRuntimeController';
import ExternalController from './externalController';
import FormRuntimeController from './formRuntimeController';
import InstanceRuntimeController from './instanceRuntimeController';
import WorkflowRuntimeController from './workflowRuntimeController';
import WorkItemRuntimeController from './workItemRuntimeController';
import BizServerInvokeController from './bizServerInvokeController';
import PortalSysDictController from './portalSysDictController';
import PortalUnitController from './portalUnitController';
import PortalUnitTreeController from './portalUnitTreeController';
import PortalUserBizController from './portalUserBizController';
import AppViewController from './appViewController';
import WorkbenchController from './workbenchController';
import QuickLinkController from './quickLinkController';
import WorkflowDelegateController from './workflowDelegateController';
import ShortLinkController from './shortLinkController';
import IdGeneratorController from './idGeneratorController';
import SecurityController from './securityController';
import NotifyController from './notifyController';

Mock.setup({
  timeout: '350-1000',
});

Mock.mock(/\/admin\/bizbus\/datasource\/update/, 'post', BizDataSourceController.update);
Mock.mock(/\/admin\/bizbus\/datasource\/remove/, 'post', BizDataSourceController.remove);
Mock.mock(/\/admin\/bizbus\/datasource\/getList/, 'get', BizDataSourceController.getList);
Mock.mock(/\/admin\/bizbus\/datasource\/create/, 'post', BizDataSourceController.create);

Mock.mock(/\/admin\/bizbus\/service\/categroy\/update/, 'post', BizServiceCategroyController.update);
Mock.mock(/\/admin\/bizbus\/service\/categroy\/remove/, 'post', BizServiceCategroyController.remove);
Mock.mock(/\/admin\/bizbus\/service\/categroy\/getList/, 'get', BizServiceCategroyController.getList);
Mock.mock(/\/admin\/bizbus\/service\/categroy\/create/, 'post', BizServiceCategroyController.create);

Mock.mock(/\/admin\/bizbus\/service\/update/, 'post', BizServiceController.update);
Mock.mock(/\/admin\/bizbus\/service\/remove/, 'post', BizServiceController.remove);
Mock.mock(/\/admin\/bizbus\/service\/listServiceTree/, 'get', BizServiceController.listServiceTree);
Mock.mock(/\/admin\/bizbus\/service\/listAll/, 'get', BizServiceController.listAll);
Mock.mock(/\/admin\/bizbus\/service\/getList/, 'get', BizServiceController.getList);
Mock.mock(/\/admin\/bizbus\/service\/create/, 'post', BizServiceController.create);

Mock.mock(/\/admin\/bizbus\/service\/method\/update/, 'post', BizServiceMethodController.update);
Mock.mock(/\/admin\/bizbus\/service\/method\/testConnect/, 'post', BizServiceMethodController.testConnect);
Mock.mock(/\/admin\/bizbus\/service\/method\/remove/, 'post', BizServiceMethodController.remove);
Mock.mock(/\/admin\/bizbus\/service\/method\/getList/, 'get', BizServiceMethodController.getList);
Mock.mock(/\/admin\/bizbus\/service\/method\/get/, 'get', BizServiceMethodController.get);
Mock.mock(/\/admin\/bizbus\/service\/method\/BizServiceMethodVo/, 'post', BizServiceMethodController.bizServiceMethodVo);
Mock.mock(/\/admin\/bizbus\/service\/method\/batchList/, 'post', BizServiceMethodController.batchList);

Mock.mock(/\/admin\/form\/remove/, 'post', FormDesignController.remove);
Mock.mock(/\/admin\/form\/publish/, 'post', FormDesignController.publish);
Mock.mock(/\/admin\/form\/modify/, 'post', FormDesignController.modify);
Mock.mock(/\/admin\/form\/list/, 'get', FormDesignController.list);
Mock.mock(/\/admin\/form\/getInfo/, 'get', FormDesignController.getInfo);
Mock.mock(/\/admin\/form\/get/, 'get', FormDesignController.get);
Mock.mock(/\/admin\/form\/create/, 'post', FormDesignController.create);

Mock.mock(/\/admin\/form\/template\/update/, 'post', FormTemplateController.update);
Mock.mock(/\/admin\/form\/template\/getByCode/, 'get', FormTemplateController.getByCode);
Mock.mock(/\/admin\/form\/template\/findBySchemaCode/, 'get', FormTemplateController.findBySchemaCode);
Mock.mock(/\/admin\/form\/template\/delete/, 'get', FormTemplateController.delete);
Mock.mock(/\/admin\/form\/template\/create/, 'post', FormTemplateController.create);

Mock.mock(/\/admin\/license\/serverInfo/, 'get', LicenseController.serverInfo);
Mock.mock(/\/admin\/license\/info/, 'get', LicenseController.info);

Mock.mock(/\/admin\/model\/app\/visiblePerGroup/, 'post', AppPackageController.visiblePerGroup);
Mock.mock(/\/admin\/model\/app\/visibleAll/, 'post', AppPackageController.visibleAll);
Mock.mock(/\/admin\/model\/app\/remove/, 'post', AppPackageController.remove);
Mock.mock(/\/admin\/model\/app\/modify/, 'post', AppPackageController.modify);
Mock.mock(/\/admin\/model\/app\/listOwn/, 'get', AppPackageController.listOwn);
Mock.mock(/\/admin\/model\/app\/listGroupBy/, 'post', AppPackageController.listGroupBy);
Mock.mock(/\/admin\/model\/app\/listEnable/, 'post', AppPackageController.listEnable);
Mock.mock(/\/admin\/model\/app\/list/, 'post', AppPackageController.list);
Mock.mock(/\/admin\/model\/app\/groupUpdate/, 'post', AppPackageController.groupUpdate);
Mock.mock(/\/admin\/model\/app\/groupRemove/, 'post', AppPackageController.groupRemove);
Mock.mock(/\/admin\/model\/app\/groupList/, 'post', AppPackageController.groupList);
Mock.mock(/\/admin\/model\/app\/groupAdd/, 'post', AppPackageController.groupAdd);
Mock.mock(/\/admin\/model\/app\/getByCode/, 'get', AppPackageController.getByCode);
Mock.mock(/\/admin\/model\/app\/get/, 'get', AppPackageController.get);
Mock.mock(/\/admin\/model\/app\/enable/, 'post', AppPackageController.enable);
Mock.mock(/\/admin\/model\/app\/disable/, 'post', AppPackageController.disable);
Mock.mock(/\/admin\/model\/app\/create/, 'post', AppPackageController.create);

Mock.mock(/\/admin\/model\/app\/permission\/updateGroup/, 'post', AppPermissionController.updateGroup);
Mock.mock(/\/admin\/model\/app\/permission\/sort/, 'post', AppPermissionController.sort);
Mock.mock(/\/admin\/model\/app\/permission\/saveSchemaPermissions/, 'post', AppPermissionController.saveSchemaPermissions);
Mock.mock(/\/admin\/model\/app\/permission\/resource/, 'get', AppPermissionController.resource);
Mock.mock(/\/admin\/model\/app\/permission\/rename/, 'post', AppPermissionController.rename);
Mock.mock(/\/admin\/model\/app\/permission\/removeGroups/, 'post', AppPermissionController.removeGroups);
Mock.mock(/\/admin\/model\/app\/permission\/propertyResource/, 'get', AppPermissionController.propertyResource);
Mock.mock(/\/admin\/model\/app\/permission\/listSchemaPermission/, 'get', AppPermissionController.listSchemaPermission);
Mock.mock(/\/admin\/model\/app\/permission\/listGroups/, 'get', AppPermissionController.listGroups);
Mock.mock(/\/admin\/model\/app\/permission\/getSchemaPermission/, 'get', AppPermissionController.getSchemaPermission);
Mock.mock(/\/admin\/model\/app\/permission\/createGroup/, 'post', AppPermissionController.createGroup);

Mock.mock(/\/admin\/model\/biz\/rule\/update/, 'post', BizRuleController.update);
Mock.mock(/\/admin\/model\/biz\/rule\/rename/, 'post', BizRuleController.rename);
Mock.mock(/\/admin\/model\/biz\/rule\/queryBySchemaCode/, 'get', BizRuleController.queryBySchemaCode);
Mock.mock(/\/admin\/model\/biz\/rule\/property\/list/, 'post', BizRuleController.list_1);
Mock.mock(/\/admin\/model\/biz\/rule\/list/, 'post', BizRuleController.list);
Mock.mock(/\/admin\/model\/biz\/rule\/property\/get/, 'get', BizRuleController.get_1);
Mock.mock(/\/admin\/model\/biz\/rule\/get/, 'get', BizRuleController.get);
Mock.mock(/\/admin\/model\/biz\/rule\/delete/, 'post', BizRuleController.delete);
Mock.mock(/\/admin\/model\/biz\/rule\/create/, 'post', BizRuleController.create);
Mock.mock(/\/admin\/model\/biz\/rule\/clone/, 'post', BizRuleController.clone);

Mock.mock(/\/admin\/model\/fun\/tree/, 'get', ModelFunTreeController.tree);
Mock.mock(/\/admin\/model\/fun\/sort/, 'post', ModelFunTreeController.sort);
Mock.mock(/\/admin\/model\/fun\/rename/, 'post', ModelFunTreeController.rename);

Mock.mock(/\/admin\/model\/menu\/remove/, 'post', BizMenuController.remove);
Mock.mock(/\/admin\/model\/menu\/modify/, 'post', BizMenuController.modify);
Mock.mock(/\/admin\/model\/menu\/get/, 'get', BizMenuController.get);
Mock.mock(/\/admin\/model\/menu\/create/, 'post', BizMenuController.create);

Mock.mock(/\/admin\/model\/schema\/test/, 'post', BizSchemaController.test);
Mock.mock(/\/admin\/model\/schema\/sort/, 'post', BizSchemaController.sort);
Mock.mock(/\/admin\/model\/schema\/saveTitle/, 'post', BizSchemaController.saveTitle);
Mock.mock(/\/admin\/model\/schema\/removeSchema/, 'post', BizSchemaController.removeSchema);
Mock.mock(/\/admin\/model\/schema\/removeGroup/, 'post', BizSchemaController.removeGroup);
Mock.mock(/\/admin\/model\/schema\/publish/, 'post', BizSchemaController.publish);
Mock.mock(/\/admin\/model\/schema\/modifySchema/, 'post', BizSchemaController.modifySchema);
Mock.mock(/\/admin\/model\/schema\/modifyGroup/, 'post', BizSchemaController.modifyGroup);
Mock.mock(/\/admin\/model\/schema\/groupSort/, 'post', BizSchemaController.groupSort);
Mock.mock(/\/admin\/model\/schema\/getSchemaMetadata/, 'get', BizSchemaController.getSchemaMetadata);
Mock.mock(/\/admin\/model\/schema\/getSchemaInfo/, 'get', BizSchemaController.getSchemaInfo);
Mock.mock(/\/admin\/model\/schema\/getModelTree/, 'get', BizSchemaController.getModelTree);
Mock.mock(/\/admin\/model\/schema\/getModelList/, 'get', BizSchemaController.getModelList);
Mock.mock(/\/admin\/model\/schema\/getGroupTree/, 'get', BizSchemaController.getGroupTree);
Mock.mock(/\/admin\/model\/schema\/getCorrlationFormSchema/, 'get', BizSchemaController.getCorrlationFormSchema);
Mock.mock(/\/admin\/model\/schema\/createSchema/, 'post', BizSchemaController.createSchema);
Mock.mock(/\/admin\/model\/schema\/createGroup/, 'post', BizSchemaController.createGroup);

Mock.mock(/\/admin\/model\/schema\/event\/update/, 'post', BizSchemaEventController.update);
Mock.mock(/\/admin\/model\/schema\/event\/queryBySchemaCode/, 'get', BizSchemaEventController.queryBySchemaCode);
Mock.mock(/\/admin\/model\/schema\/event\/list/, 'post', BizSchemaEventController.list);
Mock.mock(/\/admin\/model\/schema\/event\/get/, 'get', BizSchemaEventController.get);
Mock.mock(/\/admin\/model\/schema\/event\/delete/, 'get', BizSchemaEventController.delete);
Mock.mock(/\/admin\/model\/schema\/event\/create/, 'post', BizSchemaEventController.create);

Mock.mock(/\/admin\/model\/schema\/formula\/update/, 'post', BizPropertyFormulaController.update);
Mock.mock(/\/admin\/model\/schema\/formula\/remove/, 'post', BizPropertyFormulaController.remove);
Mock.mock(/\/admin\/model\/schema\/formula\/list/, 'get', BizPropertyFormulaController.list);
Mock.mock(/\/admin\/model\/schema\/formula\/create/, 'post', BizPropertyFormulaController.create);

Mock.mock(/\/admin\/model\/schema\/property\/sort/, 'post', BizPropertyController.sort);
Mock.mock(/\/admin\/model\/schema\/property\/remove/, 'post', BizPropertyController.remove);
Mock.mock(/\/admin\/model\/schema\/property\/modify/, 'post', BizPropertyController.modify);
Mock.mock(/\/admin\/model\/schema\/property\/list/, 'get', BizPropertyController.list);
Mock.mock(/\/admin\/model\/schema\/property\/getPublishListByWorkflowCode/, 'get', BizPropertyController.getPublishListByWorkflowCode);
Mock.mock(/\/admin\/model\/schema\/property\/getPublishList/, 'get', BizPropertyController.getPublishList);
Mock.mock(/\/admin\/model\/schema\/property\/get/, 'post', BizPropertyController.get);
Mock.mock(/\/admin\/model\/schema\/property\/create/, 'post', BizPropertyController.create);
Mock.mock(/\/admin\/model\/schema\/property\/confirmRemove/, 'post', BizPropertyController.confirmRemove);
Mock.mock(/\/admin\/model\/schema\/property\/batchListPublishByWorkflowCodes/, 'post', BizPropertyController.batchListPublishByWorkflowCodes);
Mock.mock(/\/admin\/model\/schema\/property\/batchListPublish/, 'post', BizPropertyController.batchListPublish);

Mock.mock(/\/admin\/model\/view\/updateVisible/, 'post', BizViewController.updateVisible);
Mock.mock(/\/admin\/model\/view\/update/, 'post', BizViewController.update);
Mock.mock(/\/admin\/model\/view\/sort/, 'post', BizViewController.sort);
Mock.mock(/\/admin\/model\/view\/remove/, 'post', BizViewController.remove);
Mock.mock(/\/admin\/model\/view\/publish/, 'post', BizViewController.publish);
Mock.mock(/\/admin\/model\/view\/list/, 'get', BizViewController.list);
Mock.mock(/\/admin\/model\/view\/getViewInfo/, 'post', BizViewController.getViewInfo);
Mock.mock(/\/admin\/model\/view\/create/, 'post', BizViewController.create);

Mock.mock(/\/admin\/model\/workflow\/validateWorkflowTemplate/, 'post', WorkflowDesignController.validateWorkflowTemplate);
Mock.mock(/\/admin\/model\/workflow\/validateParticipantExpr/, 'get', WorkflowDesignController.validateParticipantExpr);
Mock.mock(/\/admin\/model\/workflow\/updateWorkflowHeader/, 'post', WorkflowDesignController.updateWorkflowHeader);
Mock.mock(/\/admin\/model\/workflow\/saveWorkflowTemplate/, 'post', WorkflowDesignController.saveWorkflowTemplate);
Mock.mock(/\/admin\/model\/workflow\/remove/, 'post', WorkflowDesignController.remove);
Mock.mock(/\/admin\/model\/workflow\/publishWorkflowTemplate/, 'post', WorkflowDesignController.publishWorkflowTemplate);
Mock.mock(/\/admin\/model\/workflow\/list/, 'get', WorkflowDesignController.list);
Mock.mock(/\/admin\/model\/workflow\/getWorkflowTemplate/, 'post', WorkflowDesignController.getWorkflowTemplate);
Mock.mock(/\/admin\/model\/workflow\/getWorkflowDraft/, 'post', WorkflowDesignController.getWorkflowDraft);
Mock.mock(/\/admin\/model\/workflow\/getHistoricPublishedList/, 'post', WorkflowDesignController.getHistoricPublishedList);
Mock.mock(/\/admin\/model\/workflow\/get/, 'get', WorkflowDesignController.get);
Mock.mock(/\/admin\/model\/workflow\/createWorkflow/, 'post', WorkflowDesignController.createWorkflow);
Mock.mock(/\/admin\/model\/workflow\/clone/, 'post', WorkflowDesignController.clone);

Mock.mock(/\/admin\/org\/config\/syncOrgs/, 'post', OrganizationController.syncOrgs);
Mock.mock(/\/admin\/org\/config\/save/, 'post', OrganizationController.save);
Mock.mock(/\/admin\/org\/config\/remove/, 'post', OrganizationController.remove);
Mock.mock(/\/admin\/org\/config\/query\/record/, 'post', OrganizationController.record);
Mock.mock(/\/admin\/org\/config\/getList/, 'get', OrganizationController.getList);
Mock.mock(/\/admin\/org\/config\/get/, 'get', OrganizationController.get);
Mock.mock(/\/admin\/org\/config\/genSyncResult/, 'get', OrganizationController.genSyncResult);

Mock.mock(/\/admin\/org\/dept\/search/, 'get', DepartmentController.search);
Mock.mock(/\/admin\/org\/dept\/save/, 'post', DepartmentController.save);
Mock.mock(/\/admin\/org\/dept\/removeUser/, 'post', DepartmentController.removeUser);
Mock.mock(/\/admin\/org\/dept\/remove/, 'post', DepartmentController.remove);
Mock.mock(/\/admin\/org\/dept\/listChildUnit/, 'get', DepartmentController.listChildUnit);
Mock.mock(/\/admin\/org\/dept\/getDeptUserListByPage/, 'get', DepartmentController.getDeptUserListByPage);
Mock.mock(/\/admin\/org\/dept\/getDeptUserList/, 'get', DepartmentController.getDeptUserList);
Mock.mock(/\/admin\/org\/dept\/getChildList/, 'post', DepartmentController.getChildList);
Mock.mock(/\/admin\/org\/dept\/getAllDeptTree/, 'get', DepartmentController.getAllDeptTree);
Mock.mock(/\/admin\/org\/dept\/get/, 'get', DepartmentController.get);
Mock.mock(/\/admin\/org\/dept\/batchSaveDept/, 'post', DepartmentController.batchSaveDept);

Mock.mock(/\/admin\/org\/tag\/updateTag/, 'post', TagController.updateTag);
Mock.mock(/\/admin\/org\/tag\/searchTagGroup/, 'get', TagController.searchTagGroup);
Mock.mock(/\/admin\/org\/tag\/saveUserToTag/, 'post', TagController.saveUserToTag);
Mock.mock(/\/admin\/org\/tag\/saveGroup/, 'post', TagController.saveGroup);
Mock.mock(/\/admin\/org\/tag\/removeUnits/, 'post', TagController.removeUnits);
Mock.mock(/\/admin\/org\/tag\/removeTag/, 'post', TagController.removeTag);
Mock.mock(/\/admin\/org\/tag\/removeGroup/, 'post', TagController.removeGroup);
Mock.mock(/\/admin\/org\/tag\/getUserListByPage/, 'get', TagController.getUserListByPage);
Mock.mock(/\/admin\/org\/tag\/getTagTreeWithoutOrg/, 'get', TagController.getTagTreeWithoutOrg);
Mock.mock(/\/admin\/org\/tag\/batchSaveTag/, 'post', TagController.batchSaveTag);

Mock.mock(/\/admin\/org\/unit\/tree\/search/, 'post', AdminUnitTreeController.search);
Mock.mock(/\/admin\/org\/unit\/tree\/getchildrenList/, 'post', AdminUnitTreeController.getchildrenList);

Mock.mock(/\/admin\/org\/user\/updateQuitRemark/, 'post', UserController.updateQuitRemark);
Mock.mock(/\/admin\/org\/user\/save/, 'post', UserController.save);
Mock.mock(/\/admin\/org\/user\/restore/, 'post', UserController.restore);
Mock.mock(/\/admin\/org\/user\/resetPwd/, 'post', UserController.resetPwd);
Mock.mock(/\/admin\/org\/user\/listQuitUsers/, 'get', UserController.listQuitUsers);
Mock.mock(/\/admin\/org\/user\/get/, 'get', UserController.get);
Mock.mock(/\/admin\/org\/user\/disable/, 'post', UserController.disable);
Mock.mock(/\/admin\/org\/user\/delete/, 'post', UserController.delete);
Mock.mock(/\/admin\/org\/user\/batchSave/, 'post', UserController.batchSave);
Mock.mock(/\/admin\/org\/user\/batchMoveUserDept/, 'post', UserController.batchMoveUserDept);

Mock.mock(/\/admin\/org\/user\/biz\/transfer/, 'post', UserBizController.transfer);
Mock.mock(/\/admin\/org\/user\/biz\/searchUserWorkItems/, 'post', UserBizController.searchUserWorkItems);
Mock.mock(/\/admin\/org\/user\/biz\/genResult/, 'get', UserBizController.genResult);

Mock.mock(/\/admin\/permission\/admin\/removeSysAdmin/, 'post', AdminController.removeSysAdmin);
Mock.mock(/\/admin\/permission\/admin\/getSysAdminsByPage/, 'get', AdminController.getSysAdminsByPage);
Mock.mock(/\/admin\/permission\/admin\/addSysAdmin/, 'post', AdminController.addSysAdmin);

Mock.mock(/\/admin\/permission\/adminRole\/updateAdminRole/, 'post', AdminRoleController.updateAdminRole);
Mock.mock(/\/admin\/permission\/adminRole\/grantPermissions/, 'post', AdminRoleController.grantPermissions);
Mock.mock(/\/admin\/permission\/adminRole\/getRoleInfo/, 'get', AdminRoleController.getRoleInfo);
Mock.mock(/\/admin\/permission\/adminRole\/getPermissionRange/, 'get', AdminRoleController.getPermissionRange);
Mock.mock(/\/admin\/permission\/adminRole\/deleteAdminRole/, 'post', AdminRoleController.deleteAdminRole);
Mock.mock(/\/admin\/permission\/adminRole\/createAdminRole/, 'post', AdminRoleController.createAdminRole);
Mock.mock(/\/admin\/permission\/adminRole\/chartTree/, 'get', AdminRoleController.chartTree);
Mock.mock(/\/admin\/permission\/adminRole\/batchGrantPermissions/, 'post', AdminRoleController.batchGrantPermissions);

Mock.mock(/\/admin\/report\/advanced\/ds\/update/, 'post', AdvancedDataSourceController.update);
Mock.mock(/\/admin\/report\/advanced\/ds\/testRun/, 'post', AdvancedDataSourceController.testRun);
Mock.mock(/\/admin\/report\/advanced\/ds\/list/, 'get', AdvancedDataSourceController.list);
Mock.mock(/\/admin\/report\/advanced\/ds\/get/, 'get', AdvancedDataSourceController.get);
Mock.mock(/\/admin\/report\/advanced\/ds\/delete/, 'post', AdvancedDataSourceController.delete);
Mock.mock(/\/admin\/report\/advanced\/ds\/create/, 'post', AdvancedDataSourceController.create);

Mock.mock(/\/admin\/report\/chart\/test/, 'post', ChartController.test);
Mock.mock(/\/admin\/report\/chart\/modify/, 'post', ChartController.modify);
Mock.mock(/\/admin\/report\/chart\/create/, 'post', ChartController.create);

Mock.mock(/\/admin\/report\/dashboard\/saveGlobal/, 'post', DashboardController.saveGlobal);
Mock.mock(/\/admin\/report\/dashboard\/saveFilters/, 'post', DashboardController.saveFilters);
Mock.mock(/\/admin\/report\/dashboard\/publish/, 'post', DashboardController.publish);
Mock.mock(/\/admin\/report\/dashboard\/moveChart/, 'post', DashboardController.moveChart);
Mock.mock(/\/admin\/report\/dashboard\/modify/, 'post', DashboardController.modify);
Mock.mock(/\/admin\/report\/dashboard\/get/, 'get', DashboardController.get);
Mock.mock(/\/admin\/report\/dashboard\/delete/, 'post', DashboardController.delete);
Mock.mock(/\/admin\/report\/dashboard\/create/, 'post', DashboardController.create);

Mock.mock(/\/admin\/report\/ds\/propertys/, 'post', ReportDataSourceController.propertys);
Mock.mock(/\/admin\/report\/ds\/list/, 'get', ReportDataSourceController.list);

Mock.mock(/\/admin\/report\/olap\/query/, 'post', OlapController.query);

Mock.mock(/\/admin\/scheduler\/update/, 'post', SchedulerController.update);
Mock.mock(/\/admin\/scheduler\/trigger/, 'post', SchedulerController.trigger);
Mock.mock(/\/admin\/scheduler\/stop/, 'post', SchedulerController.stop);
Mock.mock(/\/admin\/scheduler\/start/, 'post', SchedulerController.start);
Mock.mock(/\/admin\/scheduler\/remove/, 'post', SchedulerController.remove);
Mock.mock(/\/admin\/scheduler\/nextTriggerTime/, 'post', SchedulerController.nextTriggerTime);
Mock.mock(/\/admin\/scheduler\/list/, 'post', SchedulerController.list);
Mock.mock(/\/admin\/scheduler\/getInfo/, 'get', SchedulerController.getInfo);
Mock.mock(/\/admin\/scheduler\/add/, 'post', SchedulerController.add);

Mock.mock(/\/admin\/system\/dict\/update/, 'post', SysDictController.update);
Mock.mock(/\/admin\/system\/dict\/page/, 'post', SysDictController.page);
Mock.mock(/\/admin\/system\/dict\/config\/listByDictId/, 'get', SysDictController.listByDictId);
Mock.mock(/\/admin\/system\/dict\/get/, 'get', SysDictController.get);
Mock.mock(/\/admin\/system\/dict\/changeStatus/, 'get', SysDictController.changeStatus);
Mock.mock(/\/admin\/system\/dict\/add/, 'post', SysDictController.add);

Mock.mock(/\/admin\/system\/log\/list/, 'post', SysLogController.list);
Mock.mock(/\/admin\/system\/log\/info/, 'get', SysLogController.info);

Mock.mock(/\/admin\/system\/params\/sms\/template\/create/, 'get', SysParamsController.create);

Mock.mock(/\/admin\/system\/security\/update/, 'post', SecurityClientController.update);
Mock.mock(/\/admin\/system\/security\/resetSecret/, 'post', SecurityClientController.resetSecret);
Mock.mock(/\/admin\/system\/security\/remove/, 'post', SecurityClientController.remove);
Mock.mock(/\/admin\/system\/security\/list/, 'get', SecurityClientController.list);
Mock.mock(/\/admin\/system\/security\/create/, 'post', SecurityClientController.create);

Mock.mock(/\/auth\/ssoLogin/, 'get', LoginController.ssoLogin);
Mock.mock(/\/auth\/logout/, 'delete', LoginController.logout);
Mock.mock(/\/auth\/login/, 'post', LoginController.login);
Mock.mock(/\/auth\/getOrgList/, 'get', LoginController.getOrgList);
Mock.mock(/\/auth\/genRsaKey/, 'get', LoginController.genRsaKey);

Mock.mock(/\/document\/file\/upload/, 'post', DocumentFileController.upload_1);
Mock.mock(/\/document\/file\/uploadTemp/, 'post', DocumentFileController.uploadTemp);
Mock.mock(/\/document\/file\/open\/upload/, 'post', DocumentFileController.upload);
Mock.mock(/\/document\/file\/viewtmp\/{documentId}/, 'get', DocumentFileController.documentId_2);
Mock.mock(/\/document\/file\/view\/{documentId}/, 'get', DocumentFileController.documentId_1);
Mock.mock(/\/document\/file\/thumb\/{documentId}/, 'get', DocumentFileController.documentId);
Mock.mock(/\/document\/file\/deleteTemp/, 'post', DocumentFileController.deleteTemp);
Mock.mock(/\/document\/file\/delete/, 'post', DocumentFileController.delete);

Mock.mock(/\/excel\/import/, 'post', ExcelController.import);
Mock.mock(/\/excel\/getImportProgress/, 'get', ExcelController.getImportProgress);
Mock.mock(/\/excel\/getExportProgress/, 'get', ExcelController.getExportProgress);
Mock.mock(/\/excel\/excelExport/, 'post', ExcelController.excelExport);
Mock.mock(/\/excel\/downloadTemplate/, 'post', ExcelController.downloadTemplate);

Mock.mock(/\/oauth\/token/, 'patch', AuthController.token_6);
Mock.mock(/\/oauth\/token/, 'options', AuthController.token_5);
Mock.mock(/\/oauth\/token/, 'delete', AuthController.token_4);
Mock.mock(/\/oauth\/token/, 'put', AuthController.token_3);
Mock.mock(/\/oauth\/token/, 'post', AuthController.token_2);
Mock.mock(/\/oauth\/token/, 'head', AuthController.token_1);
Mock.mock(/\/oauth\/token/, 'get', AuthController.token);

Mock.mock(/\/openapi\/organization\/user\/getByCode/, 'get', OrganizationOpenApi.getByCode);

Mock.mock(/\/openapi\/runtime\/form\/update/, 'post', FormRuntimeOpenApi.update);
Mock.mock(/\/openapi\/runtime\/form\/remove/, 'post', FormRuntimeOpenApi.remove);
Mock.mock(/\/openapi\/runtime\/form\/loadWorkflowData/, 'post', FormRuntimeOpenApi.loadWorkflowData);
Mock.mock(/\/openapi\/runtime\/form\/loadBizData/, 'post', FormRuntimeOpenApi.loadBizData);
Mock.mock(/\/openapi\/runtime\/form\/listData/, 'post', FormRuntimeOpenApi.listData);
Mock.mock(/\/openapi\/runtime\/form\/insert/, 'post', FormRuntimeOpenApi.insert);
Mock.mock(/\/openapi\/runtime\/form\/calculate/, 'post', FormRuntimeOpenApi.calculate);

Mock.mock(/\/openapi\/runtime\/instance\/startWorkflow/, 'post', InstanceRuntimeOpenApi.startWorkflow);
Mock.mock(/\/openapi\/runtime\/instance\/logs/, 'get', InstanceRuntimeOpenApi.logs);
Mock.mock(/\/openapi\/runtime\/instance\/getInfoByInstanceId/, 'get', InstanceRuntimeOpenApi.getInfoByInstanceId);
Mock.mock(/\/openapi\/runtime\/instance\/deleteWorkflowInstance/, 'get', InstanceRuntimeOpenApi.deleteWorkflowInstance);

Mock.mock(/\/openapi\/runtime\/workflow\/searchUserWorkItems/, 'post', WorkflowRuntimeOpenApi.searchUserWorkItems);
Mock.mock(/\/openapi\/runtime\/workflow\/searchUserFinishedWorkItems/, 'post', WorkflowRuntimeOpenApi.searchUserFinishedWorkItems);
Mock.mock(/\/openapi\/runtime\/workflow\/predictParticipant/, 'post', WorkflowRuntimeOpenApi.predictParticipant);
Mock.mock(/\/openapi\/runtime\/workflow\/listWrokflow/, 'get', WorkflowRuntimeOpenApi.listWrokflow);
Mock.mock(/\/openapi\/runtime\/workflow\/listInstances/, 'post', WorkflowRuntimeOpenApi.listInstances);
Mock.mock(/\/openapi\/runtime\/workflow\/getWorkItemsByInstanceId/, 'get', WorkflowRuntimeOpenApi.getWorkItemsByInstanceId);
Mock.mock(/\/openapi\/runtime\/workflow\/getWorkItemApprovalsByInstanceId/, 'get', WorkflowRuntimeOpenApi.getWorkItemApprovalsByInstanceId);

Mock.mock(/\/openapi\/runtime\/workitem\/transfer/, 'post', WorkItemRuntimeOpenApi.transfer);
Mock.mock(/\/openapi\/runtime\/workitem\/submit/, 'post', WorkItemRuntimeOpenApi.submit);
Mock.mock(/\/openapi\/runtime\/workitem\/retrieve/, 'post', WorkItemRuntimeOpenApi.retrieve);
Mock.mock(/\/openapi\/runtime\/workitem\/reject/, 'post', WorkItemRuntimeOpenApi.reject);
Mock.mock(/\/openapi\/runtime\/workitem\/invalid/, 'post', WorkItemRuntimeOpenApi.invalid);
Mock.mock(/\/openapi\/runtime\/workitem\/disagree/, 'post', WorkItemRuntimeOpenApi.disagree);
Mock.mock(/\/openapi\/runtime\/workitem\/close/, 'post', WorkItemRuntimeOpenApi.close);
Mock.mock(/\/openapi\/runtime\/workitem\/circulate/, 'post', WorkItemRuntimeOpenApi.circulate);
Mock.mock(/\/openapi\/runtime\/workitem\/assistSubmit/, 'post', WorkItemRuntimeOpenApi.assistSubmit);
Mock.mock(/\/openapi\/runtime\/workitem\/assist/, 'post', WorkItemRuntimeOpenApi.assist);
Mock.mock(/\/openapi\/runtime\/workitem\/apposttile/, 'post', WorkItemRuntimeOpenApi.apposttile);
Mock.mock(/\/openapi\/runtime\/workitem\/agree/, 'post', WorkItemRuntimeOpenApi.agree);

Mock.mock(/\/portal\/app\/searchSchemas/, 'get', AppController.searchSchemas);
Mock.mock(/\/portal\/app\/listGroupBy/, 'post', AppController.listGroupBy);
Mock.mock(/\/portal\/app\/list/, 'post', AppController.list);
Mock.mock(/\/portal\/app\/info/, 'get', AppController.info);
Mock.mock(/\/portal\/app\/getSchemaInfo/, 'get', AppController.getSchemaInfo);
Mock.mock(/\/portal\/app\/getMenuInfo/, 'get', AppController.getMenuInfo);
Mock.mock(/\/portal\/app\/getDashboardInfo/, 'get', AppController.getDashboardInfo);

Mock.mock(/\/portal\/bizObject\/update/, 'post', BizObjectController.update);
Mock.mock(/\/portal\/bizObject\/uniqueValidate/, 'post', BizObjectController.uniqueValidate);
Mock.mock(/\/portal\/bizObject\/temporary/, 'post', BizObjectController.temporary);
Mock.mock(/\/portal\/bizObject\/remove/, 'post', BizObjectController.remove);
Mock.mock(/\/portal\/bizObject\/listTemplateData/, 'post', BizObjectController.listTemplateData);
Mock.mock(/\/portal\/bizObject\/listSheetDatas/, 'get', BizObjectController.listSheetDatas);
Mock.mock(/\/portal\/bizObject\/listProperty/, 'get', BizObjectController.listProperty);
Mock.mock(/\/portal\/bizObject\/insert/, 'post', BizObjectController.insert);
Mock.mock(/\/portal\/bizObject\/getList/, 'post', BizObjectController.getList);
Mock.mock(/\/portal\/bizObject\/batchUpdate/, 'post', BizObjectController.batchUpdate);
Mock.mock(/\/portal\/bizObject\/batchListSheetDatas/, 'post', BizObjectController.batchListSheetDatas);

Mock.mock(/\/portal\/form\/comment\/queryAtUser/, 'get', FormCommentController.queryAtUser);
Mock.mock(/\/portal\/form\/comment\/findByBizObjectId/, 'get', FormCommentController.findByBizObjectId);
Mock.mock(/\/portal\/form\/comment\/delete/, 'get', FormCommentController.delete);
Mock.mock(/\/portal\/form\/comment\/create/, 'post', FormCommentController.create);

Mock.mock(/\/portal\/form\/template\/getByCode/, 'get', PortalFormTemplateController.getByCode);
Mock.mock(/\/portal\/form\/template\/findBySchemaCode/, 'get', PortalFormTemplateController.findBySchemaCode);

Mock.mock(/\/portal\/js\/sign\/wechat/, 'post', JsSignController.wechat);

Mock.mock(/\/portal\/message\/readAll/, 'post', MessageController.readAll);
Mock.mock(/\/portal\/message\/read/, 'post', MessageController.read);
Mock.mock(/\/portal\/message\/listUnreadLimit/, 'get', MessageController.listUnreadLimit);
Mock.mock(/\/portal\/message\/list/, 'get', MessageController.list);
Mock.mock(/\/portal\/message\/cleadAllRead/, 'post', MessageController.cleadAllRead);

Mock.mock(/\/portal\/model\/fun\/tree/, 'get', PortalModelFunTreeController.tree);

Mock.mock(/\/portal\/report\/olap\/query/, 'post', OlapRuntimeController.query);

Mock.mock(/\/portal\/runtime\/external\/submit/, 'post', ExternalController.submit);
Mock.mock(/\/portal\/runtime\/external\/startWorkflow/, 'post', ExternalController.startWorkflow);
Mock.mock(/\/portal\/runtime\/external\/load/, 'get', ExternalController.load);

Mock.mock(/\/portal\/runtime\/form\/viewCorrelationForm/, 'get', FormRuntimeController.viewCorrelationForm);
Mock.mock(/\/portal\/runtime\/form\/remind/, 'post', FormRuntimeController.remind);
Mock.mock(/\/portal\/runtime\/form\/loadWorkflowData/, 'post', FormRuntimeController.loadWorkflowData);
Mock.mock(/\/portal\/runtime\/form\/loadSheetDatas/, 'post', FormRuntimeController.loadSheetDatas);
Mock.mock(/\/portal\/runtime\/form\/loadDataByCommentId/, 'get', FormRuntimeController.loadDataByCommentId);
Mock.mock(/\/portal\/runtime\/form\/loadBizData/, 'post', FormRuntimeController.loadBizData);
Mock.mock(/\/portal\/runtime\/form\/calculate/, 'post', FormRuntimeController.calculate);

Mock.mock(/\/portal\/runtime\/instance\/urge/, 'post', InstanceRuntimeController.urge);
Mock.mock(/\/portal\/runtime\/instance\/tracks/, 'get', InstanceRuntimeController.tracks);
Mock.mock(/\/portal\/runtime\/instance\/temporary/, 'post', InstanceRuntimeController.temporary);
Mock.mock(/\/portal\/runtime\/instance\/superInvalid/, 'post', InstanceRuntimeController.superInvalid);
Mock.mock(/\/portal\/runtime\/instance\/superDeleteInstance/, 'post', InstanceRuntimeController.superDeleteInstance);
Mock.mock(/\/portal\/runtime\/instance\/superClose/, 'post', InstanceRuntimeController.superClose);
Mock.mock(/\/portal\/runtime\/instance\/superChangeOwner/, 'post', InstanceRuntimeController.superChangeOwner);
Mock.mock(/\/portal\/runtime\/instance\/superCancelNode/, 'post', InstanceRuntimeController.superCancelNode);
Mock.mock(/\/portal\/runtime\/instance\/superAdjustNodeParticipant/, 'post', InstanceRuntimeController.superAdjustNodeParticipant);
Mock.mock(/\/portal\/runtime\/instance\/superActivateNode/, 'post', InstanceRuntimeController.superActivateNode);
Mock.mock(/\/portal\/runtime\/instance\/startWorkflow/, 'post', InstanceRuntimeController.startWorkflow);
Mock.mock(/\/portal\/runtime\/instance\/logs/, 'get', InstanceRuntimeController.logs);
Mock.mock(/\/portal\/runtime\/instance\/getOriginatorDepartments/, 'get', InstanceRuntimeController.getOriginatorDepartments);
Mock.mock(/\/portal\/runtime\/instance\/temporary\/delete/, 'post', InstanceRuntimeController.delete_1);
Mock.mock(/\/portal\/runtime\/instance\/delete/, 'post', InstanceRuntimeController.delete);

Mock.mock(/\/portal\/runtime\/workflow\/searchWorkItems/, 'post', WorkflowRuntimeController.searchWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/searchMyInstances/, 'post', WorkflowRuntimeController.searchMyInstances);
Mock.mock(/\/portal\/runtime\/workflow\/searchHistoricWorkItems/, 'post', WorkflowRuntimeController.searchHistoricWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/searchHistoricCirculateWorkItems/, 'post', WorkflowRuntimeController.searchHistoricCirculateWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/searchCirculateWorkItems/, 'post', WorkflowRuntimeController.searchCirculateWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/searchBatchWorkItems/, 'post', WorkflowRuntimeController.searchBatchWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/searchAllWorkItems/, 'post', WorkflowRuntimeController.searchAllWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/searchAllHistoricWorkItems/, 'post', WorkflowRuntimeController.searchAllHistoricWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/listWrokflow/, 'get', WorkflowRuntimeController.listWrokflow);
Mock.mock(/\/portal\/runtime\/workflow\/listWorkItems/, 'post', WorkflowRuntimeController.listWorkItems);
Mock.mock(/\/portal\/runtime\/workflow\/listInstances/, 'post', WorkflowRuntimeController.listInstances);

Mock.mock(/\/portal\/runtime\/workitem\/transfer/, 'post', WorkItemRuntimeController.transfer);
Mock.mock(/\/portal\/runtime\/workitem\/temporary/, 'post', WorkItemRuntimeController.temporary);
Mock.mock(/\/portal\/runtime\/workitem\/submit/, 'post', WorkItemRuntimeController.submit);
Mock.mock(/\/portal\/runtime\/workitem\/retrieve/, 'post', WorkItemRuntimeController.retrieve);
Mock.mock(/\/portal\/runtime\/workitem\/reject/, 'post', WorkItemRuntimeController.reject);
Mock.mock(/\/portal\/runtime\/workitem\/predictParticipant/, 'post', WorkItemRuntimeController.predictParticipant);
Mock.mock(/\/portal\/runtime\/workitem\/invalid/, 'post', WorkItemRuntimeController.invalid);
Mock.mock(/\/portal\/runtime\/workitem\/disagree/, 'post', WorkItemRuntimeController.disagree);
Mock.mock(/\/portal\/runtime\/workitem\/close/, 'post', WorkItemRuntimeController.close);
Mock.mock(/\/portal\/runtime\/workitem\/circulate/, 'post', WorkItemRuntimeController.circulate);
Mock.mock(/\/portal\/runtime\/workitem\/batchAgree/, 'post', WorkItemRuntimeController.batchAgree);
Mock.mock(/\/portal\/runtime\/workitem\/assistSubmit/, 'post', WorkItemRuntimeController.assistSubmit);
Mock.mock(/\/portal\/runtime\/workitem\/assist/, 'post', WorkItemRuntimeController.assist);
Mock.mock(/\/portal\/runtime\/workitem\/apposttile/, 'post', WorkItemRuntimeController.apposttile);
Mock.mock(/\/portal\/runtime\/workitem\/agree/, 'post', WorkItemRuntimeController.agree);

Mock.mock(/\/portal\/server\/invoke\/bizRule/, 'post', BizServerInvokeController.bizRule);
Mock.mock(/\/portal\/server\/invoke\/bizBus/, 'post', BizServerInvokeController.bizBus);

Mock.mock(/\/portal\/system\/dict\/config\/listByDictId/, 'get', PortalSysDictController.listByDictId);

Mock.mock(/\/portal\/unit\/updatePwd/, 'post', PortalUnitController.updatePwd);
Mock.mock(/\/portal\/unit\/updateAvatar/, 'post', PortalUnitController.updateAvatar);
Mock.mock(/\/portal\/unit\/getUserMappingInfo/, 'get', PortalUnitController.getUserMappingInfo);
Mock.mock(/\/portal\/unit\/getUserInfo/, 'get', PortalUnitController.getUserInfo);
Mock.mock(/\/portal\/unit\/getCurUserInfo/, 'get', PortalUnitController.getCurUserInfo);
Mock.mock(/\/portal\/unit\/belongToCheck/, 'post', PortalUnitController.belongToCheck);

Mock.mock(/\/portal\/unit\/tree\/user\/search/, 'post', PortalUnitTreeController.search_1);
Mock.mock(/\/portal\/unit\/tree\/search/, 'post', PortalUnitTreeController.search);
Mock.mock(/\/portal\/unit\/tree\/getchildrenList/, 'post', PortalUnitTreeController.getchildrenList);

Mock.mock(/\/portal\/user\/biz\/common\/list/, 'get', PortalUserBizController.list);
Mock.mock(/\/portal\/user\/biz\/common\/delete/, 'post', PortalUserBizController.delete);
Mock.mock(/\/portal\/user\/biz\/common\/create/, 'post', PortalUserBizController.create);

Mock.mock(/\/portal\/view\/listData/, 'post', AppViewController.listData);
Mock.mock(/\/portal\/view\/list/, 'get', AppViewController.list);
Mock.mock(/\/portal\/view\/getViewInfo/, 'post', AppViewController.getViewInfo);

Mock.mock(/\/portal\/workbench\/getFigure/, 'get', WorkbenchController.getFigure);

Mock.mock(/\/portal\/workbench\/quicklink\/save/, 'post', QuickLinkController.save);
Mock.mock(/\/portal\/workbench\/quicklink\/list/, 'get', QuickLinkController.list);
Mock.mock(/\/portal\/workbench\/quicklink\/delete/, 'post', QuickLinkController.delete);
Mock.mock(/\/portal\/workbench\/quicklink\/add/, 'post', QuickLinkController.add);

Mock.mock(/\/portal\/workflow\/delegate\/update/, 'post', WorkflowDelegateController.update);
Mock.mock(/\/portal\/workflow\/delegate\/list/, 'post', WorkflowDelegateController.list);
Mock.mock(/\/portal\/workflow\/delegate\/delete/, 'post', WorkflowDelegateController.delete);
Mock.mock(/\/portal\/workflow\/delegate\/create/, 'post', WorkflowDelegateController.create);

Mock.mock(/\/system\/shortlink\/get/, 'post', ShortLinkController.get);
Mock.mock(/\/system\/shortlink\/batchGet/, 'post', ShortLinkController.batchGet);

Mock.mock(/\/system\/sys\/idGenerator\/generateIds/, 'get', IdGeneratorController.generateIds);

Mock.mock(/\/system\/sys\/security\/genRsaKey/, 'get', SecurityController.genRsaKey);

Mock.mock(/\/third\/notify\/wechat/, 'post', NotifyController.wechat_1);
Mock.mock(/\/third\/notify\/wechat/, 'get', NotifyController.wechat);
Mock.mock(/\/third\/notify\/openapi/, 'post', NotifyController.openapi);
Mock.mock(/\/third\/notify\/dingtalk/, 'post', NotifyController.dingtalk_1);
Mock.mock(/\/third\/notify\/dingtalk/, 'get', NotifyController.dingtalk);

