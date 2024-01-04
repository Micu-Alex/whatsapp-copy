import Message from "../entities/Messages";
import User from "../entities/Users"


export const getCurrentUser = (usersData: User[] | undefined) => {
    const currentUser = usersData?.find((user) => user.self);
    return currentUser?.name;
  };

  export const getOtherUserFromConversation = (messages: Message[], currentUser: string) => {
    const otherUserMessage = messages.find((msg) => msg.sender !== currentUser);
    return otherUserMessage?.sender;
  };