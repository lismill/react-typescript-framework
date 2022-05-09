/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 19:19:24
 * @LastEditTime: 2022-03-08 20:32:21
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LPopover.tsx
 */
import React from "react";
import { Card, Popover, Button } from "antd";

export default function DevelopAntDLPopover() {
  return (
    <Card title="Popover 气泡卡片" className="m-b16">
      <Popover
        placement="topLeft"
        title="Title"
        content={
          <div>
            <p>Content</p>
          </div>
        }
      >
        <Button type="primary">Popover</Button>
      </Popover>
    </Card>
  );
}
