/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-23 20:21:57
 * @LastEditTime: 2022-03-08 20:41:57
 * @FilePath: \create-react-app-typescript\src\router\system.ts
 */
import { lazy } from "react";

const config = {
  path: "/system",
  redirect: "/system/account",
  meta: {
    title: "系统设置",
    icon: "cog",
    hidden: false,
  },
  children: [
    {
      path: "/account",
      element: lazy(() => import("../views/System/Account")),
      meta: {
        title: "账户管理",
        icon: "user",
        hidden: false,
      },
    },
    {
      path: "/role",
      element: lazy(() => import("../views/System/Role")),
      meta: {
        title: "角色管理",
        icon: "users",
        hidden: false,
      },
    },
    {
      path: "/more",
      redirect: "/system/more/list",
      meta: {
        title: "更多",
        icon: "plus-circle",
        hidden: false,
      },
      children: [
        {
          path: "/list",
          element: lazy(() => import("../views/System/More/List")),
          meta: {
            title: "列表信息",
            hidden: false,
          },
        },
        {
          path: "/detail",
          element: lazy(() => import("../views/System/More/Detail")),
          meta: {
            title: "详情信息",
            hidden: false,
          },
        },
      ],
    },
  ],
};

export default config;
