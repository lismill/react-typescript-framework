/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-21 16:26:34
 * @LastEditTime: 2022-03-08 20:17:43
 * @FilePath: \create-react-app-typescript\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./views/App/Index";
import "./assets/styles/index.scss";
import "./utils/fontawesome";
import reportWebVitals from "./reportWebVitals";

console.log(process.env.REACT_APP_VERSION);

// 修改默认主题色
ConfigProvider.config({
  theme: {
    primaryColor: "#1a73e8",
  },
});

ReactDOM.render(
  /**
   * 处理使用ant-design，严格模式下的react就会抛出警告得问题
   */
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>,
  <HashRouter>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
