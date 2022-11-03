/* eslint-disable */
import {AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios'
interface Interceptors {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
}
 
import {BizDataSourceController} from './bizDataSourceController'; // biz-data-source-controller

import {BizServiceCategroyController} from './bizServiceCategroyController'; // biz-service-categroy-controller

import {BizServiceController} from './bizServiceController'; // biz-service-controller

import {BizServiceMethodController} from './bizServiceMethodController'; // biz-service-method-controller

import {FormDesignController} from './formDesignController'; // form-design-controller

import {FormTemplateController} from './formTemplateController'; // form-template-controller

import {LicenseController} from './licenseController'; // license-controller

import {AppPackageController} from './appPackageController'; // app-package-controller

import {AppPermissionController} from './appPermissionController'; // app-permission-controller

import {BizRuleController} from './bizRuleController'; // biz-rule-controller

import {ModelFunTreeController} from './modelFunTreeController'; // model-fun-tree-controller

import {BizMenuController} from './bizMenuController'; // biz-menu-controller

import {BizSchemaController} from './bizSchemaController'; // biz-schema-controller

import {BizSchemaEventController} from './bizSchemaEventController'; // biz-schema-event-controller

import {BizPropertyFormulaController} from './bizPropertyFormulaController'; // biz-property-formula-controller

import {BizPropertyController} from './bizPropertyController'; // biz-property-controller

import {BizViewController} from './bizViewController'; // biz-view-controller

import {WorkflowDesignController} from './workflowDesignController'; // workflow-design-controller

import {OrganizationController} from './organizationController'; // organization-controller

import {DepartmentController} from './departmentController'; // department-controller

import {TagController} from './tagController'; // tag-controller

import {AdminUnitTreeController} from './adminUnitTreeController'; // admin-unit-tree-controller

import {UserController} from './userController'; // user-controller

import {UserBizController} from './userBizController'; // user-biz-controller

import {AdminController} from './adminController'; // admin-controller

import {AdminRoleController} from './adminRoleController'; // admin-role-controller

import {AdvancedDataSourceController} from './advancedDataSourceController'; // advanced-data-source-controller

import {ChartController} from './chartController'; // chart-controller

import {DashboardController} from './dashboardController'; // dashboard-controller

import {ReportDataSourceController} from './reportDataSourceController'; // report-data-source-controller

import {OlapController} from './olapController'; // olap-controller

import {SchedulerController} from './schedulerController'; // scheduler-controller

import {SysDictController} from './sysDictController'; // sys-dict-controller

import {SysLogController} from './sysLogController'; // sys-log-controller

import {SysParamsController} from './sysParamsController'; // sys-params-controller

import {SecurityClientController} from './securityClientController'; // security-client-controller

import {LoginController} from './loginController'; // login-controller

import {DocumentFileController} from './documentFileController'; // document-file-controller

import {ExcelController} from './excelController'; // excel-controller

import {AuthController} from './authController'; // auth-controller

import {OrganizationOpenApi} from './organizationOpenApi'; // organization-open-api

import {FormRuntimeOpenApi} from './formRuntimeOpenApi'; // form-runtime-open-api

import {InstanceRuntimeOpenApi} from './instanceRuntimeOpenApi'; // instance-runtime-open-api

import {WorkflowRuntimeOpenApi} from './workflowRuntimeOpenApi'; // workflow-runtime-open-api

import {WorkItemRuntimeOpenApi} from './workItemRuntimeOpenApi'; // work-item-runtime-open-api

import {AppController} from './appController'; // app-controller

import {BizObjectController} from './bizObjectController'; // biz-object-controller

import {FormCommentController} from './formCommentController'; // form-comment-controller

import {PortalFormTemplateController} from './portalFormTemplateController'; // portal-form-template-controller

import {JsSignController} from './jsSignController'; // js-sign-controller

import {MessageController} from './messageController'; // message-controller

import {PortalModelFunTreeController} from './portalModelFunTreeController'; // portal-model-fun-tree-controller

import {OlapRuntimeController} from './olapRuntimeController'; // olap-runtime-controller

import {ExternalController} from './externalController'; // external-controller

import {FormRuntimeController} from './formRuntimeController'; // form-runtime-controller

import {InstanceRuntimeController} from './instanceRuntimeController'; // instance-runtime-controller

import {WorkflowRuntimeController} from './workflowRuntimeController'; // workflow-runtime-controller

import {WorkItemRuntimeController} from './workItemRuntimeController'; // work-item-runtime-controller

import {BizServerInvokeController} from './bizServerInvokeController'; // biz-server-invoke-controller

import {PortalSysDictController} from './portalSysDictController'; // portal-sys-dict-controller

import {PortalUnitController} from './portalUnitController'; // portal-unit-controller

import {PortalUnitTreeController} from './portalUnitTreeController'; // portal-unit-tree-controller

import {PortalUserBizController} from './portalUserBizController'; // portal-user-biz-controller

import {AppViewController} from './appViewController'; // app-view-controller

import {WorkbenchController} from './workbenchController'; // workbench-controller

import {QuickLinkController} from './quickLinkController'; // quick-link-controller

import {WorkflowDelegateController} from './workflowDelegateController'; // workflow-delegate-controller

import {ShortLinkController} from './shortLinkController'; // short-link-controller

import {IdGeneratorController} from './idGeneratorController'; // id-generator-controller

import {SecurityController} from './securityController'; // security-controller

import {NotifyController} from './notifyController'; // notify-controller

declare interface API {
    requestInstance: Request; // 请求实例

    addInterceptors: Interceptors; // 添加新的拦截器

    Global: {
        request: (options: any) => Promise<any>;
    };

    register: (apiService: string) => any;

    mockMode: (enable?: boolean) => void;


    BizDataSourceController: BizDataSourceController;

    BizServiceCategroyController: BizServiceCategroyController;

    BizServiceController: BizServiceController;

    BizServiceMethodController: BizServiceMethodController;

    FormDesignController: FormDesignController;

    FormTemplateController: FormTemplateController;

    LicenseController: LicenseController;

    AppPackageController: AppPackageController;

    AppPermissionController: AppPermissionController;

    BizRuleController: BizRuleController;

    ModelFunTreeController: ModelFunTreeController;

    BizMenuController: BizMenuController;

    BizSchemaController: BizSchemaController;

    BizSchemaEventController: BizSchemaEventController;

    BizPropertyFormulaController: BizPropertyFormulaController;

    BizPropertyController: BizPropertyController;

    BizViewController: BizViewController;

    WorkflowDesignController: WorkflowDesignController;

    OrganizationController: OrganizationController;

    DepartmentController: DepartmentController;

    TagController: TagController;

    AdminUnitTreeController: AdminUnitTreeController;

    UserController: UserController;

    UserBizController: UserBizController;

    AdminController: AdminController;

    AdminRoleController: AdminRoleController;

    AdvancedDataSourceController: AdvancedDataSourceController;

    ChartController: ChartController;

    DashboardController: DashboardController;

    ReportDataSourceController: ReportDataSourceController;

    OlapController: OlapController;

    SchedulerController: SchedulerController;

    SysDictController: SysDictController;

    SysLogController: SysLogController;

    SysParamsController: SysParamsController;

    SecurityClientController: SecurityClientController;

    LoginController: LoginController;

    DocumentFileController: DocumentFileController;

    ExcelController: ExcelController;

    AuthController: AuthController;

    OrganizationOpenApi: OrganizationOpenApi;

    FormRuntimeOpenApi: FormRuntimeOpenApi;

    InstanceRuntimeOpenApi: InstanceRuntimeOpenApi;

    WorkflowRuntimeOpenApi: WorkflowRuntimeOpenApi;

    WorkItemRuntimeOpenApi: WorkItemRuntimeOpenApi;

    AppController: AppController;

    BizObjectController: BizObjectController;

    FormCommentController: FormCommentController;

    PortalFormTemplateController: PortalFormTemplateController;

    JsSignController: JsSignController;

    MessageController: MessageController;

    PortalModelFunTreeController: PortalModelFunTreeController;

    OlapRuntimeController: OlapRuntimeController;

    ExternalController: ExternalController;

    FormRuntimeController: FormRuntimeController;

    InstanceRuntimeController: InstanceRuntimeController;

    WorkflowRuntimeController: WorkflowRuntimeController;

    WorkItemRuntimeController: WorkItemRuntimeController;

    BizServerInvokeController: BizServerInvokeController;

    PortalSysDictController: PortalSysDictController;

    PortalUnitController: PortalUnitController;

    PortalUnitTreeController: PortalUnitTreeController;

    PortalUserBizController: PortalUserBizController;

    AppViewController: AppViewController;

    WorkbenchController: WorkbenchController;

    QuickLinkController: QuickLinkController;

    WorkflowDelegateController: WorkflowDelegateController;

    ShortLinkController: ShortLinkController;

    IdGeneratorController: IdGeneratorController;

    SecurityController: SecurityController;

    NotifyController: NotifyController;

}
