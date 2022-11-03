/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * biz-schema-event-controller
 */
class BizSchemaEventController {

  update(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  queryBySchemaCode(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"bindType":"@ctitle(10, 20)","eventType":"@ctitle(10, 20)","id":"@ctitle(10, 20)","inputJson":"@ctitle(10, 20)","inputSchemaCode":"@ctitle(10, 20)","methodCode":"@ctitle(10, 20)","name":"@cname","outputJson":"@ctitle(10, 20)","outputSchemaCode":"@ctitle(10, 20)","ruleId":"@ctitle(10, 20)","schemaCode":"@ctitle(10, 20)","serviceCode":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  list(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"bindType":"@ctitle(10, 20)","eventType":"@ctitle(10, 20)","id":"@ctitle(10, 20)","inputJson":"@ctitle(10, 20)","inputSchemaCode":"@ctitle(10, 20)","methodCode":"@ctitle(10, 20)","name":"@cname","outputJson":"@ctitle(10, 20)","outputSchemaCode":"@ctitle(10, 20)","ruleId":"@ctitle(10, 20)","schemaCode":"@ctitle(10, 20)","serviceCode":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
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
}

// @ts-ignore
export default new BizSchemaEventController();
