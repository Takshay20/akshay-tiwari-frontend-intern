import { create } from "zustand";

export type Message = {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: number;
};

export type Chat = {
  id: string;
  title: string;
  messages: Message[];
};

type ChatStore = {
  chats: Chat[];
  currentChatId: string | null;
  newChat: () => string;
  setCurrentChat: (id: string) => void;
  sendMessage: (text: string) => void;
};

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: [
    {
      id: "1",
      title: "Math Doubts",
      messages: [
        { id: "m1", sender: "user", text: "How to solve quadratic equations?", timestamp: Date.now() },
        { id: "m2", sender: "assistant", text: "Use (-b ± √(b²-4ac)) / 2a", timestamp: Date.now() },
      ],
    },
    {
      id: "2",
      title: "Science Revision",
      messages: [
        { id: "m3", sender: "user", text: "What is photosynthesis?", timestamp: Date.now() },
        { id: "m4", sender: "assistant", text: "Plants make food using sunlight 🌱", timestamp: Date.now() },
      ],
    },
    {
      id: "3",
      title: "History Notes",
      messages: [
        { id: "m5", sender: "user", text: "When did WW2 start?", timestamp: Date.now() },
        { id: "m6", sender: "assistant", text: "1939 — Germany invaded Poland.", timestamp: Date.now() },
      ],
    },
  ],
  currentChatId: null,

  newChat: () => {
    const newId = Date.now().toString();
    const newChat: Chat = { id: newId, title: "New Chat", messages: [] };
    set((state) => ({
      chats: [...state.chats, newChat],
      currentChatId: newId,
    }));
    return newId;
  },

  setCurrentChat: (id) => set({ currentChatId: id }),

  sendMessage: (text) => {
    const { chats, currentChatId } = get();
    if (!currentChatId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: Date.now(),
    };

    const updatedChats = chats.map((chat) =>
      chat.id === currentChatId
        ? { ...chat, messages: [...chat.messages, userMessage] }
        : chat
    );

    set({ chats: updatedChats });
  },
}));
