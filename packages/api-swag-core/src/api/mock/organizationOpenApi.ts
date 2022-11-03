/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * organization-open-api
 */
class OrganizationOpenApi {

  getByCode(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new OrganizationOpenApi();
