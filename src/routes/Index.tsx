import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { GetAuditLogsByLookback } from "../api/eyespy-audit-api";

export function Index() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['lookback-timeframe'],
    queryFn: GetAuditLogsByLookback
  });

  if (isPending) {
    return (
      <Typography>Loading</Typography>
      );
  }

  if (isError) {
    return (
      <>
        <Typography>Failed to fetch data.</Typography>
        <Typography>{error.message}</Typography>
        <Typography>{error.stack}</Typography>
      </>
      );
  }

  return (
    <>
      <Typography variant="h1">Index</Typography>
      <Typography variant="h2">Server Return:</Typography>
      <Typography variant="body1">{data.message}</Typography>
    </>
  );
}
