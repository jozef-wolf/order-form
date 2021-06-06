import Form from "./components/Form";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Main>
      <Form />
    </Main>
  );
}

export default App;
