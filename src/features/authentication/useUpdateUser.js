import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth.js";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      console.log("Update success:", data);
      toast.success("اکانت کاربر با موفقیت ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      console.log("Update error:", err);
      toast.error(err.message);
    },
  });

  console.log("useUpdateUser isUpdating:", isUpdating); // اضافه کردن لاگ
  return { updateUser, isUpdating };
}
