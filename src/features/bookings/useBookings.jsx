import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings.js";

export function useBookings() {
  const {
    isPending: isLoading,
    error,
    data: bookings,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { isLoading, bookings, error };
}

//-----------------------------------------------------------
