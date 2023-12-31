import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList";
import User from "./entities/Users";

function App() {
  const [usersData, setUsersData] = useState<User[]>([]);
  return (
    <>
      <SocketClient setUsersData={setUsersData} />
      <UsersList users={usersData} />
    </>
  );
}

export default App;
