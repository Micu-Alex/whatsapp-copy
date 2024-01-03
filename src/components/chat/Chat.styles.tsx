import styled from "styled-components";

export const ChatContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  height: 600px; /* Adjust the height as needed */
  overflow: auto; /* Adding scroll when content overflows */
  osition: relative; /* Ensure positioning context for absolutely positioned Input */
`;

export const ChatTitle = styled.h2`
  text-align: center;
  color: #333;
`;

interface MessageWrapperProps {
  $bgColor?: string;
}

export const InputWrapper = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #fff;
  padding: 10px;
`;

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor || "white"};
  margin-bottom: 10px;
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
