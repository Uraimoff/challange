import "./App.css";
import {Routes, Route} from 'react-router-dom'
import { navbar } from "./utils/navbar";

function App() {

  return (
    <Routes>
      {
        navbar.map((value)=>(
          <Route path={value.path} element={value.element} />
        ))
      }
    </Routes>
  );
}

export default App;
