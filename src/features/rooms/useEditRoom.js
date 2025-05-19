import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRoom } from "../../services/apiRooms.js";
import toast from "react-hot-toast";
export function useEditRoom() {
  const queryClient = useQueryClient();

  const { mutate: editRoom, isPending: isEditing } = useMutation({
    mutationFn: ({ newRoomData, id }) => createEditRoom(newRoomData, id),
    onSuccess: () => {
      toast.success("اتاق جدید با موفقیت ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { editRoom, isEditing };
}
