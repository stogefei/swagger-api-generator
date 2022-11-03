/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * sys-dict-controller
 */
class SysDictController {

  update(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  page(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  listByDictId(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"childList|20":[{"childList|20":[{"childList|20":[{"childList|20":[{"childList|20":[],"code":"@ctitle(10, 20)","dictId":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","remark":"@ctitle(10, 20)"}],"code":"@ctitle(10, 20)","dictId":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","remark":"@ctitle(10, 20)"}],"code":"@ctitle(10, 20)","dictId":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","remark":"@ctitle(10, 20)"}],"code":"@ctitle(10, 20)","dictId":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","remark":"@ctitle(10, 20)"}],"code":"@ctitle(10, 20)","dictId":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","remark":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  get(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  changeStatus(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  add(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new SysDictController();
