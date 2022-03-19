import React, { useState } from 'react';
import './App.css';
// import Nav from './components/Nav';
import About from './components/pages/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

// function App() {
//   const [projects] = useState([
//   {
//     name: 'brew hops',
//     description: 'first project'
//   },
//   {
//     name: 'planet express.js',
//     description: 'second project'
//   },
//   {
//     name: 'planet express.js',
//     description: 'second project'
//   },
//   {
//     name: 'planet express.js',
//     description: 'second project'
//   }
//   ]);

//   const [currentProject, setCurrentProject] = useState(projects[0]);
  
//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Nav
//         projects={projects}
//         setCurrentProject={setCurrentProject}
//         currentProject= {currentProject}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//         {!contactSelected ? (
//           <>
//             <Portfolio currentProject={currentProject}></Portfolio>
//             <About></About>
//           </>
//         ) : (
//           <Contact></Contact>
//         )}
//       </main>
//     </div>
//   );
// }

export default App;
