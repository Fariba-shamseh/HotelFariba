import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings.js";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("ویرایش با موفقیت انجام شد");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      // reset();
    },
    onError: (err) => toast.error("خطا در به‌روزرسانی تنظیمات: " + err.message),
  });
  return { isUpdating, updateSetting };
}
