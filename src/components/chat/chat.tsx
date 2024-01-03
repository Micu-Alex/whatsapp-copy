import { useRef, useEffect } from "react";
import Message from "../../entities/Messages";
import Input from "../Input/Input";
import {
  ChatContainer,
  MessageWrapper,
  SenderName,
  ChatTitle,
  OtherUserMessage,
  SenderNameRight,
  MessageTextRight,
  InputWrapper,
} from "./Chat.styles";

interface Props {
  messages: Message[];
  currentUser: string | undefined;
  setNewMessage: (message: string) => void;
}
//NEEDS REFACTOR
const Chat = ({ messages, currentUser, setNewMessage }: Props) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ChatContainer>
      <ChatTitle>Messages:</ChatTitle>
      {messages.map((msg, index) => (
        <MessageWrapper
          $bgColor={msg.sender !== currentUser ? "#e5e5ea" : "#dcf8c6"}
        >
          <div key={index}>
            {msg.sender !== currentUser && (
              <SenderName>{msg.sender}</SenderName>
            )}
            {msg.sender === currentUser && (
              <SenderNameRight>{msg.sender}</SenderNameRight>
            )}

            {msg.sender === currentUser ? (
              <MessageTextRight>{msg.message}</MessageTextRight>
            ) : (
              <OtherUserMessage>{msg.message}</OtherUserMessage>
            )}
          </div>
        </MessageWrapper>
      ))}
      <div ref={endOfMessagesRef}></div>
      <InputWrapper>
        <Input setNewMessage={setNewMessage} />
      </InputWrapper>
    </ChatContainer>
  );
};

export default Chat;
