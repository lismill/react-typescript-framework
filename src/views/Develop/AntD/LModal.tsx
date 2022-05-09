/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 11:32:30
 * @LastEditTime: 2022-03-08 20:32:50
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LModal.tsx
 */
import React, { useState } from "react";
import { Card, Button, Modal, Space } from "antd";

export default function DevelopAntDLModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function info() {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  function success() {
    Modal.success({
      content: "some messages...some messages...",
    });
  }

  function error() {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  }

  function warning() {
    Modal.warning({
      title: "This is a warning message",
      content: "some messages...some messages...",
    });
  }
  return (
    <Card title="Modal 对话框" className="m-b16">
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Button onClick={info}>Info</Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Card>
  );
}
