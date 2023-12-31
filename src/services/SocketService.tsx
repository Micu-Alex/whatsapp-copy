import { useEffect } from "react";
import { io } from "socket.io-client";

//temp
interface User {
  userID: string;
  name: string;
}

interface Props {
  setUsersData: (users: User[]) => void;
}

const SocketClient = ({ setUsersData }: Props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
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
        return 0;
      });

      // Update the component state with the modified users data
      setUsersData(updatedUsers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
};

export default SocketClient;
