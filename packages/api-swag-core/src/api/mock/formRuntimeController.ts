/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * form-runtime-controller
 */
class FormRuntimeController {

  viewCorrelationForm(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  remind(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  loadWorkflowData(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  loadSheetDatas(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  loadDataByCommentId(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  loadBizData(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  calculate(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"errorMsg":"@ctitle(10, 20)","propertyCode":"@ctitle(10, 20)","schemaCode":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new FormRuntimeController();
