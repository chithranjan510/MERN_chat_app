import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  userSearchFilter: "",
  setUserSearchFilter: (userSearchFilter) => set({ userSearchFilter }),
}));

export default useConversation;
