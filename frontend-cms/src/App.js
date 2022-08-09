// import 'semantic-ui-css/semantic.min.css'
import Home from "./Pages/Home";
import Catalogue from "./Pages/catalogue/catalogue";
import Login from "./Pages/login";
import Dean from "./Pages/dean/dean";
import Hod from "./Pages/hod/hod";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Department from "./Pages/dean/Department";
import CourseDetails from "./Pages/catalogue/courseDetails"
import About from "./Pages/About/About";
import ContactForm from "./Pages/contact/contact";

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
          <Route path="/catalogue/:id" element={<CourseDetails />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/dean" element={<Dean />} />
        </Routes>
        <Routes>
          <Route path="/hod" element={<Hod />} />
        </Routes>
        <Routes>
          <Route path="/not_found" element={<NotFound />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Routes>
          <Route path="/dean/:id" element={<Department />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
