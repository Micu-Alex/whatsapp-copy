import styled from "styled-components";

export const ChatContainer = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
`;

export const ChatTitle = styled.h2`
  text-align: center;
  color: #333;
`;

interface MessageWrapperProps {
  $bgColor?: string;
}

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Adjust alignment as needed */
  align-items: center; /* Align items vertically */
  background-color: #fff;
  padding: 10px;
  position: sticky;
  bottom: 0;
`;

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor || "white"};
  margin-bottom: 10px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  word-wrap: break-word;
`;

export const SenderName = styled.p`
  padding: 0 5px;
  font-weight: bold;
  margin: 0 0;
`;

export const SenderNameRight = styled(SenderName)`
  text-align: right;
`;

export const MessageText = styled.p`
  padding: 0 5px;
  margin-bottom: 0px;
  margin-top: 3px;
  max-width: 100%;
`;
export const MessageTextRight = styled(MessageText)`
  text-align: right;
`;

export const OtherUserMessage = styled(MessageText)`
  align-self: flex-start;
`;
