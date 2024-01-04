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
import { getOtherUserFromConversation } from "../../utils/userUtils";

interface Props {
  messages: Message[];
  currentUser: string | undefined;
  setNewMessage: (message: string) => void;
}

const Chat = ({ messages, currentUser, setNewMessage }: Props) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const otherUser = getOtherUserFromConversation(messages, currentUser!);

  return (
    <ChatContainer>
      <ChatTitle>{otherUser}</ChatTitle>
      {messages.map((msg, index) => (
        <MessageWrapper>
          <MessageContainer $isCurrentUser={msg.sender === currentUser}>
            <MessageBubble
              $bgColor={msg.sender !== currentUser ? "#e5e5ea" : "#dcf8c6"}
              $isCurrentUser={msg.sender === currentUser}
            >
              <MessageText>{msg.message}</MessageText>
            </MessageBubble>
          </MessageContainer>
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
