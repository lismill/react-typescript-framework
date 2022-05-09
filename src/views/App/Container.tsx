/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 09:26:12
 * @LastEditTime: 2022-03-08 20:42:44
 * @FilePath: \create-react-app-typescript\src\views\App\Container.tsx
 */
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Routes from "../../router/index";

export default function AppContainer() {
  // 切换路由滚动条到顶部
  const scrollbar: any = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    scrollbar?.current?.view?.scroll({ top: 0 });
  }, [pathname]);
  return (
    <div className="layout-container-right">
      <Scrollbars className="container" ref={scrollbar}>
        <Routes />
      </Scrollbars>
    </div>
  );
}
