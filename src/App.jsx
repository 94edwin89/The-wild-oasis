import styled from "styled-components";
import GlobalState from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;



const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalState />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>hwllo bro</Button>
        <Input type="number" placeholder="number of guest" ></Input>
      </StyledApp>
    </>
  );
}

export default App;
