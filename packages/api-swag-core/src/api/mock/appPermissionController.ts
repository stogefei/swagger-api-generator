/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * app-permission-controller
 */
class AppPermissionController {

  updateGroup(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  sort(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  saveSchemaPermissions(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  resource(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  rename(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  removeGroups(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  propertyResource(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"code":"@ctitle(10, 20)","name":"@cname"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  listSchemaPermission(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"propertyPermissions|20":[{"code":"@ctitle(10, 20)","name":"@cname"}],"schemaCode":"@ctitle(10, 20)","schemaName":"@ctitle(10, 20)","viewActionPermissions|20":[""],"workflowPermissions|20":[{"code":"@ctitle(10, 20)","name":"@cname"}]}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  listGroups(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"appCode":"@ctitle(10, 20)","grantType":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","sortKey":"@integer(0, 100)","subjects|20":[{"avatar":"@ctitle(10, 20)","departmentName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","type":"@ctitle(10, 20)"}]}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  getSchemaPermission(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  createGroup(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new AppPermissionController();
