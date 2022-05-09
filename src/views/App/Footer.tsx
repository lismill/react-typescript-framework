/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-21 16:58:02
 * @LastEditTime: 2022-03-08 20:37:37
 * @FilePath: \create-react-app-typescript\src\views\App\Footer.tsx
 */
import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

export default function AppFooter() {
  return (
    <footer className="layout-footer">
      <FooterLeft />
      <FooterRight />
    </footer>
  );
}
