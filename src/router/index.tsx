/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-21 17:27:40
 * @LastEditTime: 2022-03-08 20:40:02
 * @FilePath: \create-react-app-typescript\src\router\index.tsx
 */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config";

export default function Router() {
  return (
    <Routes>
      {routes.map((route: any) => {
        if (route?.children?.length) {
          // 二级菜单
          return (
            <Route path={route.path} key={route.path}>
              {route.children.map((children: any) => {
                if (children?.children?.length) {
                  return (
                    <Route key={`${route.path}${children.path}`} path={`${route.path}${children.path}`}>
                      {children.children.map((three: any) => {
                        return (
                          <Route
                            key={`${route.path}${children.path}${three.path}`}
                            path={`${route.path}${children.path}${three.path}`}
                            element={
                              <Suspense fallback={<div className="router-loading">Loading...</div>}>
                                <three.element />
                              </Suspense>
                            }
                          />
                        );
                      })}
                    </Route>
                  );
                } else {
                  return (
                    <Route
                      key={`${route.path}${children.path}`}
                      path={`${route.path}${children.path}`}
                      element={
                        <Suspense fallback={<div>Loading...</div>}>
                          <children.element />
                        </Suspense>
                      }
                    />
                  );
                }
              })}
            </Route>
          );
        } else {
          // 一级菜单
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <route.element />
                </Suspense>
              }
            ></Route>
          );
        }
      })}
    </Routes>
  );
}
