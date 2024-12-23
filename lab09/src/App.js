import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import User from './components/user';
function App() {
return (
<Router>
<div>
    <Navbar/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/contact" element={<Contact />} />
<Route path="/user/:userId" element={<User />} />
</Routes>
</div>
</Router>
);
}
export default App;