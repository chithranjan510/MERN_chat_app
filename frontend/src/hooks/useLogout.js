import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUserAuthData } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/logout");
      setUserAuthData(null);
    } catch (error) {
      toast.error(error.message);
      console.log("Logout error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
