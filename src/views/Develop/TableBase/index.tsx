/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 11:47:29
 * @LastEditTime: 2022-03-31 14:16:17
 * @FilePath: \create-react-app-typescript\src\views\Develop\TableBase\index.tsx
 */
import React, { useEffect, useState } from "react";
import TableBase from "@/components/TableBase";
import config from "./config";
import { message } from "antd";

export default function DevelopTable(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => search(config.params), []);

  const search = (params) => {
    console.log("config.params:::", config.params, params);
    setLoading(true);
    config.api(params).then((res) => {
      // 设置总条数
      config.footer.pagination.others.total = res.total;
      // 设置表格数据
      config.table.dataSource = res.data.map((item, index) => ({ ...item, id: index }));
      // 设置默认选中表格
      config.params.selections = [{ id: 1 }, { id: 3 }];
      config.params.selectedRowKeys = [1, 3];
      // 关闭loading
      setLoading(false);
    });
  };

  const handler = (key, data) => {
    switch (key) {
      case "handle:selection": {
        config.params.selections = data;
        break;
      }
      case "handle:new": {
        console.log(key, data);
        break;
      }
      case "handle:config": {
        console.log(key, data);
        break;
      }
      case "handle:export": {
        console.log(key, data);
        break;
      }
      case "handle:invite": {
        console.log(key, data);
        break;
      }
      case "handle:delete": {
        console.log(key, data);
        break;
      }
      case "handle:batch:setting": {
        if (config?.params?.selections?.length) {
          console.log(config.params.selections);
        } else {
          message.error("请先选择数据");
        }
        break;
      }
      case "handle:batch:delete": {
        if (config?.params?.selections?.length) {
          console.log(config.params.selections);
        } else {
          message.error("请先选择数据");
        }
        break;
      }
      default: {
        break;
      }
    }
  };
  return <TableBase config={config} handler={handler} search={search} loading={loading} />;
}
