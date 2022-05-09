/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 20:42:40
 * @LastEditTime: 2022-03-14 20:49:37
 * @FilePath: \create-react-app-typescript\src\views\Develop\TableChoose\config.ts
 */
import { GetHome } from "@/api/home/index";
const config: any = {
  api: GetHome,
  choose: {
    width: 1200,
  },
  // api参数
  params: {
    pagination: {
      page: 1,
      pageSize: 10,
    },
  },
  // 搜索框
  search: {
    // 是否显示
    visible: true,
    // 隐藏重置按钮
    hiddenReset: true,
    // 搜索条件
    forms: [
      {
        type: "input",
        label: "input",
        name: "input",
        others: {
          allowClear: true,
        },
        // rules: [{ required: true, message: "Please input your input!" }],
      },
      {
        type: "number",
        label: "number",
        name: "number",
        others: {},
        // rules: [{ required: true, message: "Please input your number!" }],
      },
    ],
  },
  // 表格
  table: {
    visible: true,
    size: "middle", // default | middle | small
    selection: {
      visible: true,
      type: "checkbox",
    },
    index: true,
    columns: [
      { type: "index" },
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", width: 110, dataIndex: "age", key: "age", sorter: (a, b) => a.age - b.age },
      { title: "住址", dataIndex: "address", key: "address" },
      {
        type: "tag",
        title: "标签",
        dataIndex: "tag",
        key: "tag",
        color: "#e74e3d",
      },
      {
        type: "status",
        title: "状态",
        dataIndex: "status",
        key: "status",
        status: "processing",
      },
      {
        type: "image",
        title: "图文",
        dataIndex: "image",
        key: "image",
        ellipsis: true,
      },
      {
        type: "custom",
        title: "自定义",
        dataIndex: "custom",
        key: "custom",
        html: (text, record, index) => `<p>${text}-${index}</p>`,
      },
    ],
  },
  // 表格底部
  footer: {
    // 是否固定
    fixed: false,
    // 右侧分页
    pagination: {
      visible: true,
      others: {
        current: 1,
        total: 85,
        showSizeChanger: true,
        showQuickJumper: () => true,
        showTotal: (total) => `共 ${total} 条数据`,
      },
    },
  },
};
export default config;
