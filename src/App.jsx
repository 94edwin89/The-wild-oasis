import styled from "styled-components";
import GlobalState from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalState />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">check in and out</Heading>
            <Button
              onClick={() => alert("check in")}
            >
              check in
            </Button>
            <Button
              variation="secondary"
              size="small"
              onClick={() => alert("check out")}
            >
              check out
            </Button>
          </div>
        </Row>

        <Row type="vertical">
          <Heading as="h3">form</Heading>
          <form>
            <Input as="number" placeholder="number of guest">
              enter your details
            </Input>
            <Input as="number" placeholder="number of guest">
              enter your details
            </Input>
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
