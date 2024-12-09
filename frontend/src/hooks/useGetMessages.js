import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useConversation from "../zustandStore/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    if (!selectedConversation) {
      return;
    }

    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/message/${selectedConversation._id}`);

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        console.log("Get messages error: ", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(selectedConversation)]);

  return { loading, messages };
};

export default useGetMessages;
