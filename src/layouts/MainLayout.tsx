import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <nav>
        <h1>notBandcamp</h1>
      </nav>
      <Outlet />
    </>
  );
};
