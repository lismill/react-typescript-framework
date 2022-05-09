/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 18:36:39
 * @LastEditTime: 2022-03-08 20:31:50
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LSpin.tsx
 */
import React from "react";
import { Card, Spin } from "antd";

export default function DevelopAntDLSpin() {
  return (
    <Card title="Spin 加载中" className="m-b16">
      <div style={{ padding: "80px", textAlign: "center" }}>
        <Spin />
      </div>
    </Card>
  );
}
