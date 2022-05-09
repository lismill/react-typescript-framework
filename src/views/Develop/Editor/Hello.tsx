/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-11 18:02:08
 * @LastEditTime: 2022-03-11 18:41:09
 * @FilePath: \create-react-app-typescript\src\views\Develop\Editor\Hello.tsx
 */
import React, { useContext } from "react";
import { Button } from "antd";
import World from "./World";
import { AContext } from "./index";

export default function DevelopEditorHello() {
  const { config, setConfig } = useContext(AContext);
  return (
    <>
      <div>World</div>
      <div>{JSON.stringify(config)}</div>
      <div>
        <Button
          onClick={() => {
            setConfig({
              ...config,
              params: {
                ...config.params,
                selection: "hello",
              },
            });
          }}
        >
          改变
        </Button>
      </div>
      <World />
    </>
  );
}
