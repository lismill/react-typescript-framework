/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 14:12:05
 * @LastEditTime: 2022-03-08 20:31:10
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LTabs.tsx
 */
import React from "react";
import { Card, Tabs } from "antd";
import { AppleOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function DevelopAntDLTabs() {
  return (
    <Card title="Tabs 标签页" className="m-b16">
      <Tabs defaultActiveKey="1" onChange={(v) => console.log(v)}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              Tab 2
            </span>
          }
          key="2"
          disabled={true}
        >
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

      <Tabs className="m-t16" type="card" size="small" defaultActiveKey="1" onChange={(v) => console.log(v)}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              Tab 2
            </span>
          }
          key="2"
          disabled={true}
        >
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Card>
  );
}
