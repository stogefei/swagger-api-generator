/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * biz-rule-controller
 */
class BizRuleController {

  update(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  rename(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  queryBySchemaCode(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"createdBy":"@ctitle(10, 20)","createdTime":"@ctitle(10, 20)","creatorName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","modifiedBy":"@ctitle(10, 20)","modifiedTime":"@ctitle(10, 20)","name":"@cname","schemaCode":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  list_1(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"id":"@ctitle(10, 20)","name":"@cname","schemaCode":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  list(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"createdBy":"@ctitle(10, 20)","createdTime":"@ctitle(10, 20)","creatorName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","modifiedBy":"@ctitle(10, 20)","modifiedTime":"@ctitle(10, 20)","name":"@cname","schemaCode":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  get_1(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  get(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  delete(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  create(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data":"@ctitle(10, 20)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  clone(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new BizRuleController();
