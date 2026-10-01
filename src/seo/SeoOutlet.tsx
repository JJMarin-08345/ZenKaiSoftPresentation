import { Outlet } from "react-router-dom";
import { SeoManager } from "./SeoManager";

export function SeoOutlet() {
  return (
    <>
      <SeoManager />
      <Outlet />
    </>
  );
}
