/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * quick-link-controller
 */
class QuickLinkController {

  save(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  list(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"appCode":"@ctitle(10, 20)","formCode":"@ctitle(10, 20)","funCode":"@ctitle(10, 20)","funId":"@ctitle(10, 20)","funName":"@ctitle(10, 20)","funType":"@ctitle(10, 20)","icon":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  delete(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  add(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new QuickLinkController();
