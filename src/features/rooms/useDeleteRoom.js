import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRoom as deleteRoomApi } from "../../services/apiRooms.js";
import toast from "react-hot-toast";

export function useDeleteRoom() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteRoom } = useMutation({
    // mutationFn: (id) => deleteRoom(id),
    mutationFn: deleteRoomApi,
    onSuccess: () => {
      toast.success("اتاق با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteRoom };
}
