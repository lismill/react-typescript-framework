/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-11 18:02:22
 * @LastEditTime: 2022-03-11 18:42:45
 * @FilePath: \create-react-app-typescript\src\views\Develop\Editor\World.tsx
 */
import React, { useContext } from "react";
import { Button } from "antd";
import { AContext } from "./index";

export default function DevelopEditorWorld() {
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
                selection: "world",
              },
            });
          }}
        >
          改变
        </Button>

        <div>{config.params.selection === "hello" && "asdaasdaasda"}</div>
      </div>
    </>
  );
}
