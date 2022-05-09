/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-23 20:21:57
 * @LastEditTime: 2022-03-01 13:51:29
 * @FilePath: \create-react-app-typescript\src\router\dashboard.ts
 */
import { lazy } from "react";

const config = {
  path: "/",
  element: lazy(() => import("../views/Dashboard")),
  meta: {
    title: "控制台",
    icon: "gauge",
    hidden: false,
  },
};
export default config;
