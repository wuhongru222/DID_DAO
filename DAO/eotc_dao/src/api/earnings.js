import request from "../utils/request";
//总收益
export function gettotalincome(data) {
  return request({
    url: "api/incomedetails/gettotalincome",
    method: "post",
    data,
  });
}
//收益详情
export function getincome(data, page, itemsPerPage) {
  let params = {
    page: page,
    itemsPerPage: itemsPerPage,
  };
  return request({
    url: "api/incomedetails/getincomedetails",
    method: "post",
    data,
    params,
  });
}
