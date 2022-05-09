/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 13:44:25
 * @LastEditTime: 2022-03-08 20:32:29
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LPopconfirm.tsx
 */
import React from "react";
import { Card, Popconfirm, Button } from "antd";

export default function DevelopAntDLPopconfirm() {
  return (
    <Card title="Popconfirm 气泡确认框" className="m-b16">
      <Popconfirm
        placement="topLeft"
        title="Are you sure to delete this task?"
        onConfirm={(v) => {
          console.log(v);
        }}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">Popconfirm</Button>
      </Popconfirm>
    </Card>
  );
}
