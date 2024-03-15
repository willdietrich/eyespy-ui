import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import PermanentDrawerLeft from "../components/navigation/PermanentDrawerLeft";

export function Root() {
  return (
    <>
      <CssBaseline />
      <PermanentDrawerLeft>
        <Outlet />
      </PermanentDrawerLeft>
    </>
  );
}
