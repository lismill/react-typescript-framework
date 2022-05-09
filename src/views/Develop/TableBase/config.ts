/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 20:42:40
 * @LastEditTime: 2022-03-12 16:56:31
 * @FilePath: \create-react-app-typescript\src\views\Develop\TableBase\config.ts
 */
import { GetHome } from "@/api/home/index";
const config: any = {
  api: GetHome,
  // api参数
  params: {
    input: "",
    number: "",
    status: "beijing",
    pagination: {
      page: 1,
      pageSize: 10,
    },
  },
  // 搜索框
  search: {
    // 是否显示
    visible: true,
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
      // {
      //   type: "switch",
      //   label: "switch",
      //   name: "switch",
      //   others: {
      //     defaultChecked: true,
      //   },
      // },
      // {
      //   type: "select",
      //   label: "select",
      //   name: "select",
      //   options: [
      //     { key: "aaa", value: "111" },
      //     { key: "bbb", value: "222", disabled: true },
      //   ],
      //   others: {
      //     mode: "multiple",
      //     showSearch: true,
      //     filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      //   },
      //   rules: [{ required: true, message: "Please input your select!" }],
      // },
      // {
      //   type: "date",
      //   label: "date",
      //   name: "date",
      //   others: {},
      //   rules: [{ required: true, message: "Please input your date!" }],
      // },
      // {
      //   type: "time",
      //   label: "time",
      //   name: "time",
      //   others: {},
      //   rules: [{ required: true, message: "Please input your time!" }],
      // },
      // {
      //   type: "datetime",
      //   label: "datetime",
      //   name: "datetime",
      //   others: {},
      //   rules: [{ required: true, message: "Please input your datetime!" }],
      // },
      // {
      //   type: "daterange",
      //   label: "daterange",
      //   name: "daterange",
      //   others: {},
      //   rules: [{ required: true, message: "Please input your daterange!" }],
      // },
      // {
      //   type: "datetimerange",
      //   label: "datetimerange",
      //   name: "datetimerange",
      //   others: {},
      //   rules: [{ required: true, message: "Please input your datetimerange!" }],
      // },
    ],
  },
  // 表格上部工具栏
  tools: {
    // 是否显示
    visible: true,
    // 左侧状态筛选
    tabs: {
      // 是否显示
      visible: true,
      others: {
        defaultValue: "beijing",
      },
      data: [
        { key: "beijing", value: "beijing" },
        { key: "shanghai", value: "shanghai" },
        {
          key: "shenzhen",
          value: "shenzhen",
          others: {
            disabled: true,
          },
        },
      ],
    },
    // 右侧功能按钮
    actions: {
      // 是否显示
      visible: true,
      buttons: [
        {
          key: "handle:new",
          type: "primary",
          text: "新建",
        },
        {
          key: "handle:config",
          type: "primary",
          text: "配置",
          others: {
            style: {
              backgroundColor: "#52c41a",
              borderColor: "#52c41a",
            },
          },
        },
        {
          key: "handle:export",
          text: "导出",
        },
      ],
    },
  },
  // 表格
  table: {
    visible: true,
    size: "default", // default | middle | small
    selection: {
      visible: true,
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
      {
        type: "operate",
        title: "操作",
        dataIndex: "operate",
        key: "operate",
        width: 200,
        buttons: [
          {
            key: "handle:invite",
            type: "link",
            text: "Invite",
          },
          {
            key: "handle:delete",
            type: "link",
            text: "Delete",
          },
        ],
      },
    ],
  },
  // 表格底部
  footer: {
    // 是否固定
    fixed: true,
    // 左侧功能按钮
    actions: {
      visible: true,
      buttons: [
        {
          key: "handle:batch:setting",
          type: "primary",
          text: "批量设置",
        },
        {
          key: "handle:batch:delete",
          type: "danger",
          text: "批量删除",
        },
      ],
    },
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
