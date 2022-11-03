/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * sys-params-controller
 */
class SysParamsController {

  create(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new SysParamsController();
