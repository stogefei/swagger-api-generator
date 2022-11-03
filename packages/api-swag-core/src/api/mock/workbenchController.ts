/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * workbench-controller
 */
class WorkbenchController {

  getFigure(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new WorkbenchController();
