import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList/UsersList";
import Chat from "./components/Chat/Chat";
import User from "./entities/Users";
import Message from "./entities/Messages";

function App() {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [selectedUserID, setSelectedUserID] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);

  const getCurrentUser = () => {
    const currentUser = usersData.find((user) => user.self);
    return currentUser?.name;
  };

  return (
    <>
      <SocketClient
        setUsersData={setUsersData}
        selectedUserID={selectedUserID}
        setMessages={setMessages}
      />
      <UsersList users={usersData} setSelectedUserID={setSelectedUserID} />
      <Chat messages={messages} currentUser={getCurrentUser()} />
    </>
  );
}

export default App;
