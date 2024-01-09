import { useEffect, useRef, useState } from "react";
import { InputField } from "./Input.styles";
import User from "../../entities/Users";

interface Props {
  setNewMessage: (message: string) => void;
  selectedUser: User | undefined;
}

const Input = ({ setNewMessage, selectedUser }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focuses on the input field when component mounts
    }
  }, [selectedUser]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setNewMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <InputField
      ref={inputRef}
      placeholder="Enter your message..."
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
