import User from "../../entities/Users";
import { Container, Title, ListContainer, UserItem, Dot } from "./Users.styles";
import { getCurrentUser } from "../../utils/userUtils";

interface Props {
  users: User[];
  setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  selectedUser: User | undefined;
}

const UsersList = ({ users, setSelectedUser, selectedUser }: Props) => {
  const currentUserName = getCurrentUser(users);
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
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
              onClick={() => handleUserClick(user)}
              $isSelected={selectedUser?.userID === user.userID}
            >
              <Dot color={user.status === "online" ? "green" : "grey"} />
              Name: {user.name}
            </UserItem>
          ))}
      </ListContainer>
    </Container>
  );
};

export default UsersList;
