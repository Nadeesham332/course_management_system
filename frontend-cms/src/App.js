// import 'semantic-ui-css/semantic.min.css'
import Home from "./Pages/Home";
import Catalogue from "./Pages/catalogue";
import Login from "./Pages/login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
