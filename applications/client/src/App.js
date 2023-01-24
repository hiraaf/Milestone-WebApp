import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import AboutJocelyn from './pages/about/AboutJocelyn';
import AboutEdel from './pages/about/AboutEdel';
import AboutAnthony from './pages/about/AboutAnthony';
import AboutMiroslav from './pages/about/AboutMiroslav';
import AboutHira from './pages/about/AboutHira';
import AboutAnsel from './pages/about/AboutAnsel';
import SignIn from "./components/login/login";
import Register from "./components/Register/register";
import ViewPosts from "./pages/viewPosts";
import Navbar from './components/Navbar';
import CreatePost from "./components/posts/createPost";
import Footer from './pages/Footer';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";


/* 1) To create a new page, create a new .js file in the pages folder
 * 2) Next, in this file, import the .js file using its path as shown above
 * 3) If you want to add the page to the navbar, put it in the <ul> part below
 * 4) Finally, add the page to the Routes section beneath the links */
const App = () => {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>


          {/* Add a route to a page here */}
          <Route path='/' element={< Home />} />
          <Route path="/Login" element={<SignIn setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/signUp" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register/signUp" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route exact path="/createPost" element={<CreatePost />} />
          <Route exact path="/viewPosts" {...user && user._id ? <Home /> : <SignIn />} element={<ViewPosts />} />

          {/* <Route path="/" element={<Home />}/>
 
                <Route exact path="/profile" element={ <Profile />}/>

        <Route path ="/ParentRegister" element={<ParentRegister />}/>
        <Route path ="/ProviderRegister" element={<ProviderRegister />}/>

        <Route path="/childprofile" element={<ChildProfile />}/>
        <Route path="/viewPosts" element={<ViewPosts />}/>

*/}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about/jocelyn" element={<AboutJocelyn />} />
          <Route exact path="/about/edel" element={<AboutEdel />} />
          <Route exact path="/about/anthony" element={<AboutAnthony />} />
          <Route exact path="/about/miroslav" element={<AboutMiroslav />} />
          <Route exact path="/about/hira" element={<AboutHira />} />
          <Route exact path="/about/ansel" element={<AboutAnsel />} />

        </Routes>
        <Footer />

      </Router>
    </div>
  );
};

export default App;