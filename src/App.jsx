import styled from "styled-components";
import GlobalState from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalState />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button>hwllo bro</Button>
        <Heading as="h3">check in</Heading>
        <Input as="number" placeholder="number of guest"> enter your details</Input>
      </StyledApp>
    </>
  );
}

export default App;
