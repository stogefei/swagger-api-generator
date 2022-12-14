import Request from './request';
import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';
interface Interceptors {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
}
import { BizDataSourceController } from '../api/api-control/bizDataSourceController';
import { BizServiceCategroyController } from '../api/api-control/bizServiceCategroyController';
import { BizServiceController } from '../api/api-control/bizServiceController';
import { BizServiceMethodController } from '../api/api-control/bizServiceMethodController';
import { FormDesignController } from '../api/api-control/formDesignController';
import { FormTemplateController } from '../api/api-control/formTemplateController';
import { LicenseController } from '../api/api-control/licenseController';
import { AppPackageController } from '../api/api-control/appPackageController';
import { AppPermissionController } from '../api/api-control/appPermissionController';
import { BizRuleController } from '../api/api-control/bizRuleController';
import { ModelFunTreeController } from '../api/api-control/modelFunTreeController';
import { BizMenuController } from '../api/api-control/bizMenuController';
import { BizSchemaController } from '../api/api-control/bizSchemaController';
import { BizSchemaEventController } from '../api/api-control/bizSchemaEventController';
import { BizPropertyFormulaController } from '../api/api-control/bizPropertyFormulaController';
import { BizPropertyController } from '../api/api-control/bizPropertyController';
import { BizViewController } from '../api/api-control/bizViewController';
import { WorkflowDesignController } from '../api/api-control/workflowDesignController';
import { OrganizationController } from '../api/api-control/organizationController';
import { DepartmentController } from '../api/api-control/departmentController';
import { TagController } from '../api/api-control/tagController';
import { AdminUnitTreeController } from '../api/api-control/adminUnitTreeController';
import { UserController } from '../api/api-control/userController';
import { UserBizController } from '../api/api-control/userBizController';
import { AdminController } from '../api/api-control/adminController';
import { AdminRoleController } from '../api/api-control/adminRoleController';
import { AdvancedDataSourceController } from '../api/api-control/advancedDataSourceController';
import { ChartController } from '../api/api-control/chartController';
import { DashboardController } from '../api/api-control/dashboardController';
import { ReportDataSourceController } from '../api/api-control/reportDataSourceController';
import { OlapController } from '../api/api-control/olapController';
import { SchedulerController } from '../api/api-control/schedulerController';
import { SysDictController } from '../api/api-control/sysDictController';
import { SysLogController } from '../api/api-control/sysLogController';
import { SysParamsController } from '../api/api-control/sysParamsController';
import { SecurityClientController } from '../api/api-control/securityClientController';
import { LoginController } from '../api/api-control/loginController';
import { DocumentFileController } from '../api/api-control/documentFileController';
import { ExcelController } from '../api/api-control/excelController';
import { AuthController } from '../api/api-control/authController';
import { OrganizationOpenApi } from '../api/api-control/organizationOpenApi';
import { FormRuntimeOpenApi } from '../api/api-control/formRuntimeOpenApi';
import { InstanceRuntimeOpenApi } from '../api/api-control/instanceRuntimeOpenApi';
import { WorkflowRuntimeOpenApi } from '../api/api-control/workflowRuntimeOpenApi';
import { WorkItemRuntimeOpenApi } from '../api/api-control/workItemRuntimeOpenApi';
import { AppController } from '../api/api-control/appController';
import { BizObjectController } from '../api/api-control/bizObjectController';
import { FormCommentController } from '../api/api-control/formCommentController';
import { PortalFormTemplateController } from '../api/api-control/portalFormTemplateController';
import { JsSignController } from '../api/api-control/jsSignController';
import { MessageController } from '../api/api-control/messageController';
import { PortalModelFunTreeController } from '../api/api-control/portalModelFunTreeController';
import { OlapRuntimeController } from '../api/api-control/olapRuntimeController';
import { ExternalController } from '../api/api-control/externalController';
import { FormRuntimeController } from '../api/api-control/formRuntimeController';
import { InstanceRuntimeController } from '../api/api-control/instanceRuntimeController';
import { WorkflowRuntimeController } from '../api/api-control/workflowRuntimeController';
import { WorkItemRuntimeController } from '../api/api-control/workItemRuntimeController';
import { BizServerInvokeController } from '../api/api-control/bizServerInvokeController';
import { PortalSysDictController } from '../api/api-control/portalSysDictController';
import { PortalUnitController } from '../api/api-control/portalUnitController';
import { PortalUnitTreeController } from '../api/api-control/portalUnitTreeController';
import { PortalUserBizController } from '../api/api-control/portalUserBizController';
import { AppViewController } from '../api/api-control/appViewController';
import { WorkbenchController } from '../api/api-control/workbenchController';
import { QuickLinkController } from '../api/api-control/quickLinkController';
import { WorkflowDelegateController } from '../api/api-control/workflowDelegateController';
import { ShortLinkController } from '../api/api-control/shortLinkController';
import { IdGeneratorController } from '../api/api-control/idGeneratorController';
import { SecurityController } from '../api/api-control/securityController';
import { NotifyController } from '../api/api-control/notifyController';
export default class API {
    requestInstance: Request;
    addInterceptors: Interceptors;
    constructor(baseUrl: string);
    Global: {
        request: (options: AxiosRequestConfig) => Promise<AxiosResponse<any, any>>;
    };
    mockMode: boolean;
    register: {
        request: () => void;
    };
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
export {};
