/* eslint-disable */
import Request from './request';
import {AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios'
interface Interceptors {
  request: AxiosInterceptorManager<AxiosRequestConfig>
  response: AxiosInterceptorManager<AxiosResponse>
}

import {BizDataSourceController} from '../api/api-control/bizDataSourceController'; // biz-data-source-controller

import {BizServiceCategroyController} from '../api/api-control/bizServiceCategroyController'; // biz-service-categroy-controller

import {BizServiceController} from '../api/api-control/bizServiceController'; // biz-service-controller

import {BizServiceMethodController} from '../api/api-control/bizServiceMethodController'; // biz-service-method-controller

import {FormDesignController} from '../api/api-control/formDesignController'; // form-design-controller

import {FormTemplateController} from '../api/api-control/formTemplateController'; // form-template-controller

import {LicenseController} from '../api/api-control/licenseController'; // license-controller

import {AppPackageController} from '../api/api-control/appPackageController'; // app-package-controller

import {AppPermissionController} from '../api/api-control/appPermissionController'; // app-permission-controller

import {BizRuleController} from '../api/api-control/bizRuleController'; // biz-rule-controller

import {ModelFunTreeController} from '../api/api-control/modelFunTreeController'; // model-fun-tree-controller

import {BizMenuController} from '../api/api-control/bizMenuController'; // biz-menu-controller

import {BizSchemaController} from '../api/api-control/bizSchemaController'; // biz-schema-controller

import {BizSchemaEventController} from '../api/api-control/bizSchemaEventController'; // biz-schema-event-controller

import {BizPropertyFormulaController} from '../api/api-control/bizPropertyFormulaController'; // biz-property-formula-controller

import {BizPropertyController} from '../api/api-control/bizPropertyController'; // biz-property-controller

import {BizViewController} from '../api/api-control/bizViewController'; // biz-view-controller

import {WorkflowDesignController} from '../api/api-control/workflowDesignController'; // workflow-design-controller

import {OrganizationController} from '../api/api-control/organizationController'; // organization-controller

import {DepartmentController} from '../api/api-control/departmentController'; // department-controller

import {TagController} from '../api/api-control/tagController'; // tag-controller

import {AdminUnitTreeController} from '../api/api-control/adminUnitTreeController'; // admin-unit-tree-controller

import {UserController} from '../api/api-control/userController'; // user-controller

import {UserBizController} from '../api/api-control/userBizController'; // user-biz-controller

import {AdminController} from '../api/api-control/adminController'; // admin-controller

import {AdminRoleController} from '../api/api-control/adminRoleController'; // admin-role-controller

import {AdvancedDataSourceController} from '../api/api-control/advancedDataSourceController'; // advanced-data-source-controller

import {ChartController} from '../api/api-control/chartController'; // chart-controller

import {DashboardController} from '../api/api-control/dashboardController'; // dashboard-controller

import {ReportDataSourceController} from '../api/api-control/reportDataSourceController'; // report-data-source-controller

import {OlapController} from '../api/api-control/olapController'; // olap-controller

import {SchedulerController} from '../api/api-control/schedulerController'; // scheduler-controller

import {SysDictController} from '../api/api-control/sysDictController'; // sys-dict-controller

import {SysLogController} from '../api/api-control/sysLogController'; // sys-log-controller

import {SysParamsController} from '../api/api-control/sysParamsController'; // sys-params-controller

import {SecurityClientController} from '../api/api-control/securityClientController'; // security-client-controller

import {LoginController} from '../api/api-control/loginController'; // login-controller

import {DocumentFileController} from '../api/api-control/documentFileController'; // document-file-controller

import {ExcelController} from '../api/api-control/excelController'; // excel-controller

import {AuthController} from '../api/api-control/authController'; // auth-controller

import {OrganizationOpenApi} from '../api/api-control/organizationOpenApi'; // organization-open-api

import {FormRuntimeOpenApi} from '../api/api-control/formRuntimeOpenApi'; // form-runtime-open-api

import {InstanceRuntimeOpenApi} from '../api/api-control/instanceRuntimeOpenApi'; // instance-runtime-open-api

import {WorkflowRuntimeOpenApi} from '../api/api-control/workflowRuntimeOpenApi'; // workflow-runtime-open-api

import {WorkItemRuntimeOpenApi} from '../api/api-control/workItemRuntimeOpenApi'; // work-item-runtime-open-api

import {AppController} from '../api/api-control/appController'; // app-controller

import {BizObjectController} from '../api/api-control/bizObjectController'; // biz-object-controller

import {FormCommentController} from '../api/api-control/formCommentController'; // form-comment-controller

import {PortalFormTemplateController} from '../api/api-control/portalFormTemplateController'; // portal-form-template-controller

import {JsSignController} from '../api/api-control/jsSignController'; // js-sign-controller

import {MessageController} from '../api/api-control/messageController'; // message-controller

import {PortalModelFunTreeController} from '../api/api-control/portalModelFunTreeController'; // portal-model-fun-tree-controller

import {OlapRuntimeController} from '../api/api-control/olapRuntimeController'; // olap-runtime-controller

import {ExternalController} from '../api/api-control/externalController'; // external-controller

import {FormRuntimeController} from '../api/api-control/formRuntimeController'; // form-runtime-controller

import {InstanceRuntimeController} from '../api/api-control/instanceRuntimeController'; // instance-runtime-controller

import {WorkflowRuntimeController} from '../api/api-control/workflowRuntimeController'; // workflow-runtime-controller

import {WorkItemRuntimeController} from '../api/api-control/workItemRuntimeController'; // work-item-runtime-controller

import {BizServerInvokeController} from '../api/api-control/bizServerInvokeController'; // biz-server-invoke-controller

import {PortalSysDictController} from '../api/api-control/portalSysDictController'; // portal-sys-dict-controller

import {PortalUnitController} from '../api/api-control/portalUnitController'; // portal-unit-controller

import {PortalUnitTreeController} from '../api/api-control/portalUnitTreeController'; // portal-unit-tree-controller

import {PortalUserBizController} from '../api/api-control/portalUserBizController'; // portal-user-biz-controller

import {AppViewController} from '../api/api-control/appViewController'; // app-view-controller

import {WorkbenchController} from '../api/api-control/workbenchController'; // workbench-controller

import {QuickLinkController} from '../api/api-control/quickLinkController'; // quick-link-controller

import {WorkflowDelegateController} from '../api/api-control/workflowDelegateController'; // workflow-delegate-controller

import {ShortLinkController} from '../api/api-control/shortLinkController'; // short-link-controller

import {IdGeneratorController} from '../api/api-control/idGeneratorController'; // id-generator-controller

import {SecurityController} from '../api/api-control/securityController'; // security-controller

import {NotifyController} from '../api/api-control/notifyController'; // notify-controller

export default class API {
  requestInstance: Request; // 请求实例

  addInterceptors: Interceptors; // 添加新的拦截器

  constructor(baseUrl: string) {
    this.requestInstance = new Request(baseUrl)
    this.addInterceptors = {
      request: this.requestInstance.interceptors.request,
      response: this.requestInstance.interceptors.response,
    }
  }

  // 定义常量方法
  Global = {
    request: (options: AxiosRequestConfig) => this.requestInstance.instance.request(options)
  }

  mockMode = true

  register = {
    request: () => {},
  }

  
  BizDataSourceController = new BizDataSourceController()
  
  BizServiceCategroyController = new BizServiceCategroyController()
  
  BizServiceController = new BizServiceController()
  
  BizServiceMethodController = new BizServiceMethodController()
  
  FormDesignController = new FormDesignController()
  
  FormTemplateController = new FormTemplateController()
  
  LicenseController = new LicenseController()
  
  AppPackageController = new AppPackageController()
  
  AppPermissionController = new AppPermissionController()
  
  BizRuleController = new BizRuleController()
  
  ModelFunTreeController = new ModelFunTreeController()
  
  BizMenuController = new BizMenuController()
  
  BizSchemaController = new BizSchemaController()
  
  BizSchemaEventController = new BizSchemaEventController()
  
  BizPropertyFormulaController = new BizPropertyFormulaController()
  
  BizPropertyController = new BizPropertyController()
  
  BizViewController = new BizViewController()
  
  WorkflowDesignController = new WorkflowDesignController()
  
  OrganizationController = new OrganizationController()
  
  DepartmentController = new DepartmentController()
  
  TagController = new TagController()
  
  AdminUnitTreeController = new AdminUnitTreeController()
  
  UserController = new UserController()
  
  UserBizController = new UserBizController()
  
  AdminController = new AdminController()
  
  AdminRoleController = new AdminRoleController()
  
  AdvancedDataSourceController = new AdvancedDataSourceController()
  
  ChartController = new ChartController()
  
  DashboardController = new DashboardController()
  
  ReportDataSourceController = new ReportDataSourceController()
  
  OlapController = new OlapController()
  
  SchedulerController = new SchedulerController()
  
  SysDictController = new SysDictController()
  
  SysLogController = new SysLogController()
  
  SysParamsController = new SysParamsController()
  
  SecurityClientController = new SecurityClientController()
  
  LoginController = new LoginController()
  
  DocumentFileController = new DocumentFileController()
  
  ExcelController = new ExcelController()
  
  AuthController = new AuthController()
  
  OrganizationOpenApi = new OrganizationOpenApi()
  
  FormRuntimeOpenApi = new FormRuntimeOpenApi()
  
  InstanceRuntimeOpenApi = new InstanceRuntimeOpenApi()
  
  WorkflowRuntimeOpenApi = new WorkflowRuntimeOpenApi()
  
  WorkItemRuntimeOpenApi = new WorkItemRuntimeOpenApi()
  
  AppController = new AppController()
  
  BizObjectController = new BizObjectController()
  
  FormCommentController = new FormCommentController()
  
  PortalFormTemplateController = new PortalFormTemplateController()
  
  JsSignController = new JsSignController()
  
  MessageController = new MessageController()
  
  PortalModelFunTreeController = new PortalModelFunTreeController()
  
  OlapRuntimeController = new OlapRuntimeController()
  
  ExternalController = new ExternalController()
  
  FormRuntimeController = new FormRuntimeController()
  
  InstanceRuntimeController = new InstanceRuntimeController()
  
  WorkflowRuntimeController = new WorkflowRuntimeController()
  
  WorkItemRuntimeController = new WorkItemRuntimeController()
  
  BizServerInvokeController = new BizServerInvokeController()
  
  PortalSysDictController = new PortalSysDictController()
  
  PortalUnitController = new PortalUnitController()
  
  PortalUnitTreeController = new PortalUnitTreeController()
  
  PortalUserBizController = new PortalUserBizController()
  
  AppViewController = new AppViewController()
  
  WorkbenchController = new WorkbenchController()
  
  QuickLinkController = new QuickLinkController()
  
  WorkflowDelegateController = new WorkflowDelegateController()
  
  ShortLinkController = new ShortLinkController()
  
  IdGeneratorController = new IdGeneratorController()
  
  SecurityController = new SecurityController()
  
  NotifyController = new NotifyController()
  
}
