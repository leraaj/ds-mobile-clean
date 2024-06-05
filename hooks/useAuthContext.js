import React from "react"; // Ensure React is imported
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
