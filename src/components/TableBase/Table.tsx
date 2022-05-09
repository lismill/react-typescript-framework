/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 15:15:43
 * @LastEditTime: 2022-03-14 20:36:44
 * @FilePath: \create-react-app-typescript\src\components\TableBase\Table.tsx
 */
import React, { useContext, useEffect, useState } from "react";
import { Space, Table, Button, Tag, Badge, Avatar } from "antd";
import { CustomTableContext } from "./index";

export default function TableTable() {
  const { config, DeepConfig, setDeepConfig, handler } = useContext(CustomTableContext);
  const columns = DeepConfig?.table?.columns?.length
    ? DeepConfig.table.columns.map((item) => {
        // 自定义
        if (item.type === "custom") {
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <div
                  className="dangerouslySetInnerHTML"
                  dangerouslySetInnerHTML={{ __html: item.html(text, record, index) }}
                />
              );
            },
          };
        } else if (item.type === "index") {
          // 索引号
          return {
            width: 90,
            title: "#",
            ...item,
            render: (text, record, index) => `${index + 1}`,
          };
        } else if (item.type === "tag") {
          // 标签
          return {
            ...item,
            render: (text, record, index) => {
              return <Tag color={item.color}>{text}</Tag>;
            },
          };
        } else if (item.type === "status") {
          // 状态
          return {
            ...item,
            render: (text, record, index) => {
              return <Badge status={item.status} text={text} />;
            },
          };
        } else if (item.type === "image") {
          // 图文
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <Space>
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                  <span>{text}</span>
                </Space>
              );
            },
          };
        } else if (item.type === "operate") {
          // 操作列
          return {
            ...item,
            render: (text, record) => {
              if (item?.buttons?.length) {
                return (
                  <Space size="middle">
                    {item.buttons.map((button) => (
                      <Button key={button.key} type={button.type} onClick={() => handler(button.key, record)}>
                        {button.text}
                      </Button>
                    ))}
                  </Space>
                );
              }
            },
          };
        } else {
          return item;
        }
      })
    : [];

  // 默认选中
  const [keys, setKeys] = useState([]);
  useEffect(() => setKeys(DeepConfig.params.selectedRowKeys), [DeepConfig.params.selectedRowKeys]);
  const rowSelection = DeepConfig?.table?.selection?.visible
    ? {
        onChange: (keys: any, rows: any) => {
          if (DeepConfig?.params) {
            setKeys(keys);
            const DATA = {
              ...DeepConfig,
              params: {
                ...DeepConfig.params,
                selections: rows,
              },
            };
            setDeepConfig(DATA);
            config.params.selections = rows;
          }
        },
        getCheckboxProps: (record) => ({
          disabled: DeepConfig.choose && (DeepConfig?.params?.selectedRowKeys ?? []).includes(record.id),
        }),
        type: DeepConfig.table.selection.type,
        selectedRowKeys: keys,
      }
    : false;

  return (
    <>
      {DeepConfig?.table?.visible && (
        <Table
          className="custom-table"
          dataSource={DeepConfig.table.dataSource}
          rowKey={(columns) => columns.id}
          rowSelection={rowSelection}
          pagination={false}
          {...DeepConfig.table}
          columns={columns}
        />
      )}
    </>
  );
}
