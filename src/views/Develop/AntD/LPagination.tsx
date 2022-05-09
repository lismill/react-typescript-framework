/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 09:40:03
 * @LastEditTime: 2022-03-08 20:32:36
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LPagination.tsx
 */
import React from "react";
import { Card, Pagination, Row } from "antd";

export default function DevelopAntDLPagination() {
  return (
    <Card title="Pagination 分页" className="m-b16">
      <Row justify="end">
        <Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `Total ${total} items`} />
      </Row>
    </Card>
  );
}
