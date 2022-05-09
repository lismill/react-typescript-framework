/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 13:54:29
 * @LastEditTime: 2022-03-08 20:30:47
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LTooltip.tsx
 */
import React from "react";
import { Card, Space, Tooltip, Button } from "antd";
const colors = ["#ff4d4f"];
export default function DevelopAntDLTooltip() {
  return (
    <Card title="Tooltip 文字提示" className="m-b16">
      <Space>
        <Tooltip placement="topLeft" title="Prompt Text">
          <Button type="primary">default</Button>
        </Tooltip>
        {colors.map((color) => {
          return (
            <Tooltip key={color} color={color} placement="topLeft" title="Prompt Text">
              <Button danger>danger</Button>
            </Tooltip>
          );
        })}
      </Space>
    </Card>
  );
}
