
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Joblist from './pages/Joblisting/Joblisting';
import Register from './pages/Register/Register';
import Jobdescription from './pages/Jobdescription/Jobdescription';
import Jobpost from './pages/Jobposting/Jobposting';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Joblist />} />
        <Route path="/register" element={< Register />} />
        <Route path="/login" element={< Login />} />
        <Route path="/add-job" element={< Jobpost />} />
        {/* <Route path="/edit-job" element={< Editpost />} /> */}
        <Route path="/jobdetails" element={< Jobdescription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
