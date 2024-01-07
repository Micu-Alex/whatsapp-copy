import User from "../../entities/Users";
import { Container, Title, ListContainer, UserItem, Dot } from "./Users.styles";
import { getCurrentUser } from "../../utils/userUtils";

interface Props {
  users: User[];
  setSelectedUserID: (userID: string) => void;
  selectedUserID: string | undefined;
}

const UsersList = ({ users, setSelectedUserID, selectedUserID }: Props) => {
  const currentUserName = getCurrentUser(users);
  const handleUserClick = (userID: string) => {
    setSelectedUserID(userID);
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
              $isSelected={selectedUserID === user.userID}
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
