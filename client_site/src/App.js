import {useState} from 'react'
import Signup from "./components/regestration/sign_up/signup"
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signin from "./components/regestration/sign_in/signin.jsx"
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Signin />}></Route>
      <Route></Route>

     </Routes>

    </BrowserRouter>

  );
}

export default App;
