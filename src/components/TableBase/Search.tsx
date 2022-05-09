/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 15:06:08
 * @LastEditTime: 2022-03-12 12:36:08
 * @FilePath: \create-react-app-typescript\src\components\TableBase\Search.tsx
 */
import React, { useState, useContext } from "react";
import { Card, Space, Form, Row, Col, Button, Input, InputNumber, Switch, Select, DatePicker, TimePicker } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { CustomTableContext } from "./index";

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function TableSearch() {
  const { config, DeepConfig, setDeepConfig, search } = useContext(CustomTableContext);
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const computedItems = () => (expand ? DeepConfig?.search?.forms : DeepConfig?.search?.forms.slice(0, 3));

  return (
    <Card className="custom-table-search-card">
      <Form
        form={form}
        name="table-search"
        className="table-search-form"
        labelCol={{ style: { width: 100 } }}
        onFinish={(v) => {
          // 重置分页
          const DATA = {
            ...DeepConfig,
            params: {
              ...DeepConfig.params,
              ...v,
              pagination: {
                ...DeepConfig.params.pagination,
                page: 1,
              },
            },
            footer: {
              ...DeepConfig.footer,
              pagination: {
                ...DeepConfig.footer.pagination,
                others: {
                  ...DeepConfig.footer.pagination.others,
                  total: config.footer.pagination.others.total,
                  current: 1,
                },
              },
            },
          };
          setDeepConfig(DATA);
          // 搜索
          search(DATA.params);
        }}
      >
        <Row gutter={32}>
          {(computedItems() ?? []).map((form: any, index: number) => {
            return (
              <Col key={index} sm={24} md={12} lg={8} xl={6} style={{ padding: 0 }}>
                {form.type === "input" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <Input placeholder={"请输入" + form.name} allowClear={true} {...form.others} />
                  </Form.Item>
                )}
                {form.type === "number" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <InputNumber placeholder={"请输入" + form.name} style={{ width: "100%" }} {...form.others} />
                  </Form.Item>
                )}
                {form.type === "switch" && (
                  <Form.Item
                    label={form.label ?? ""}
                    name={form.name ?? ""}
                    initialValue={form?.others?.defaultChecked ?? false}
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                )}
                {form.type === "select" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <Select placeholder={"请选择" + form.name} allowClear={true} {...form.others}>
                      {form?.options?.length &&
                        form.options.map((option) => {
                          return (
                            <Option key={option.key} value={option.value} disabled={option.disabled}>
                              {option.value}
                            </Option>
                          );
                        })}
                    </Select>
                  </Form.Item>
                )}
                {form.type === "date" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <DatePicker placeholder={"请选择" + form.name} style={{ width: "100%" }} {...form.others} />
                  </Form.Item>
                )}
                {form.type === "time" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <TimePicker placeholder={"请选择" + form.name} style={{ width: "100%" }} {...form.others} />
                  </Form.Item>
                )}
                {form.type === "datetime" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <DatePicker
                      placeholder={"请选择" + form.name}
                      showTime={true}
                      style={{ width: "100%" }}
                      {...form.others}
                    />
                  </Form.Item>
                )}
                {form.type === "daterange" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <RangePicker placeholder={["开始日期", "结束日期"]} style={{ width: "100%" }} {...form.others} />
                  </Form.Item>
                )}
                {form.type === "datetimerange" && (
                  <Form.Item label={form.label ?? ""} name={form.name ?? ""} rules={form.rules ?? []}>
                    <RangePicker
                      placeholder={["开始时间", "结束时间"]}
                      showTime={true}
                      style={{ width: "100%" }}
                      {...form.others}
                    />
                  </Form.Item>
                )}
              </Col>
            );
          })}
          <Col flex="auto" style={{ textAlign: "right" }}>
            <Space>
              {!DeepConfig?.search?.hiddenSubmit && (
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              )}
              {!DeepConfig?.search?.hiddenReset && (
                <Button
                  onClick={() => {
                    form.resetFields();
                    // 重置分页
                    const DATA = {
                      ...DeepConfig,
                      params: {
                        status: DeepConfig.params.status,
                        pagination: { ...DeepConfig.params.pagination, page: 1 },
                      },
                      footer: {
                        ...DeepConfig.footer,
                        pagination: {
                          ...DeepConfig.footer.pagination,
                          others: {
                            ...DeepConfig.footer.pagination.others,
                            total: config.footer.pagination.others.total,
                            current: 1,
                          },
                        },
                      },
                    };
                    setDeepConfig(DATA);
                    // 搜索
                    search(DATA.params);
                  }}
                >
                  重置
                </Button>
              )}
              {/* 折叠按钮 */}
              {DeepConfig?.search?.forms?.length > 3 && (
                <Button type="text" onClick={() => setExpand(!expand)}>
                  {expand ? (
                    <span>
                      <UpOutlined /> 折叠
                    </span>
                  ) : (
                    <span>
                      <DownOutlined /> 展开
                    </span>
                  )}
                </Button>
              )}
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
