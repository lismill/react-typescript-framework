/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-21 17:14:03
 * @LastEditTime: 2022-03-10 18:00:40
 * @FilePath: \create-react-app-typescript\src\views\App\FooterLeft.tsx
 */
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import { HeartOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "./Index";
import routes from "../../router/config";
const { SubMenu } = Menu;

export default function AppFooterLeft() {
  const { collapsed, setCollapsed } = useContext(AppContext);
  const { pathname } = useLocation();
  const pathnames = pathname.split("/");
  let defaultOpenKeys =
    pathnames.length === 3
      ? [`/${pathname.split("/")[1]}`]
      : [`/${pathname.split("/")[1]}`, `/${pathname.split("/")[1]}/${pathname.split("/")[2]}`];

  return (
    <footer className="layout-footer-left" style={{ width: collapsed ? "59px" : "209px" }}>
      <div className={collapsed ? "logo center" : "logo"} style={{ width: collapsed ? "60px" : "210px" }}>
        <Link to="/">{collapsed ? "R" : "React Ant Design"}</Link>
      </div>
      <div
        className="collapsed"
        onClick={() => {
          window.localStorage.setItem("react-admin-collapsed", String(!collapsed));
          setCollapsed(!collapsed);
        }}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </div>
      <Scrollbars>
        <Menu
          className="custom-ant-menu"
          theme="dark"
          style={{ width: collapsed ? "60px" : "210px" }}
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
          inlineCollapsed={collapsed}
        >
          {routes.map((route: any) => {
            if (route?.children?.length) {
              return (
                // 二级菜单
                !route?.meta?.hidden && (
                  <SubMenu
                    className="custom-ant-first-menu"
                    key={route.path}
                    icon={route?.meta?.icon ? <FontAwesomeIcon icon={route.meta.icon} /> : <HeartOutlined />}
                    title={route?.meta?.title}
                  >
                    {route.children.map((children: any) => {
                      if (children?.children?.length) {
                        // 三级菜单
                        return (
                          <SubMenu
                            className="custom-ant-three-menu"
                            key={`${route.path}${children.path}`}
                            icon={
                              children?.meta?.icon ? <FontAwesomeIcon icon={children.meta.icon} /> : <HeartOutlined />
                            }
                            title={children?.meta?.title}
                          >
                            {children.children.map((three: any) => {
                              return (
                                !three?.meta?.hidden && (
                                  <Menu.Item
                                    className="custom-ant-three-menu"
                                    key={`${route.path}${children.path}${three.path}`}
                                  >
                                    <Link to={`${route.path}${children.path}${three.path}`}>{three?.meta?.title}</Link>
                                  </Menu.Item>
                                )
                              );
                            })}
                          </SubMenu>
                        );
                      } else {
                        return (
                          !children?.meta?.hidden && (
                            <Menu.Item
                              className="custom-ant-second-menu"
                              key={`${route.path}${children.path}`}
                              icon={
                                children?.meta?.icon ? <FontAwesomeIcon icon={children.meta.icon} /> : <HeartOutlined />
                              }
                            >
                              <Link to={`${route.path}${children.path}`}>{children?.meta?.title}</Link>
                            </Menu.Item>
                          )
                        );
                      }
                    })}
                  </SubMenu>
                )
              );
            } else {
              return (
                // 一级菜单
                !route?.meta?.hidden && (
                  <Menu.Item
                    className="custom-ant-first-menu nochildren"
                    key={`${route.path}`}
                    icon={route?.meta?.icon ? <FontAwesomeIcon icon={route.meta.icon} /> : <HeartOutlined />}
                  >
                    <Link to={route.path}>{route?.meta?.title}</Link>
                  </Menu.Item>
                )
              );
            }
          })}
        </Menu>
      </Scrollbars>
    </footer>
  );
}
