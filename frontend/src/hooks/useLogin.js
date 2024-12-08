import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUserAuthData } = useAuthContext();

  const login = async ({ username, password }) => {
    const success = handleLoginInputErrors({
      username,
      password,
    });

    if (!success) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setUserAuthData(data);
    } catch (error) {
      toast.error(error.message);
      console.log("Login error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

const handleLoginInputErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};

export default useLogin;
