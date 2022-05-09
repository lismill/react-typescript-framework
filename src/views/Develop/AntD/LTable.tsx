/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 18:56:46
 * @LastEditTime: 2022-03-08 20:31:20
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LTable.tsx
 */
import React from "react";
import { Card, Table } from "antd";

const dataSource: any = [];
for (let i = 0; i < 20; i++) {
  dataSource.push({
    key: i,
    name: `胡彦斌 - ${i + 1}`,
    age: i + 1,
    address: "西湖区湖底公园1号",
  });
}

const columns = [
  {
    title: "序号",
    render: (text, record, index): any => `${index + 1}`,
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

export default function DevelopAntDLTable() {
  return (
    <Card title="Table 表格" className="m-b16">
      <h4>这是一个基础表格</h4>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
}
