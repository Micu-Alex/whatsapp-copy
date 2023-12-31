import { useRef, useEffect } from "react";
import Message from "../../entities/Messages";
import Input from "../Input/Input";
import {
  ChatContainer,
  MessageWrapper,
  ChatTitle,
  InputWrapper,
  MessageContainer,
  MessageBubble,
  MessageText,
} from "./Chat.styles";
import User from "../../entities/Users";

interface Props {
  messages: Message[];
  currentUser: string | undefined;
  setNewMessage: (message: string) => void;
  selectedUser: User | undefined;
}

const Chat = ({
  messages,
  currentUser,
  setNewMessage,
  selectedUser,
}: Props) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <ChatContainer>
        <ChatTitle>{selectedUser?.name}</ChatTitle>
        {messages.map((msg, index) => (
          <MessageWrapper key={index}>
            <MessageContainer $isCurrentUser={msg.sender === currentUser}>
              <MessageBubble
                $bgColor={msg.sender !== currentUser ? "#e5e5ea" : "#dcf8c6"}
                $isCurrentUser={msg.sender === currentUser}
              >
                <MessageText ref={endOfMessagesRef}>{msg.message}</MessageText>
              </MessageBubble>
            </MessageContainer>
          </MessageWrapper>
        ))}
      </ChatContainer>
      <InputWrapper>
        <Input setNewMessage={setNewMessage} selectedUser={selectedUser} />
      </InputWrapper>
    </>
  );
};

export default Chat;
