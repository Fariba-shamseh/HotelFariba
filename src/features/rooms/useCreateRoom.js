import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRoom } from "../../services/apiRooms.js";
import toast from "react-hot-toast";

export function useCreateRoom() {
  const queryClient = useQueryClient();
  // mutation1
  const { isPending: isCreating, mutate: createRoom } = useMutation({
    mutationFn: ({ newRoomData }) => createEditRoom(newRoomData, null),
    onSuccess: () => {
      toast.success("اتاق جدید با موفقیت اضافه شد");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createRoom };
}
