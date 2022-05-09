/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 11:47:29
 * @LastEditTime: 2022-03-12 15:32:26
 * @FilePath: \create-react-app-typescript\src\components\TableBase\index.tsx
 */
import React, { createContext, useEffect, useState } from "react";
import { Card, Spin, Modal } from "antd";
import _ from "lodash";
import Search from "./Search";
import Tools from "./Tools";
import Table from "./Table";
import Footer from "./Footer";
import "./index.scss";

export const CustomTableContext: any = createContext({});

export default function TableIndex(props) {
  const { config, handler, search, loading } = props;
  const { chooseVisible, setChooseVisible, chooses, setChooses } = props;
  const [DeepConfig, setDeepConfig] = useState(config);

  useEffect(() => {
    (() => {
      const DATA = {
        ...DeepConfig,
        params: {
          ...DeepConfig.params,
          selections: chooses,
          defaultSelections: chooses,
          selectedRowKeys: (chooses ?? []).map((item) => item.id),
        },
      };
      setDeepConfig(DATA);
    })();
  }, [chooses]); // eslint-disable-line

  const TABLE_DOM = (
    <Spin spinning={loading}>
      {config?.search?.visible && <Search />}
      <Card className={config?.search?.visible && "m-t16"} style={{ marginBottom: config?.footer?.fixed && "68px" }}>
        {config?.tools?.visible && <Tools />}
        <Table />
        <Footer />
      </Card>
    </Spin>
  );

  return (
    <CustomTableContext.Provider value={{ config, DeepConfig, setDeepConfig, handler, search }}>
      {/* 基础表格 */}
      {!DeepConfig?.choose && TABLE_DOM}

      {/* 选择表格 */}
      {DeepConfig?.choose && (
        <Modal
          className="table-choose-modal"
          title="添加数据"
          width={1000}
          keyboard={false}
          maskClosable={false}
          visible={chooseVisible}
          onCancel={() => {
            const DATA = {
              ...DeepConfig,
              params: {
                ...DeepConfig.params,
                selections: chooses,
                defaultSelections: chooses,
                selectedRowKeys: chooses.map((item) => item.id),
              },
            };
            setDeepConfig(DATA);
            setChooseVisible(false);
          }}
          onOk={() => {
            const UNION_DATAS = _.unionBy(DeepConfig.params.defaultSelections, DeepConfig.params.selections, "id");
            const UNION_DATAS_IDS = UNION_DATAS.map((item) => item.id);
            const DATA = {
              ...DeepConfig,
              params: {
                ...DeepConfig.params,
                defaultSelections: UNION_DATAS,
                selectedRowKeys: UNION_DATAS_IDS,
              },
            };
            setDeepConfig(DATA);
            setChooses(UNION_DATAS);
            setChooseVisible(false);
          }}
          destroyOnClose={true}
          {...DeepConfig.choose}
        >
          {TABLE_DOM}
        </Modal>
      )}
    </CustomTableContext.Provider>
  );
}
