// import logo from './logo.svg';

// import './App.css';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = () => <div><Navbar title="TEXT-STOPIA" /></div>;
// const About = () => <div><About /></div>;
// function App() {
//   return (
//     <>
//     <Routes>
//     <Route path='/' element={<Home />}/>
//     <Route path='/About' element={<About />} />
//     </Routes>
//         {/* <Router>
//     <div >
//         <Switch>
//           <Route exact path="/">
//         <Navbar title="TEXT-STOPIA" />
          
//           </Route>
//           <Route exact path="/About">
//             <About />
//           </Route>
//         </Switch>
//       </div>
//         </Router> */}
//   </>
//   );
// }


// export default App;
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutComponent from './components/About';  // Renamed to avoid conflict
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Use Suffix "r" as to avoid name conflicts
const Home = () => <div><Navbar title="TEXT-STOPIA" /></div>;
const About = () => <div><AboutComponent /></div>;  // Renamed to avoid conflict

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

