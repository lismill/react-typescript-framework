/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-12 17:03:49
 * @LastEditTime: 2022-03-15 16:17:15
 * @FilePath: \create-react-app-typescript\src\views\Develop\TableEdit\config.ts
 */
const config: any = {
  disabled: false,
  hiddenHeaderHandle: false,
  hiddenFooterHandle: false,
  columns: [
    { type: "index" },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      type: "select",
      title: "性别",
      dataIndex: "sex",
      key: "sex",
      options: [
        { label: "未知", value: "0" },
        { label: "男", value: "1" },
        { label: "女", value: "2" },
      ],
      others: {
        style: {
          minWidth: 100,
        },
      },
    },
    {
      type: "date",
      title: "日期",
      dataIndex: "date",
      key: "date",
    },
    {
      type: "time",
      title: "时间",
      dataIndex: "time",
      key: "time",
    },
    {
      type: "daterange",
      title: "日期范围",
      dataIndex: "daterange",
      key: "daterange",
    },
    {
      type: "datetimerange",
      title: "日期时间范围",
      dataIndex: "datetimerange",
      key: "datetimerange",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "城市",
      dataIndex: "city",
      key: "city",
    },
    {
      type: "operate",
      title: "操作",
      dataIndex: "operate",
      key: "operate",
      width: 200,
      button: {
        type: "link",
        danger: true,
        text: "删除",
      },
    },
  ],
  dataSource: [
    { id: 0, sex: "1", name: "lean", age: 1, city: "beijing" },
    { id: 1, sex: "0", name: "lee", age: 6, city: "shanghai" },
    { id: 2, name: "leelean", age: 3, city: "sh" },
  ],
  others: {
    index: true,
    size: "small",
  },
};
export default config;
