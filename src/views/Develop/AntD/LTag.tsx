/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 14:09:13
 * @LastEditTime: 2022-03-08 20:31:02
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LTag.tsx
 */
import React from "react";
import { Card, Space, Tag } from "antd";
import { TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";

export default function DevelopAntDLTag() {
  return (
    <Card title="Tag 标签" className="m-b16">
      <Space>
        <Tag closable={true} color="magenta">
          magenta
        </Tag>
        <Tag closable={true} color="red">
          red
        </Tag>
        <Tag closable={true} color="volcano">
          volcano
        </Tag>
        <Tag closable={true} color="orange">
          orange
        </Tag>
        <Tag closable={true} color="gold">
          gold
        </Tag>
        <Tag closable={true} color="lime">
          lime
        </Tag>
        <Tag closable={true} color="green">
          green
        </Tag>
        <Tag closable={true} color="cyan">
          cyan
        </Tag>
        <Tag closable={true} color="blue">
          blue
        </Tag>
        <Tag closable={true} color="geekblue">
          geekblue
        </Tag>
        <Tag closable={true} color="purple">
          purple
        </Tag>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
      </Space>
    </Card>
  );
}
