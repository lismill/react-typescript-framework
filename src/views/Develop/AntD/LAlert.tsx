/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 11:25:38
 * @LastEditTime: 2022-03-08 20:35:45
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LAlert.tsx
 */
import React from "react";
import { Card, Alert, Button } from "antd";

export default function DevelopAntDLAlert() {
  return (
    <Card title="Alert 警告提示" className="m-b16">
      <Alert message="Success Text" type="success" closable />
      <Alert className="m-t16" message="Info Text" type="info" closable />
      <Alert className="m-t16" message="Warning Text" type="warning" closable />
      <Alert className="m-t16" message="Error Text" type="error" closable />
      <Alert className="m-t16" message="Success Tips" type="success" showIcon />
      <Alert className="m-t16" message="Informational Notes" type="info" showIcon />
      <Alert className="m-t16" message="Warning" type="warning" showIcon closable />
      <Alert className="m-t16" message="Error" type="error" showIcon />
      <Alert
        className="m-t16"
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Alert
        className="m-t16"
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
        action={
          <Button size="small" danger>
            Detail
          </Button>
        }
      />
      <Alert
        className="m-t16"
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      />
      <Alert
        className="m-t16"
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </Card>
  );
}
