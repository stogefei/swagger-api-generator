/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * notify-controller
 */
class NotifyController {

  wechat_1(): Mock.MockjsMock {
    return Mock.mock("");
  }

  wechat(): Mock.MockjsMock {
    return Mock.mock("");
  }

  openapi(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  dingtalk_1(): Mock.MockjsMock {
    return Mock.mock("");
  }

  dingtalk(): Mock.MockjsMock {
    return Mock.mock("");
  }
}

// @ts-ignore
export default new NotifyController();
