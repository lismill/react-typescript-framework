/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 09:16:07
 * @LastEditTime: 2022-03-08 20:34:29
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LCalendar.tsx
 */
import React from "react";
import { Card, Calendar, Badge } from "antd";

function dateCellRender(value) {
  const month = value.month();
  const date = value.date();
  // 当月日期设置
  if (month === new Date().getMonth()) {
    switch (date) {
      case 7:
        return (
          <ul className="events">
            <li>
              <Badge status="success" /> 这是成功的元素
            </li>
          </ul>
        );
      case 10:
        return (
          <ul className="events">
            <li>
              <Badge status="error" /> 这是失败的元素
            </li>
          </ul>
        );
      case 21:
        return (
          <ul className="events">
            <li>
              <Badge status="warning" /> 这是警示的元素
            </li>
          </ul>
        );
      case 23:
        return (
          <ul className="events">
            <li>
              <Badge status="processing" /> 这是进行中的元素
            </li>
          </ul>
        );
      default:
        break;
    }
  }
}

export default function DevelopAntDLCalendar() {
  return (
    <Card title="Calendar 日历" className="m-b16">
      <Calendar dateCellRender={dateCellRender} onPanelChange={(v, m) => console.log(v.format("YYYY-MM-DD"), m)} />
    </Card>
  );
}
