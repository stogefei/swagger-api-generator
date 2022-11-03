/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * biz-service-categroy-controller
 */
class BizServiceCategroyController {

  update(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  remove(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  getList(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"id":"@ctitle(10, 20)","name":"@cname","serviceList|20":[{"categroyId":"@ctitle(10, 20)","code":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","protocolType":"@ctitle(10, 20)"}]}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  create(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new BizServiceCategroyController();
