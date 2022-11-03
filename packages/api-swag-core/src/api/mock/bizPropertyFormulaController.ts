/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * biz-property-formula-controller
 */
class BizPropertyFormulaController {

  update(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  remove(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  list(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"code":"@ctitle(10, 20)","formula":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","schemaCode":"@ctitle(10, 20)","sheetCode":"@ctitle(10, 20)","sheetName":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  create(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new BizPropertyFormulaController();
