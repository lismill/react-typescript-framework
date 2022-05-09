/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 14:18:09
 * @LastEditTime: 2022-03-08 20:33:51
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LCountdown.tsx
 */
import React from "react";
import { Card, Row, Col, Statistic } from "antd";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60;

export default function DevelopAntDLCountdown() {
  return (
    <Card title="Countdown 倒计时" className="m-b16">
      <Row gutter={16}>
        <Col span={8}>
          <Countdown
            title="Countdown"
            value={deadline}
            onFinish={() => console.log("finished!")}
            onChange={(val: any) => {
              if (4.95 * 1000 < val && val < 5 * 1000) {
                console.log("changed!");
              }
            }}
          />
        </Col>
        <Col span={8}>
          <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
        </Col>
        <Col span={8} className="m-t16">
          <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
        </Col>
      </Row>
    </Card>
  );
}
