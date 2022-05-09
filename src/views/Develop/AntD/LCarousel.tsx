/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 19:49:23
 * @LastEditTime: 2022-03-08 20:34:13
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LCarousel.tsx
 */
import React from "react";
import { Card, Carousel } from "antd";

const contentStyle: any = {
  height: "260px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};

export default function DevelopAntDLCarousel() {
  return (
    <Card title="Carousel 走马灯" className="m-b16">
      <Carousel>
        <div>
          <div style={contentStyle}>1</div>
        </div>
        <div>
          <div style={contentStyle}>2</div>
        </div>
        <div>
          <div style={contentStyle}>3</div>
        </div>
        <div>
          <div style={contentStyle}>4</div>
        </div>
      </Carousel>
    </Card>
  );
}
