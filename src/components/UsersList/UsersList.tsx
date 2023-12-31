import User from "../../entities/Users";
import { Container, Title, ListContainer, UserItem } from "./Users.styles";

interface Props {
  users: User[];
}

const UsersList = ({ users }: Props) => {
  console.log(users);

  return (
    <Container>
      <Title>User List</Title>
      <ListContainer>
        {users.map((user) => (
          <UserItem key={user.userID}>
            {user.self ? "You" : "Name"}: {user.name}
          </UserItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default UsersList;
