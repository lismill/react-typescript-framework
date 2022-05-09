/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 11:47:29
 * @LastEditTime: 2022-03-12 15:31:10
 * @FilePath: \create-react-app-typescript\src\views\Develop\TableChoose\index.tsx
 */
import React, { useEffect, useState } from "react";
import { Card, Button, Row } from "antd";
import TableBase from "@/components/TableBase";
import config from "./config";

export default function DevelopTable(props) {
  const [loading, setLoading] = useState(false);
  const [chooseVisible, setChooseVisible] = useState(false);
  const [chooses, setChooses] = useState([]);

  const search = (params) => {
    console.log("config.params:::", config.params, params);
    setLoading(true);
    config.api(params).then((res) => {
      // 设置总条数
      config.footer.pagination.others.total = res.total;
      // 设置表格数据
      config.table.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => ({
        id,
        address: "EK5q",
        age: "JGUpO",
        custom: "qtF5%n",
        image: "0",
        name: "gdb",
        status: "eu Ut anim",
        tag: "@iZ!d8",
      }));
      // 设置默认选中表格
      config.params.defaultSelections = [
        {
          id: 2,
          address: "EK5q",
          age: "JGUpO",
          custom: "qtF5%n",
          image: "0",
          name: "gdb",
          status: "eu Ut anim",
          tag: "@iZ!d8",
        },
        {
          id: 4,
          address: "EK5q",
          age: "JGUpO",
          custom: "qtF5%n",
          image: "0",
          name: "gdb",
          status: "eu Ut anim",
          tag: "@iZ!d8",
        },
      ];
      setChooses(config.params.defaultSelections);
      config.params.selectedRowKeys = (config?.params?.defaultSelections ?? []).map((item) => item.id);
      // 关闭loading
      setLoading(false);
    });
  };
  useEffect(() => search(config.params), []);

  return (
    <Card>
      <Row className="m-b16">
        <Button type="primary" onClick={() => setChooseVisible(true)}>
          添加数据
        </Button>
      </Row>
      <div className="m-t16">
        {chooses.map((item: any, index: number) => (
          <Row align="middle" className="m-t16" key={item.id}>
            {item.id} - {item.name} - {item.age} - {item.address} - {item.tag} - {item.status} -
            <Button
              type="primary"
              size="small"
              danger
              onClick={() => {
                const RESULT = chooses.filter((c: { id: string | number }) => c.id !== item.id);
                setChooses(RESULT);
              }}
            >
              Delete
            </Button>
          </Row>
        ))}
      </div>
      <TableBase
        config={config}
        search={search}
        loading={loading}
        chooseVisible={chooseVisible}
        setChooseVisible={setChooseVisible}
        chooses={chooses}
        setChooses={setChooses}
      />
    </Card>
  );
}
