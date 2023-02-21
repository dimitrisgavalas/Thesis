import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Toolbar from './components/shared/Toolbar/toolbar';

function App(){

    return(

        <div className="App">

            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Courses</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>              
            </ul>
        
        <Toolbar/>
        <Router>
            <Routes>
                <Route exact path='/' element={< Home />} ></Route>
                <Route exact path='/courses' element={< Courses />}></Route>
                <Route exact path='/about' element={< About />}></Route>
            </Routes>
        </Router>
            
        </div>

    );

}

export default App;

// import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import PopularCourses from "./components/PopularCourses";
// import Universities from "./components/Universities";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <SearchBar />
//       <PopularCourses />
//       <Universities />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// Your component starts as a class extending Component instead
//  of as a function: class Cat 
// extends Component {} Class components have a render() function.

// import React, { Component } from 'react';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from './component/home';
// import About from './component/about';
// import Contact from './component/contact';
// import './App.css';

// class App extends Component {
// render() {
// 	return (
// 	<Router>
// 		<div className="App">
// 			<ul className="App-header">
// 			<li>
// 				<Link to="/">Home</Link>
// 			</li>
// 			<li>
// 				<Link to="/about">About Us</Link>
// 			</li>
// 			<li>
// 				<Link to="/contact">Contact Us</Link>
// 			</li>
// 			</ul>
// 		<Routes>
// 				<Route exact path='/' element={< Home />}></Route>
// 				<Route exact path='/about' element={< About />}></Route>
// 				<Route exact path='/contact' element={< Contact />}></Route>
// 		</Routes>
// 		</div>
// 	</Router>
// );
// }
// }

// export default App;



// import './App.scss';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import ToolbarDemo from './components/shared/toolbar';
// import GalleriaFullScreenDemo from './components/shared/footer';
// import Home from './components/core/home';

// function App() {
//   return (
//     <div className="container-fluid">
//       <ToolbarDemo />
//         <Router>

//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route element={<Home />}  />
//           </Routes>

//         </Router>
//       <GalleriaFullScreenDemo />
//     </div>
//   );
// }

// export default App;
