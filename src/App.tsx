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

const WelcomeStatement = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 90px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const SubStatement = styled.div`
  opacity: 0.7;
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  color: #333;
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
