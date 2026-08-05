import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const { loading, user } = useAuth();

  console.log("Protected");
  console.log("loading:", loading);
  console.log("user:", user);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    console.log("Redirecting to login");
    return <Navigate to="/login" />;
  }

  console.log("Rendering protected page");
  return children;
};

export default Protected;
