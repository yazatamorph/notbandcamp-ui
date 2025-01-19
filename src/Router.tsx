import { Routes, Route } from "react-router";

import { MainLayout } from "@/layouts";
import { AlbumTrackPage } from "@/routes";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<AlbumTrackPage />} />
      </Route>
    </Routes>
  );
}
