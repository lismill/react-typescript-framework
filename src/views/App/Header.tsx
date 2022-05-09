/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-21 16:57:57
 * @LastEditTime: 2022-03-08 20:37:11
 * @FilePath: \create-react-app-typescript\src\views\App\Header.tsx
 */
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Avatar, Menu, Dropdown } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import routes from "../../router/config";
import { AppContext } from "./Index";
import getBreadcrumb from "./config/breadcrumb";

export default function AppHeader() {
  const { collapsed } = useContext(AppContext);
  const menus = [
    { path: "", title: "修改资料" },
    { path: "#/login", title: "退出登录" },
  ];

  // 面包屑
  const { pathname } = useLocation();
  const pathnames = pathname.split("/");
  const breadcrumb = getBreadcrumb(pathnames, routes);
  return (
    <header className="layout-header" style={{ display: "flex" }}>
      <div className="left flex">
        <div className="logo" style={{ width: collapsed ? "80px" : "230px" }}></div>
        <Breadcrumb>
          <Breadcrumb.Item key="/" href="/">
            <HomeOutlined /> 首页
          </Breadcrumb.Item>
          {breadcrumb.map((router: any) => {
            return (
              // BrowserRouter
              // <Breadcrumb.Item key={router.path} href={router.redirect ? router.redirect : router.path`}>

              // HashRouter
              <Breadcrumb.Item
                key={router.title ?? ""}
                href={router.redirect ? `#${router.redirect}` : `#${router.path}`}
              >
                {router.title}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
      <div className="right flex">
        <Avatar className="avatar">U</Avatar>
        <Dropdown
          className="username"
          overlay={
            <Menu>
              {menus.map((menu: any) => (
                <Menu.Item key={menu.title}>
                  <a rel="noopener noreferrer" href={menu.path}>
                    {menu.title}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          }
          placement="bottomRight"
          arrow
        >
          <span>LeeLean</span>
        </Dropdown>
      </div>
    </header>
  );
}
