 import styled from "styled-components";
 
 const H1 = styled.h1`
  font-weight: 600px;
  font-family: 'Courier New', Courier, monospace;
  background-color: yellow;
 `

 const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  color: white;
  background-color: purple;
  cursor: pointer;
 `
 function App(){
  return(
    <div>
    <H1>The Wild Oasis</H1>
    <Button>hwllo bro</Button>
    </div>
  )
}

export default App;