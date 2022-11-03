/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * security-client-controller
 */
class SecurityClientController {

  update(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  resetSecret(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data":"@ctitle(10, 20)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  remove(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  list(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"accessTokenValiditySeconds":"@integer(0, 100)","clientId":"@ctitle(10, 20)","clientName":"@ctitle(10, 20)","clientSecret":"@ctitle(10, 20)","createdTime":"@ctitle(10, 20)","id":"@ctitle(10, 20)","modifiedTime":"@ctitle(10, 20)","refreshTokenValiditySeconds":"@integer(0, 100)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  create(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new SecurityClientController();
