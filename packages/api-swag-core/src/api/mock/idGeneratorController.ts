/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * id-generator-controller
 */
class IdGeneratorController {

  generateIds(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[""],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new IdGeneratorController();
