import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box alignItems="center" justifyContent="center" display="flex" my={15}>
      <Box>
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="body1" my={5}>
          Sorry, an unexpected error has occurred.
        </Typography>
      </Box>
    </Box>
  );
}
