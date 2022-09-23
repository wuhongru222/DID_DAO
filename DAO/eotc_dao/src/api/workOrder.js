import request from "../utils/request";
//提案列表
export function getworkorderlist(params) {
  return request({
    url: "api/workorder/getworkorderlist",
    method: "post",
    data: params,
  });
}
