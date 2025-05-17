import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms.js";
import supabase from "../../services/supabase.js";

export function useRooms() {
  const {
    isLoading,
    error,
    data: rooms,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  return { isLoading, rooms, error };
}

//-----------------------------------------------------------
