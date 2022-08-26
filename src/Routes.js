import { Routes, Route } from "react-router-dom"
import { AnimaContextProvider } from "./utils/Context";

import Home from "./pages/Home";
import SingleAnimal from "./pages/SingleAnimal";


function App() {
 
  return (
    <AnimaContextProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<SingleAnimal />}/>
      </Routes>
    </AnimaContextProvider>

    
  );
}

export default App;