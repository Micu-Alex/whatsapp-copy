import Messages from "../../entities/Messages";
import {
  ChatContainer,
  MessageWrapper,
  SenderName,
  ChatTitle,
  OtherUserMessage,
  SenderNameRight,
  MessageTextRight,
} from "./Chat.styles";

interface Props {
  messages: Messages[];
  currentUser: string | undefined;
}
//NEEDS REFACTOR
const Chat = ({ messages, currentUser }: Props) => {
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
    </ChatContainer>
  );
};

export default Chat;
