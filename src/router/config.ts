/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-22 11:28:23
 * @LastEditTime: 2022-03-01 20:47:01
 * @FilePath: \create-react-app-typescript\src\router\config.ts
 */
import { lazy } from "react";
import dashboard from "./dashboard";
import develop from "./develop";
import system from "./system";

const routes = [
  // 控制台
  dashboard,
  // 系统设置
  system,
  // 开发调试
  develop,
  {
    path: "/login",
    ignore: true,
    element: lazy(() => import("../views/Login")),
    meta: {
      hidden: true,
    },
  },
  {
    path: "*",
    element: lazy(() => import("../views/NoMatch")),
    meta: {
      hidden: true,
    },
  },
];
export default routes;
