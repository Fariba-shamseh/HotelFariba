import { useUser } from "../features/authentication/UseUser.js";
import Spinner from "./Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //3.If there is NO authenticated user , redirect to the / login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isLoading, isAuthenticated, navigate],
  );

  //2. While loading , show a spinner
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Spinner />
      </div>
    );

  //4. If there is a user , render the app
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
