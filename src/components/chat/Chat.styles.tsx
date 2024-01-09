import styled from "styled-components";

export const ChatContainer = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ChatTitle = styled.h2`
  text-align: left;
  color: #333;
  margin: 0;
  padding: 10px 0;
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
  z-index: 1;
`;

export const SenderNameContainer = styled.div`
  font-weight: bold;
  font-size: 0.8em;
  color: #888;
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  position: sticky;
  bottom: 0;
`;

export const MessageWrapper = styled.div<MessageContainerProps>`
  display: flex;
  flex-direction: column;
`;

interface MessageContainerProps {
  $bgColor?: string;
  $isCurrentUser?: boolean;
}

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  justify-content: ${(props) =>
    props.$isCurrentUser ? "flex-end" : "flex-start"};
`;
export const MessageBubble = styled.div<MessageContainerProps>`
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor || "white"};
  padding: 10px;
  max-width: 70%;
  word-wrap: break-word;
  word-break: break-word;
  margin-inline-start: 50px;
  margin-inline-end: 50px;
  align-self: ${(props) => (props.$isCurrentUser ? "flex-end" : "flex-start")};
`;

export const MessageText = styled.p`
  padding: 0 5px;
  margin-bottom: 0px;
  margin-top: 3px;
  max-width: 100%;
`;

export const SeenIndicator = styled.div`
  font-size: 0.8rem;
  color: #888;
`;
