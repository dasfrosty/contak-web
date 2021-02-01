import * as React from "react";
import { Redirect } from "react-router-dom";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import { useInputChangeWrapper } from "./common/hooks";
import { useTokenAuthMutation } from "./graphql/mutations";

const { useCallback, useState } = React;

export function LoginPage() {
  return (
    <Container className="text-center">
      <h1>Contak</h1>
      <h2 className="h5">Please sign in</h2>
      <LoginForm />
    </Container>
  );
}

function LoginForm() {
  const [message, setMessage] = useState("");
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const handleInputChange = useCallback(
    (name: string, value: string) => {
      setMessage("");
      const fieldUpdates = { [name]: value };
      setFormFields((fields) => ({ ...fields, ...fieldUpdates }));
    },
    [setFormFields, setMessage],
  );
  const handleChange = useInputChangeWrapper(handleInputChange);

  const { tokenAuthMutation, tokenAuthMutationResult } = useTokenAuthMutation();
  const handleSubmit = useCallback(() => {
    tokenAuthMutation({ variables: { ...formFields } }).catch((reason) => {
      setMessage(reason.message);
    });
  }, [tokenAuthMutation, formFields]);

  if (tokenAuthMutationResult.data?.tokenAuth?.token != undefined) {
    return <Redirect to="/app" />;
  }

  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Username</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="username" value={formFields.username} onChange={handleChange} />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Password</InputGroupText>
          </InputGroupAddon>
          <Input
            type="password"
            name="password"
            value={formFields.password}
            onChange={handleChange}
          />
        </InputGroup>
      </FormGroup>
      {message != "" && <Alert color="danger">{message}</Alert>}
      <Button onClick={handleSubmit}>Login</Button>
    </Form>
  );
}
