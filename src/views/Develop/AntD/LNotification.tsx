/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 14:29:06
 * @LastEditTime: 2022-03-08 20:32:43
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LNotification.tsx
 */
import React from "react";
import { Card, Space, Button, notification } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function DevelopAntDLNotification() {
  return (
    <Card title="Notification 通知提醒框" className="m-b16">
      <Space>
        <Button
          type="primary"
          onClick={() =>
            notification.open({
              message: "Notification Title",
              description:
                "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            })
          }
        >
          Open
        </Button>
        <Button
          danger
          onClick={() =>
            notification.open({
              message: "Notification Title",
              description:
                "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
              icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
            })
          }
        >
          Error
        </Button>
        <Button
          onClick={() => {
            notification.info({
              message: `Notification Title`,
              description:
                "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
              icon: <CheckCircleOutlined style={{ color: "#108ee9" }} />,
            });
          }}
        >
          Success
        </Button>
      </Space>
    </Card>
  );
}
