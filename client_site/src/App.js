import { useState } from 'react'; // This import is unnecessary if useState is not used in this file
import Signup from "./components/regestration/sign_up/signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from "./components/regestration/sign_in/signin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
        <Route></Route> {/* This empty Route is unnecessary and should be removed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
