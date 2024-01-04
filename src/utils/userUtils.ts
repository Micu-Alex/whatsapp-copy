import User from "../entities/Users"


export const getCurrentUser = (usersData: User[] | undefined) => {
    const currentUser = usersData?.find((user) => user.self);
    return currentUser?.name;
  };