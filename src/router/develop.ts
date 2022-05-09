/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-23 20:21:57
 * @LastEditTime: 2022-03-10 16:03:22
 * @FilePath: \create-react-app-typescript\src\router\develop.ts
 */
import { lazy } from "react";

const config = {
  path: "/develop",
  redirect: "/develop/antd",
  meta: {
    title: "开发调试",
    icon: "sliders",
    hidden: false,
  },
  children: [
    {
      path: "/antd",
      element: lazy(() => import("../views/Develop/AntD")),
      meta: {
        title: "AntDesign",
        icon: "face-smile",
        hidden: false,
      },
    },
    {
      path: "/form",
      redirect: "/form/base",
      meta: {
        title: "表单",
        icon: "",
        hidden: false,
      },
      children: [
        {
          path: "/base",
          element: lazy(() => import("../views/Develop/FormBase")),
          meta: {
            title: "基础表单",
            icon: "",
            hidden: false,
          },
        },
      ],
    },
    {
      path: "/table",
      redirect: "/table/base",
      meta: {
        title: "表格",
        icon: "table",
        hidden: false,
      },
      children: [
        {
          path: "/base",
          element: lazy(() => import("../views/Develop/TableBase")),
          meta: {
            title: "基础表格",
            icon: "table",
            hidden: false,
          },
        },
        {
          path: "/choose",
          element: lazy(() => import("../views/Develop/TableChoose")),
          meta: {
            title: "选择表格",
            hidden: false,
          },
        },
        {
          path: "/edit",
          element: lazy(() => import("../views/Develop/TableEdit")),
          meta: {
            title: "编辑表格",
            hidden: false,
          },
        },
      ],
    },
    {
      path: "/editor",
      element: lazy(() => import("../views/Develop/Editor")),
      meta: {
        title: "组件编辑器",
        icon: "pen-to-square",
        hidden: false,
      },
    },
  ],
};

export default config;
