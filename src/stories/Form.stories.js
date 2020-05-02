import styled from "@emotion/styled";

import unfocus from "../helpers/unfocus";
import LoginForm from "./components/Form/Login";
import SearchBarForm from "./components/Form/SearchBar";

unfocus();

export default { title: "Form" };

export function Login() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export function SearchBar() {
  return (
    <Container>
      <SearchBarForm />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
