/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 15:56:14
 * @LastEditTime: 2022-03-12 12:32:08
 * @FilePath: \create-react-app-typescript\src\components\TableBase\Tools.tsx
 */
import React, { useContext } from "react";
import { Space, Radio, Button } from "antd";
import { CustomTableContext } from "./index";

export default function TableTools() {
  const { config, DeepConfig, setDeepConfig, handler, search } = useContext(CustomTableContext);
  return (
    <div className="custom-table-tools flex m-b16" style={{ justifyContent: "space-between" }}>
      {/* tabs */}
      {DeepConfig?.tools?.tabs?.visible && (
        <Radio.Group
          className="tabs"
          buttonStyle="solid"
          onChange={(e) => {
            // 重置分页
            const DATA = {
              ...DeepConfig,
              params: {
                ...DeepConfig.params,
                status: e.target.value,
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
          {...DeepConfig.tools.tabs.others}
        >
          {DeepConfig?.tools?.tabs?.data?.length &&
            DeepConfig.tools.tabs.data.map((item: any) => {
              return (
                <Radio.Button key={item.key} value={item.value} {...item.others}>
                  {item.key}
                </Radio.Button>
              );
            })}
        </Radio.Group>
      )}

      {/* toolbar */}
      {DeepConfig?.tools?.actions?.visible && (
        <Space className="toolbar">
          {DeepConfig?.tools?.actions?.buttons?.length &&
            DeepConfig.tools.actions.buttons.map((item) => {
              return (
                <Button key={item.key} type={item.type} onClick={() => handler(item.key)} {...item.others}>
                  {item.text}
                </Button>
              );
            })}
        </Space>
      )}
    </div>
  );
}
