/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 17:20:33
 * @LastEditTime: 2022-03-08 20:33:28
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LEditText.tsx
 */
import React, { useState } from "react";
import { Card, Typography } from "antd";

const { Paragraph } = Typography;

export default function DevelopAntDLEditText() {
  const [name, setName] = useState("Defaule Text");
  return (
    <Card title="EditText 可编辑文本" className="m-b16">
      <Paragraph editable={{ onChange: (v: string) => setName(v) }}>{name}</Paragraph>
      可编辑文本
    </Card>
  );
}
