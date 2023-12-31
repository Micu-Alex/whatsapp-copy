//temp
interface User {
  userID: string;
  name: string;
}
interface Props {
  users: User[];
}

const UsersList = ({ users }: Props) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.userID}>Name: {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
