import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Write from './pages/write';
import Login from './pages/login';
import BlogDetail from './pages/blogdetailpage';
import Newblog from './components/newblog';
import Signup from './pages/signup';
import Forgotpassword from './pages/forgotpassword';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/write' element={<Write/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route path='/blogdetail' element={<BlogDetail/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
