/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 20:10:10
 * @LastEditTime: 2022-03-08 20:35:30
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LBreadcrumb.tsx
 */
import React from "react";
import { Card, Breadcrumb, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

export default function DevelopAntDLBreadcrumb() {
  return (
    <Card title="Breadcrumb 面包屑" className="m-b16">
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <UserOutlined />
          <a href="/">User</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb className="m-t24">
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <UserOutlined />
          <a href="/">User</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb className="m-t24" separator=">">
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
}
