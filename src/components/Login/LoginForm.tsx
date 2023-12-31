import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Title,
} from "./Login.styles";
import { loginUser } from "../../services/LoginService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Title>Login</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(email, password);
        }}
      >
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
