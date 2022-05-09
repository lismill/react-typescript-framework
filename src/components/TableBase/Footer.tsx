/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 18:33:44
 * @LastEditTime: 2022-03-12 12:32:18
 * @FilePath: \create-react-app-typescript\src\components\TableBase\Footer.tsx
 */
import React, { useContext } from "react";
import { Pagination, Button, Space } from "antd";
import { AppContext } from "@/views/App/Index";
import { CustomTableContext } from "./index";

export default function TableFooter() {
  const { collapsed } = useContext(AppContext);
  const { config, DeepConfig, setDeepConfig, handler, search } = useContext(CustomTableContext);
  return (
    <div
      className={`custom-table-footer flex ${DeepConfig?.footer?.fixed && "fixed"}`}
      style={{
        margin: "32px 0 16px 0",
        left: collapsed ? "81px" : "231px",
        justifyContent: DeepConfig?.footer?.actions?.visible ? "space-between" : "end",
      }}
    >
      {/* 底部 - 左侧操作 */}
      {DeepConfig?.footer?.actions?.visible && (
        <div className="actions">
          <Space>
            {DeepConfig?.footer?.actions?.buttons.map((item) => {
              return (
                <Button key={item.key} type={item.type} onClick={() => handler(item.key)} {...item.others}>
                  {item.text}
                </Button>
              );
            })}
          </Space>
        </div>
      )}

      {/* 底部 - 右侧分页 */}
      {DeepConfig?.footer?.pagination && (
        <div className="pagination">
          <Pagination
            {...DeepConfig?.footer?.pagination?.others}
            onChange={(page, pageSize) => {
              // 设置分页
              const DATA = {
                ...DeepConfig,
                params: {
                  ...DeepConfig.params,
                  pagination: {
                    ...DeepConfig.params.pagination,
                    page,
                    pageSize,
                  },
                },
                footer: {
                  ...DeepConfig.footer,
                  pagination: {
                    ...DeepConfig.footer.pagination,
                    others: {
                      ...DeepConfig.footer.pagination.others,
                      total: config.footer.pagination.others.total,
                      current: page,
                    },
                  },
                },
              };
              setDeepConfig(DATA);
              // 搜索
              search(DATA.params);
            }}
          />
        </div>
      )}
    </div>
  );
}
