import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList/UsersList";
import Chat from "./components/Chat/Chat";
import User from "./entities/Users";
import Message from "./entities/Messages";
import { getCurrentUser, makeUsersOnline } from "./utils/userUtils";

import {
  AppContainer,
  MainContent,
  Sidebar,
  SubStatement,
  WelcomeStatement,
} from "./App.styles";

function App() {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMeassage, setNewMessage] = useState<string>();

  const currentUserName = getCurrentUser(usersData);

  makeUsersOnline(usersData, onlineUsers);

  return (
    <AppContainer>
      <SocketClient
        setUsersData={setUsersData}
        selectedUser={selectedUser}
        setMessages={setMessages}
        newMessage={newMeassage}
        setOnlineUsers={setOnlineUsers}
      />
      <Sidebar>
        <UsersList
          users={usersData}
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
        />
      </Sidebar>
      <MainContent>
        {selectedUser ? (
          <Chat
            messages={messages}
            currentUser={currentUserName}
            setNewMessage={setNewMessage}
            selectedUser={selectedUser}
          />
        ) : (
          <WelcomeStatement>
            Welcome to my app.
            <SubStatement>please select a user from the list.</SubStatement>
          </WelcomeStatement>
        )}
      </MainContent>
    </AppContainer>
  );
}

export default App;
