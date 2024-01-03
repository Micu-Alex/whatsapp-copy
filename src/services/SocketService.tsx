import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import User from "../entities/Users";
import Message from "../entities/Messages";

interface Props {
  setUsersData: (users: User[]) => void;
  selectedUserID: string | undefined;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  newMessage: string | undefined;
}

const SocketClient = ({
  setUsersData,
  selectedUserID,
  setMessages,
  newMessage,
}: Props) => {
  const socketRef = useRef<any>(null);
  //deals with initial setup of socket
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
        token: token,
      },
      transports: ["websocket"],
    });
    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, []);

  //deals with the "users" event
  useEffect(() => {
    if (socketRef.current) {
      // Listen for 'users' event from the server
      socketRef.current.on("users", (users: User[], senderID: any) => {
        const updatedUsers = users.map((user) => ({
          ...user,
          self: user.userID === senderID,
        }));

        updatedUsers.sort((a, b) => {
          if (a.self !== b.self) {
            return a.self ? -1 : 1;
          }
          return 0;
        });

        setUsersData(updatedUsers);
      });
    }

    return () => {
      // Clean up the 'users' event listener
      if (socketRef.current) {
        socketRef.current.off("users");
      }
    };
  }, [setUsersData]);

  // deals with selected user event
  useEffect(() => {
    if (selectedUserID) {
      setMessages([]);
      socketRef.current.emit("selectedUser", selectedUserID);
    }
  }, [selectedUserID, setMessages]);

  //deals with old messages
  useEffect(() => {
    socketRef.current.on("chat message", (data: any) => {
      const { sender, message } = data;
      const newMessage: Message = {
        sender: sender.username,
        message: message,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, [setMessages]);

  //deals with new messages
  useEffect(() => {
    if (newMessage && newMessage.trim() !== "") {
      socketRef.current.emit("chat message", {
        msg: newMessage,
        toUserID: selectedUserID,
      });
    }
  }, [newMessage, selectedUserID]);

  return null;
};

export default SocketClient;
