/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-04 18:02:55
 * @LastEditTime: 2022-03-11 18:16:24
 * @FilePath: \create-react-app-typescript\src\views\Develop\Editor\index.tsx
 */
import React, { createContext, useState } from "react";
import Hello from "./Hello";
import DConfig from "./config";

export const AContext: any = createContext({});

export default function DevelopEditor() {
  const [config, setConfig] = useState(DConfig);
  return (
    <AContext.Provider value={{ config, setConfig }}>
      <Hello></Hello>
    </AContext.Provider>
  );
}
