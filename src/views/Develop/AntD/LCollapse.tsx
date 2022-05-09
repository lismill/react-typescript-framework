/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 19:30:27
 * @LastEditTime: 2022-03-08 20:34:03
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LCollapse.tsx
 */
import React from "react";
import { Card, Collapse } from "antd";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function DevelopAntDLCollapse() {
  return (
    <Card title="Collapse 折叠面板" className="m-b16">
      <Collapse defaultActiveKey={["1"]} onChange={(v) => console.log(v)}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
}
