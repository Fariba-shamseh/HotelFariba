import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth.js";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("ERRoR", err);
      toast.error("پسورد یا ایمیل اشتباه است");
    },
  });
  return { login, isLoading };
}
