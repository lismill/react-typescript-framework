/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-21 16:58:53
 * @LastEditTime: 2022-03-09 11:16:13
 * @FilePath: \create-react-app-typescript\src\views\App\Index.tsx
 */
import React, { createContext, useState } from "react";
import { useLocation } from "react-router";
import Header from "@/views/App/Header";
import Footer from "@/views/App/Footer";
import Container from "@/views/App/Container";

type AppContextType = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function App() {
  /**
   * 左侧菜单折叠
   */
  const [collapsed, setCollapsed] = useState(localStorage.getItem("react-admin-collapsed") === "true");

  /**
   * 路由基座
   * 根据路由判断使用基础框架还是空白页面
   * 这个功能主要为了处理不需要头部和左侧菜单的页面
   */
  const pathnames = ["/login", "/develop/editor"];
  const { pathname } = useLocation();
  const CUSTOM_CONTAINER = pathnames.includes(pathname);

  return (
    <AppContext.Provider value={{ collapsed, setCollapsed }}>
      {!CUSTOM_CONTAINER && (
        <>
          <Header />
          <Footer />
        </>
      )}
      {CUSTOM_CONTAINER && <Container />}
    </AppContext.Provider>
  );
}
