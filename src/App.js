import Form from "./components/Form";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: black;
`;

function App() {
  return (
    <Main>
      <Form />
    </Main>
  );
}

export default App;
