import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../services/apiAuth.js";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isPending: isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last=${numDays}`],
  });

  return { isLoading, bookings };
}
