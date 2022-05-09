/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-25 17:01:00
 * @LastEditTime: 2022-02-25 17:09:13
 * @FilePath: \create-react-app-typescript\src\api\home\index.ts
 */
import request from "../../utils/axios";

// 获取首页配置
export const GetHome = (params: any) => {
  return request.get("https://lismill.usemock.com/table/list", { params });
};

// 设置首页配置
export const SetHome = (params: any) => {
  return request.post("/home/config", params);
};
