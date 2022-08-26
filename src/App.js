import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimaContextProvider } from "./Context";

import Home from "./Home";
import SingleAnimal from "./SingleAnimal";


function App() {
  return (
    <BrowserRouter>
      <AnimaContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<SingleAnimal />}/>

        </Routes>
      </AnimaContextProvider>
    </BrowserRouter>
    
  );
}

export default App;