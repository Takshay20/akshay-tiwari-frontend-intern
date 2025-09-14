export interface AttachmentItem {
  id: string;
  name: string;
  size: number;
  type?: string;
  file?: File | null;
}

export interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  attachments?: AttachmentItem[];
  createdAt: number;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
}
