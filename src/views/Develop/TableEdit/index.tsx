/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-10 15:44:05
 * @LastEditTime: 2022-03-15 15:07:36
 * @FilePath: \create-react-app-typescript\src\views\Develop\TableEdit\index.tsx
 */
import React, { useState } from "react";
import { Card, Button } from "antd";
import config from "./config";
import TableEdit from "@/components/TableEdit";

export default function DevelopTableEdit() {
  const [DeepConfig, setDeepConfig] = useState(config);
  return (
    <>
      <Card>
        <TableEdit DeepConfig={DeepConfig} setDeepConfig={setDeepConfig} />
      </Card>
      <Card className="m-t16">
        <Button
          type="primary"
          onClick={() => {
            setDeepConfig({
              ...DeepConfig,
              disabled: !DeepConfig.disabled,
            });
          }}
        >
          编辑/禁用
        </Button>
        <div className="m-t16">{JSON.stringify(DeepConfig.dataSource)}</div>
      </Card>
    </>
  );
}
