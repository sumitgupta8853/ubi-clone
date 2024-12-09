import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Welcome } from "./components/welcome"
import {Items} from './components/Items'
 import './index.css'
 
 export const App = () => {
    return(
      <>
       <Header />
       <Home/>
       <Welcome/>
       <Items/>
      </>
    )
}





// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Header } from './components/Header';
// import { Home } from './components/Home';
// import { Cart } from './components/Cart'; 
// import { Items } from './components/Items';
// import { About } from './components/About'; // Import the About component
// import {Welcome} from './components/welcome'

// export const App = () => {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/items" element={<Items />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/about" element={<About />} /> {/* Add route for About page */}
//             </Routes>
//             <welcome/>
//         </Router>
//     );
// };








// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Items } from "./components/Items";
// import { Cart } from "./components/Cart";

// export const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/items" element={<Items />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// };  

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Items } from "./components/Items";
// import { Cart } from "./components/Cart";

// export const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/items" element={<Items />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// };

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Items } from "./components/Items";
// import { Cart } from "./components/Cart"; // Cart page

// export const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/items" element={<Items />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// };

