/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * portal-unit-tree-controller
 */
class PortalUnitTreeController {

  search_1(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  search(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  getchildrenList(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"avatar":"@ctitle(10, 20)","children|20":[{"avatar":"@ctitle(10, 20)","children|20":[{"avatar":"@ctitle(10, 20)","children|20":[{"avatar":"@ctitle(10, 20)","children|20":[{"avatar":"@ctitle(10, 20)","children|20":[],"departmentFullName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","queryCode":"@ctitle(10, 20)","unitType":"@ctitle(10, 20)"}],"departmentFullName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","queryCode":"@ctitle(10, 20)","unitType":"@ctitle(10, 20)"}],"departmentFullName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","queryCode":"@ctitle(10, 20)","unitType":"@ctitle(10, 20)"}],"departmentFullName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","queryCode":"@ctitle(10, 20)","unitType":"@ctitle(10, 20)"}],"departmentFullName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","queryCode":"@ctitle(10, 20)","unitType":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new PortalUnitTreeController();
