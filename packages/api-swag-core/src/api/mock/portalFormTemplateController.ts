/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * portal-form-template-controller
 */
class PortalFormTemplateController {

  getByCode(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  findBySchemaCode(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"code":"@ctitle(10, 20)","content":"@ctitle(10, 20)","formData":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","schemaCode":"@ctitle(10, 20)","settings":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new PortalFormTemplateController();
