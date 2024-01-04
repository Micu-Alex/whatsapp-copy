import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList/UsersList";
import Chat from "./components/Chat/Chat";
import User from "./entities/Users";
import Message from "./entities/Messages";
import { getCurrentUser } from "./utils/userUtils";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

const Sidebar = styled.div`
  flex: 0 0 300px;
  overflow-y: auto;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

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
        <Chat
          messages={messages}
          currentUser={currentUserName}
          setNewMessage={setNewMessage}
        />
      </MainContent>
    </AppContainer>
  );
}

export default App;
