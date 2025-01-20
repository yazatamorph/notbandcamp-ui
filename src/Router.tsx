import { Routes, Route } from "react-router";

import { MainLayout } from "@/layouts";
import { AlbumPage } from "@/routes";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<AlbumPage />} />
      </Route>
    </Routes>
  );
}
