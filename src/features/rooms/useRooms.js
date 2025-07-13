import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms.js";

export function useRooms() {
  const {
    isPending: isLoading,
    error,
    data: rooms,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  return { isLoading, rooms, error };
}

//-----------------------------------------------------------
