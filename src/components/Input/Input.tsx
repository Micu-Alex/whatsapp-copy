import { useState } from "react";
import { InputField } from "./Input.styles";

interface Props {
  setNewMessage: (message: string) => void;
}

const Input = ({ setNewMessage }: Props) => {
  const [inputValue, setInputValue] = useState("");

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
      placeholder="Enter your message..."
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
