import Profile from "./Profile"
import Body from "./Body"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"


function App() {
  

  return (
    <>

      <BrowserRouter basename="/">
      <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
      
      
      </>
  )
}

export default App
