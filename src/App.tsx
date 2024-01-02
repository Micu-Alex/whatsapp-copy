import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList/UsersList";
import User from "./entities/Users";

function App() {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [selectedUserID, setSelectedUserID] = useState<string>();
  return (
    <>
      <SocketClient
        setUsersData={setUsersData}
        selectedUserID={selectedUserID}
      />
      <UsersList users={usersData} setSelectedUserID={setSelectedUserID} />
    </>
  );
}

export default App;
