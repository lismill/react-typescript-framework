/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-21 16:55:31
 * @LastEditTime: 2022-03-01 13:58:15
 * @FilePath: \create-react-app-typescript\src\views\Dashboard\index.tsx
 */
import React, { useEffect, useState } from "react";
import { Card, Spin } from "antd";

import { GetHome } from "../../api/home/index";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetHome({}).then((res) => setLoading(false));
  }, []);
  return (
    <Spin spinning={loading}>
      <Card style={{ minHeight: "2000px" }} bordered={false}>
        dashboard
      </Card>
    </Spin>
  );
}
