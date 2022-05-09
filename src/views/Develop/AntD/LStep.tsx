/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 19:55:18
 * @LastEditTime: 2022-03-03 10:14:03
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LStep.tsx
 */
import React from "react";
import { Card, Steps, Popover } from "antd";

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

export default function DevelopAntDLStep() {
  return (
    <Card title="Step 步骤条" className="m-b16">
      <Steps direction="vertical" className="m-t24" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" status="process" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <Steps direction="vertical" className="m-t24" current={1} percent={60}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" status="process" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <Steps direction="vertical" className="m-t24" current={1} status="error">
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <Steps direction="vertical" className="m-t24" current={1} progressDot={customDot}>
        <Step title="Finished" description="You can hover on the dot." />
        <Step title="In Progress" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
      </Steps>

      <Steps className="m-t24" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" status="process" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <Steps className="m-t24" current={1} percent={60}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" status="process" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <Steps className="m-t24" current={1} status="error">
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <Steps className="m-t24" current={1} progressDot={customDot}>
        <Step title="Finished" description="You can hover on the dot." />
        <Step title="In Progress" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
      </Steps>
    </Card>
  );
}
