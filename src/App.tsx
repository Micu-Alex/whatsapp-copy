import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList/UsersList";
import Chat from "./components/Chat/Chat";
import User from "./entities/Users";
import Message from "./entities/Messages";
import { getCurrentUser } from "./utils/userUtils";

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
  const [selectedUserID, setSelectedUserID] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMeassage, setNewMessage] = useState<string>();

  const currentUserName = getCurrentUser(usersData);

  const makeUsersOnline = (usersData: User[], onlineUsers: User[]) => {
    usersData.forEach((userData) => {
      const isOnline = onlineUsers.some(
        (onlineUser) => userData.userID === onlineUser.userID
      );
      if (isOnline) {
        userData.status = "online";
      }
    });
  };
  makeUsersOnline(usersData, onlineUsers);

  return (
    <AppContainer>
      <SocketClient
        setUsersData={setUsersData}
        selectedUserID={selectedUserID}
        setMessages={setMessages}
        newMessage={newMeassage}
        setOnlineUsers={setOnlineUsers}
      />
      <Sidebar>
        <UsersList
          users={usersData}
          setSelectedUserID={setSelectedUserID}
          selectedUserID={selectedUserID}
        />
      </Sidebar>
      <MainContent>
        {selectedUserID ? (
          <Chat
            messages={messages}
            currentUser={currentUserName}
            setNewMessage={setNewMessage}
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
