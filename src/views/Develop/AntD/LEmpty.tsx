/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 18:30:38
 * @LastEditTime: 2022-03-08 20:33:21
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LEmpty.tsx
 */
import React from "react";
import { Card, Empty } from "antd";

export default function DevelopAntDLEmpty() {
  return (
    <Card title="Empty 空状态" className="m-b16">
      <Empty />
    </Card>
  );
}
