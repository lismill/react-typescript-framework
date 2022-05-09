/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 09:56:26
 * @LastEditTime: 2022-03-08 20:32:14
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LProgress.tsx
 */
import React from "react";
import { Card, Row, Col, Progress, Space } from "antd";

export default function DevelopAntDLProgress() {
  return (
    <Card title="Progress 进度条" className="m-b16">
      <Row gutter={32}>
        <Col span={10}>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </Col>
        <Col span={14}>
          <Space>
            <Progress type="circle" width={100} percent={75} />
            <Progress type="circle" width={100} percent={70} status="exception" />
            <Progress type="circle" width={100} percent={100} />
            <Progress percent={50} steps={3} />
            <Progress percent={30} steps={5} />
            <Progress percent={100} steps={5} size="small" strokeColor="#52c41a" />
          </Space>
        </Col>
      </Row>
    </Card>
  );
}
