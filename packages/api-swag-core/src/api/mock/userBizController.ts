/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * user-biz-controller
 */
class UserBizController {

  transfer(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data":"@ctitle(10, 20)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  searchUserWorkItems(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  genResult(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data":"@ctitle(10, 20)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new UserBizController();
