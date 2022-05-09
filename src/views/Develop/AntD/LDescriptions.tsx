/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 19:24:56
 * @LastEditTime: 2022-03-08 20:33:43
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LDescriptions.tsx
 */
import React from "react";
import { Card, Descriptions } from "antd";

export default function DevelopAntDLDescriptions() {
  return (
    <Card title="Descriptions 描述列表" className="m-b16">
      <Descriptions title="User Info" labelStyle={{ width: "100px" }}>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Address" span={3}>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou,
          Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu
          District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
