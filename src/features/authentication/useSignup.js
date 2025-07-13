import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true }); //button back
      console.log(user);
      toast.success("حساب با موفقیت ایجاد شد");
    },
  });

  return { signup, isLoading };
}
