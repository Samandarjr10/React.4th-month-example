import './App.scss';

import Users from './Components/Users/Users';
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

import { Routes, Route } from "react-router-dom";

function App() {
  return <div className='container'>
    <h1 className="h1 text-center text-danger mb-5">Users Api</h1>
    <Routes>
      <Route path="/*" element={<Users/>}/>
      <Route path="posts/:id" element={<Posts/>}/>
      <Route path="/comments/:id" element={<Comments/>}/>
    </Routes> 

  </div>
  
}

export default App;
