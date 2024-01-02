export default interface Message {
  message: string;
  sender: {
    username: string;
  };
  receiver: {
    username: string;
  };
}
