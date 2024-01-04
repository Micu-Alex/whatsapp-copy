import styled from "styled-components";

export const ChatContainer = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

export const ChatTitle = styled.h2`
  text-align: left;
  color: #333;
  margin: 0; /* Reset default margin */
  padding: 10px 0; /* Adjust padding for space */
  position: sticky; /* Make the title sticky */
  top: 0; /* Stick it at the top */
  background-color: #f5f5f5; /* Match the container's background color */
  z-index: 1; /* Ensure it's above other content */
`;

export const SenderNameContainer = styled.div`
  font-weight: bold;
  font-size: 0.8em;
  color: #888;
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Adjust alignment as needed */
  align-items: center; /* Align items vertically */
  background-color: #fff;
  padding: 10px;
  position: sticky;
  bottom: 0;
`;

export const MessageWrapper = styled.div<MessageContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 10px;
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
