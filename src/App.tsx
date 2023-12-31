import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList";

//temp
interface User {
  userID: string;
  name: string;
}

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
