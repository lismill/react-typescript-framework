/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 13:48:12
 * @LastEditTime: 2022-03-08 20:31:59
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LSkeleton.tsx
 */
import React, { useState } from "react";
import { Card, Skeleton, Button, List } from "antd";

export default function DevelopAntDLSkeleton() {
  const [loading, setLoading] = useState(false);
  return (
    <Card title="Skeleton 骨架屏" className="m-b16">
      <Button
        type="primary"
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1500);
        }}
      >
        Show Skeleton
      </Button>
      <Skeleton active loading={loading} paragraph={{ rows: 6 }}>
        <List
          className="m-t16"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={[
            "Racing car sprays burning fuel into crowd.",
            "Japanese princess to wed commoner.",
            "Australian walks 100km after outback crash.",
            "Man charged over missing wedding girl.",
            "Los Angeles battles huge wildfires.",
          ]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Skeleton>
    </Card>
  );
}
