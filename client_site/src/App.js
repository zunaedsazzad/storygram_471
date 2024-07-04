import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Initial from "./components/a_initial/initial.jsx"
import Signup from "./components/regestration/sign_up/signup";
import Signin from "./components/regestration/sign_in/signin.jsx";
import Home from "./components/Home/Home.jsx"
import EmailVerification from "./components/home_1/home_1.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Initial/>}></Route>
        <Route path='/register' element={<Signup />} />
        <Route path='/verified/:token' element={<EmailVerification />} />
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
