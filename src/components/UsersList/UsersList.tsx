import { useState } from "react";
import User from "../../entities/Users";
import { Container, Title, ListContainer, UserItem } from "./Users.styles";
import { getCurrentUser } from "../../utils/userUtils";

interface Props {
  users: User[];
  setSelectedUserID: (userID: string) => void;
}

const UsersList = ({ users, setSelectedUserID }: Props) => {
  const currentUserName = getCurrentUser(users);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const handleUserClick = (userID: string) => {
    setSelectedUserID(userID);
    setSelectedUser(userID);
  };

  return (
    <Container>
      <Title>{currentUserName}</Title>
      <ListContainer>
        {users
          .filter((user) => !user.self)
          .map((user) => (
            <UserItem
              key={user.userID}
              onClick={() => handleUserClick(user.userID)}
              $isSelected={selectedUser === user.userID}
            >
              Name: {user.name}
            </UserItem>
          ))}
      </ListContainer>
    </Container>
  );
};

export default UsersList;
