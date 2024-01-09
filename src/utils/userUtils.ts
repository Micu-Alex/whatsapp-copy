import User from "../entities/Users"


export const getCurrentUser = (usersData: User[] | undefined) => {
    const currentUser = usersData?.find((user) => user.self);
    return currentUser?.name;
  };


export const makeUsersOnline = (usersData: User[], onlineUsers: User[]) => {
    return usersData.forEach((userData) => {
      const isOnline = onlineUsers.some(
        (onlineUser) => userData.userID === onlineUser.userID
      );
      if (isOnline) {
        userData.status = "online";
      }else {
        userData.status = "offline";
      }
    });
  };

