/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 18:39:58
 * @LastEditTime: 2022-03-08 20:32:07
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LResult.tsx
 */
import React from "react";
import { Card, Button, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default function DevelopAntDLResult() {
  return (
    <Card title="Result 结果" className="m-b16">
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        subTitle="Please check and modify the following information before resubmitting."
        extra={
          <>
            <Button type="primary">Prev</Button>
            <Button type="primary">Next</Button>
          </>
        }
      />
    </Card>
  );
}
