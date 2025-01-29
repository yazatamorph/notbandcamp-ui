import { Routes, Route } from "react-router";

import { MainLayout } from "@/layouts";
import { Release } from "@/pages";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Release />} />
      </Route>
    </Routes>
  );
}
