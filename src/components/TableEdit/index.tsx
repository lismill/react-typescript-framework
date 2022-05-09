/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-10 15:55:38
 * @LastEditTime: 2022-03-15 17:00:44
 * @FilePath: \create-react-app-typescript\src\components\TableEdit\index.tsx
 */
import React from "react";
import { Table, Form, Input, Button, Select, DatePicker, TimePicker } from "antd";
import "./index.scss";

const Option = Select;
const { RangePicker } = DatePicker;

export default function TableEdit(props) {
  const { DeepConfig, setDeepConfig } = props;
  const columns = DeepConfig?.columns?.length
    ? DeepConfig.columns.map((item) => {
        if (item.type === "operate") {
          // 删除按钮
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <Button
                  key={item.button.key}
                  type={item.button.type}
                  onClick={() => {
                    const DATAS = DeepConfig.dataSource.filter((d) => d.id !== record.id);
                    setDeepConfig({ ...DeepConfig, dataSource: DATAS });
                    console.log(index, DATAS, DeepConfig);
                  }}
                  disabled={DeepConfig.disabled}
                  {...item.button}
                >
                  {item.button.text}
                </Button>
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
        } else if (item.type === "select") {
          // 下拉框
          return {
            width: 90,
            title: "#",
            ...item,
            render: (text, record, index) => {
              return (
                <Form>
                  <Form.Item
                    name={`${record.dataIndex}-${index}`}
                    rules={[{ required: true, message: `请选择${item.title}` }]}
                  >
                    <Select
                      allowClear
                      placeholder="请选择"
                      defaultValue={record[item.dataIndex]}
                      disabled={DeepConfig.disabled}
                      onChange={(v) => {
                        DeepConfig.dataSource[index] = {
                          ...DeepConfig.dataSource[index],
                          [item.dataIndex]: v,
                        };
                        setDeepConfig({ ...DeepConfig });
                      }}
                      {...item.others}
                    >
                      {item?.options?.length && item.options.map((o) => <Option value={o.value}>{o.label}</Option>)}
                    </Select>
                  </Form.Item>
                </Form>
              );
            },
          };
        } else if (item.type === "date") {
          // 日期
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <Form>
                  <Form.Item
                    name={`${record.dataIndex}-${index}`}
                    rules={[{ required: true, message: `请选择${item.title}` }]}
                  >
                    <DatePicker
                      allowClear
                      placeholder="请选择"
                      defaultValue={record[item.dataIndex]}
                      disabled={DeepConfig.disabled}
                      onChange={(time, timeString) => {
                        DeepConfig.dataSource[index] = {
                          ...DeepConfig.dataSource[index],
                          [item.dataIndex]: timeString,
                        };
                        setDeepConfig({ ...DeepConfig });
                      }}
                      {...item.others}
                    />
                  </Form.Item>
                </Form>
              );
            },
          };
        } else if (item.type === "time") {
          // 时间
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <Form>
                  <Form.Item
                    name={`${record.dataIndex}-${index}`}
                    rules={[{ required: true, message: `请选择${item.title}` }]}
                  >
                    <TimePicker
                      allowClear
                      placeholder="请选择"
                      defaultValue={record[item.dataIndex]}
                      disabled={DeepConfig.disabled}
                      onChange={(time, timeString) => {
                        DeepConfig.dataSource[index] = {
                          ...DeepConfig.dataSource[index],
                          [item.dataIndex]: timeString,
                        };
                        setDeepConfig({ ...DeepConfig });
                      }}
                      {...item.others}
                    />
                  </Form.Item>
                </Form>
              );
            },
          };
        } else if (item.type === "daterange") {
          // 日期范围
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <Form>
                  <Form.Item
                    name={`${record.dataIndex}-${index}`}
                    rules={[{ required: true, message: `请选择${item.title}` }]}
                  >
                    <RangePicker
                      allowClear
                      placeholder={["开始日期", "结束日期"]}
                      defaultValue={record[item.dataIndex]}
                      disabled={DeepConfig.disabled}
                      onChange={(time, timeString) => {
                        DeepConfig.dataSource[index] = {
                          ...DeepConfig.dataSource[index],
                          [item.dataIndex]: timeString,
                        };
                        setDeepConfig({ ...DeepConfig });
                      }}
                      {...item.others}
                    />
                  </Form.Item>
                </Form>
              );
            },
          };
        } else if (item.type === "datetimerange") {
          // 日期时间范围
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <Form>
                  <Form.Item
                    name={`${record.dataIndex}-${index}`}
                    rules={[{ required: true, message: `请选择${item.title}` }]}
                  >
                    <RangePicker
                      allowClear
                      showTime
                      placeholder={["开始时间", "结束时间"]}
                      defaultValue={record[item.dataIndex]}
                      disabled={DeepConfig.disabled}
                      onChange={(time, timeString) => {
                        DeepConfig.dataSource[index] = {
                          ...DeepConfig.dataSource[index],
                          [item.dataIndex]: timeString,
                        };
                        setDeepConfig({ ...DeepConfig });
                      }}
                      {...item.others}
                    />
                  </Form.Item>
                </Form>
              );
            },
          };
        } else {
          return {
            ...item,
            render: (text, record, index) => {
              return (
                <Form>
                  <Form.Item
                    name={`${record.dataIndex}-${index}`}
                    rules={[{ required: true, message: `请输入${item.title}` }]}
                  >
                    <Input
                      placeholder="请输入"
                      allowClear
                      defaultValue={record[item.dataIndex]}
                      onChange={(e) => {
                        DeepConfig.dataSource[index] = {
                          ...DeepConfig.dataSource[index],
                          [item.dataIndex]: e.target.value,
                        };
                        setDeepConfig({ ...DeepConfig });
                      }}
                      disabled={DeepConfig.disabled}
                      {...item.others}
                    />
                  </Form.Item>
                </Form>
              );
            },
          };
        }
      })
    : [];
  return (
    <div className="table-edit">
      {!DeepConfig.disabled && !DeepConfig.hiddenHeaderHandle && (
        <Button
          className="m-t16"
          type="primary"
          onClick={() => setDeepConfig({ ...DeepConfig, dataSource: [...DeepConfig.dataSource, { id: Date.now() }] })}
        >
          添加数据
        </Button>
      )}
      <Table
        className="m-t16"
        columns={columns}
        dataSource={DeepConfig.dataSource}
        pagination={false}
        rowKey="id"
        {...DeepConfig.others}
      />

      {!DeepConfig.disabled && !DeepConfig.hiddenFooterHandle && (
        <Button
          className="m-t16"
          type="dashed"
          block
          onClick={() => setDeepConfig({ ...DeepConfig, dataSource: [...DeepConfig.dataSource, { id: Date.now() }] })}
        >
          添加数据
        </Button>
      )}
    </div>
  );
}
