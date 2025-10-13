import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("IsLoggedIn") === "true"

  return isLoggedIn ? children : <Navigate to="/" replace />
}

export default ProtectedRoute