import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { GetAuditLogsByLookback } from "../api/eyespy-audit-api";

export function Index() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['lookback-timeframe'],
    queryFn: () => GetAuditLogsByLookback(30)
  });

  if (isPending) {
    return (
      <Typography>Loading...</Typography>
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

  interface AuditResult {
    channel: string,
    channel_id: number,
    user: string,
    user_id: number,
    join_time: string,
    leave_time: string
  }

  const renderResults = (results: AuditResult[]) => {
    return results.map((result) => {
      return (
        <>
          <Typography variant="h3">{result.channel}:{result.channel_id}</Typography>
          <Typography variant="body1">{result.user}:{result.user_id}</Typography>
          <Typography variant="body1">{result.join_time}:{result.leave_time}</Typography>
        </>
      )
    });
  };

  return (
    <>
      <Typography variant="h1">Index</Typography>
      <Typography variant="h2">Server Return:</Typography>
      {renderResults(data.results)}
    </>
  );
}
