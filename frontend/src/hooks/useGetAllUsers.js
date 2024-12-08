import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/user");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setAllUsers(data);
      } catch (error) {
        console.log("Get all user error: ", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllUsers();
  }, []);

  return { loading, allUsers };
};

export default useGetAllUsers;
