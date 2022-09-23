import request from "../utils/request";
//提案列表
export function getmyprops(data) {
  return request({
    url: "api/proposal/getmyproposallist",
    method: "post",
    data,
  });
}
//提案详情
export function getproposal(data, proposalId) {
  let params = {
    proposalId: proposalId,
  };
  return request({
    url: "api/proposal/getproposal",
    method: "post",
    params,
    data,
  });
}
//提交提案
export function putproposal(data) {
  return request({
    url: "api/proposal/addproposal",
    method: "put",
    data,
  });
}
