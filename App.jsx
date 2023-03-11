
import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./Components/Homepage"
import Createusers from "./Components/Createusers"
import Users from "./Components/Users"
import EditUsers from "./Components/EditUsers"

const App=()=>{
    return(
        <div>
 <BrowserRouter>
 <Homepage/>
<Routes>
        <Route path="/" element={<Createusers/>}/>
        <Route path="/users" element={<Users/>}/> 
        <Route path="/edit/:index" element={<EditUsers/>}/>
</Routes>
</BrowserRouter> 
        </div>
    )
}
export default App