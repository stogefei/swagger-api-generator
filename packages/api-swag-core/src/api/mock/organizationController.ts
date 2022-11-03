/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * organization-controller
 */
class OrganizationController {

  syncOrgs(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data":"@ctitle(10, 20)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  save(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  remove(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  record(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  getList(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"departmentId":"@ctitle(10, 20)","id":"@ctitle(10, 20)","maintainType":"@ctitle(10, 20)","name":"@cname","parentDepartmentId":"@ctitle(10, 20)","parentDepartmentName":"@ctitle(10, 20)","relatedConfig":"@ctitle(10, 20)","status":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  get(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  genSyncResult(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data":"@ctitle(10, 20)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new OrganizationController();
