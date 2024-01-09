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
  SeenIndicator,
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

  //figure out a way to dispaly the other user name if there are no message, should not be that hard you dumass
  const otherUser = getOtherUserFromConversation(messages, currentUser!);

  return (
    <>
      <ChatContainer>
        <ChatTitle>{otherUser}</ChatTitle>
        {messages.map((msg, index) => (
          <MessageWrapper key={index}>
            <MessageContainer $isCurrentUser={msg.sender === currentUser}>
              <MessageBubble
                $bgColor={msg.sender !== currentUser ? "#e5e5ea" : "#dcf8c6"}
                $isCurrentUser={msg.sender === currentUser}
              >
                <MessageText ref={endOfMessagesRef}>{msg.message}</MessageText>
              </MessageBubble>
              {/*temp*/}
              {msg.isSeen ? (
                <SeenIndicator>Seen</SeenIndicator>
              ) : (
                <SeenIndicator>Not Seen</SeenIndicator>
              )}
              {/*temp*/}
            </MessageContainer>
          </MessageWrapper>
        ))}
      </ChatContainer>
      <InputWrapper>
        <Input setNewMessage={setNewMessage} />
      </InputWrapper>
    </>
  );
};

export default Chat;
