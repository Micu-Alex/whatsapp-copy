import { useEffect, useState } from "react";
import { io } from "socket.io-client";

//temp
interface User {
  userID: string;
  name: string;
}

const SocketClient = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const socket = io("http://localhost:3000", {
      auth: {
        serverOffset: 0,
        token: token,
      },
      transports: ["websocket"],
    });
    socket.on("users", (users: User[], senderID) => {
      const updatedUsers = users.map((user) => ({
        ...user,
        self: user.userID === senderID,
      }));

      // Sort the users list based on certain criteria
      updatedUsers.sort((a, b) => {
        if (a.self !== b.self) {
          return a.self ? -1 : 1;
        }
        // Add additional sorting logic if needed
        return 0; // Default return value if no sorting needed
      });

      // Update the component state with the modified users data
      setUsersData(updatedUsers);
    });
  }, []);

  return (
    <div>
      <h1>Socket.IO Client</h1>
      <ul>
        {usersData.map((user) => (
          <li key={user.userID}>Name: {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocketClient;
