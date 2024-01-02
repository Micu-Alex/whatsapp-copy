import { useState } from "react";
import User from "../../entities/Users";
import { Container, Title, ListContainer, UserItem } from "./Users.styles";

interface Props {
  users: User[];
  setSelectedUserID: (userID: string) => void;
}

const UsersList = ({ users, setSelectedUserID }: Props) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const handleUserClick = (userID: string) => {
    setSelectedUserID(userID);
    setSelectedUser(userID);
  };

  return (
    <Container>
      <Title>User List</Title>
      <ListContainer>
        {users.map((user) => (
          <UserItem
            key={user.userID}
            onClick={() => handleUserClick(user.userID)}
            isSelected={selectedUser === user.userID}
          >
            {user.self ? "You" : "Name"}: {user.name}
          </UserItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default UsersList;
