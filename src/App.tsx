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
  const [selectedUserID, setSelectedUserID] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMeassage, setNewMessage] = useState<string>();

  const currentUserName = getCurrentUser(usersData);

  return (
    <AppContainer>
      <SocketClient
        setUsersData={setUsersData}
        selectedUserID={selectedUserID}
        setMessages={setMessages}
        newMessage={newMeassage}
      />
      <Sidebar>
        <UsersList users={usersData} setSelectedUserID={setSelectedUserID} />
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
