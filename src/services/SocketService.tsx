import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import User from "../entities/Users";

interface Props {
  setUsersData: (users: User[]) => void;
  selectedUserID: string | undefined;
}

const SocketClient = ({ setUsersData, selectedUserID }: Props) => {
  const socketRef = useRef<any>(null);
  useEffect(() => {
    //auth token setup
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
    //io set up
    const socket = io("http://localhost:3000", {
      auth: {
        serverOffset: 0,
        token: token,
      },
      transports: ["websocket"],
    });
    socketRef.current = socket;

    // listens for the users to be send from the server
    socket.on("users", (users: User[], senderID) => {
      const updatedUsers = users.map((user) => ({
        ...user,
        self: user.userID === senderID,
      }));

      // sort the users list based on certain criteria
      updatedUsers.sort((a, b) => {
        if (a.self !== b.self) {
          return a.self ? -1 : 1;
        }
        return 0;
      });

      // update the component state with the modified users data
      setUsersData(updatedUsers);
    });

    // clean up
    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    // Emit 'selectedUser' event when selectedUserID changes
    if (selectedUserID) {
      socketRef.current.emit("selectedUser", selectedUserID);
    }
  }, [selectedUserID]);

  return null;
};

export default SocketClient;
