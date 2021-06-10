import React from "react";
import { RecoilRoot } from 'recoil';
import { InputValue } from "./components/inputValue/InputValue";
import { ProgressBar } from "./components/progressBar/ProgressBar";
import { Container } from "./appStyles";
 
function App() {
  return (
    <RecoilRoot>
      <Container>
        <InputValue/>
        <ProgressBar/>
      </Container>
    </RecoilRoot>
  );
}

export default App;
