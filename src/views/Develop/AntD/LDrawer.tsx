/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 17:58:44
 * @LastEditTime: 2022-03-08 20:33:35
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LDrawer.tsx
 */

import React, { useState } from "react";
import { Card, Button, Drawer, Space } from "antd";

export default function DevelopAntDLDrawer() {
  const [visible, setVisible] = useState(false);
  return (
    <Card title="Drawer 抽屉" className="m-b16">
      <Button type="primary" onClick={() => setVisible(true)}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        width="700px"
        onClose={() => setVisible(false)}
        visible={visible}
        extra={
          <Space>
            <Button
              onClick={() => {
                console.log("Cancel");
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                console.log("OK");
              }}
            >
              OK
            </Button>
          </Space>
        }
      >
        <p>Drawer Contents...</p>
      </Drawer>
    </Card>
  );
}
