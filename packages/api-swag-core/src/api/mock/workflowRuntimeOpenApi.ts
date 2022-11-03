/* eslint-disable */
// @ts-ignore
import Mock from 'mockjs';

 /**
 * workflow-runtime-open-api
 */
class WorkflowRuntimeOpenApi {

  searchUserWorkItems(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  searchUserFinishedWorkItems(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  predictParticipant(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"nodeId":"@ctitle(10, 20)","nodeName":"@ctitle(10, 20)","participants|20":[{"avatar":"@ctitle(10, 20)","departmentName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","type":"@ctitle(10, 20)"}]}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  listWrokflow(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"children|20":[{"children|20":[{"children|20":[{"children|20":[{"children|20":[],"code":"@ctitle(10, 20)","funType":"@ctitle(10, 20)","icon":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","sortIndex":"@integer(0, 100)"}],"code":"@ctitle(10, 20)","funType":"@ctitle(10, 20)","icon":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","sortIndex":"@integer(0, 100)"}],"code":"@ctitle(10, 20)","funType":"@ctitle(10, 20)","icon":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","sortIndex":"@integer(0, 100)"}],"code":"@ctitle(10, 20)","funType":"@ctitle(10, 20)","icon":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","sortIndex":"@integer(0, 100)"}],"code":"@ctitle(10, 20)","funType":"@ctitle(10, 20)","icon":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","parentId":"@ctitle(10, 20)","sortIndex":"@integer(0, 100)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  listInstances(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  getWorkItemsByInstanceId(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"activityCode":"@ctitle(10, 20)","activityName":"@ctitle(10, 20)","circulatedById":"@ctitle(10, 20)","duration":"@integer(0, 100)","finishTime":"@ctitle(10, 20)","formCode":"@ctitle(10, 20)","id":"@ctitle(10, 20)","instanceId":"@ctitle(10, 20)","instanceName":"@ctitle(10, 20)","instanceStatus":"@ctitle(10, 20)","originatorDepartmentId":"@ctitle(10, 20)","originatorId":"@ctitle(10, 20)","participantId":"@ctitle(10, 20)","receiveTime":"@ctitle(10, 20)","resultStatus":"@ctitle(10, 20)","sequenceNo":"@ctitle(10, 20)","status":"@ctitle(10, 20)","stayTime":"@integer(0, 100)","timeoutStatus":"@ctitle(10, 20)","type":"@ctitle(10, 20)","urgeMsg":"@ctitle(10, 20)","workflowCode":"@ctitle(10, 20)","workflowName":"@ctitle(10, 20)"}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }

  getWorkItemApprovalsByInstanceId(): Mock.MockjsMock {
    return Mock.mock({"bizKey":"@ctitle(10, 20)","code":"@integer(0, 100)","data|20":[{"activatedApprover|20":[{"avatar":"@ctitle(10, 20)","departmentName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","sourceUserId":"@ctitle(10, 20)","sourceUserName":"@ctitle(10, 20)","workItemType":"@ctitle(10, 20)"}],"activityCode":"@ctitle(10, 20)","activityName":"@ctitle(10, 20)","activityStatus":"@ctitle(10, 20)","activityType":"@ctitle(10, 20)","approvalLogList|20":[{"actionType":"@ctitle(10, 20)","activityCode":"@ctitle(10, 20)","activityName":"@ctitle(10, 20)","activityType":"@ctitle(10, 20)","circulateList|20":[{"activityCode":"@ctitle(10, 20)","activityName":"@ctitle(10, 20)","activityType":"@ctitle(10, 20)","circulateTime":"@ctitle(10, 20)"}],"content":"@ctitle(10, 20)","duration":"@integer(0, 100)","finishTime":"@ctitle(10, 20)","receiveTime":"@ctitle(10, 20)","startTime":"@ctitle(10, 20)","toParticipants|20":[{"avatar":"@ctitle(10, 20)","departmentName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","sourceUserId":"@ctitle(10, 20)","sourceUserName":"@ctitle(10, 20)","workItemType":"@ctitle(10, 20)"}]}],"circulateList|20":[{"activityCode":"@ctitle(10, 20)","activityName":"@ctitle(10, 20)","activityType":"@ctitle(10, 20)","circulateTime":"@ctitle(10, 20)"}],"duration":"@integer(0, 100)","finishTime":"@ctitle(10, 20)","startTime":"@ctitle(10, 20)","subInstanceList|20":[{"duration":"@integer(0, 100)","finishTime":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","startTime":"@ctitle(10, 20)","status":"@ctitle(10, 20)"}],"suspendApprover|20":[{"avatar":"@ctitle(10, 20)","departmentName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","sourceUserId":"@ctitle(10, 20)","sourceUserName":"@ctitle(10, 20)","workItemType":"@ctitle(10, 20)"}],"unfinishedApprover|20":[{"avatar":"@ctitle(10, 20)","departmentName":"@ctitle(10, 20)","id":"@ctitle(10, 20)","name":"@cname","sourceUserId":"@ctitle(10, 20)","sourceUserName":"@ctitle(10, 20)","workItemType":"@ctitle(10, 20)"}]}],"msg":"@ctitle(10, 20)","traceId":"@ctitle(10, 20)"});
  }
}

// @ts-ignore
export default new WorkflowRuntimeOpenApi();
