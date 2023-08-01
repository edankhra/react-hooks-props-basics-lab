// import React from "react";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import About from "./About";
// import { username, city, image, bio, links } from './data/user';

// // pass this data down as props to the child component(s) that need it!
// import user from "../data/user";
// console.log(user);

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <About />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import About from './About';
import Home from './Home';
import NavBar from './NavBar';
import user from '../data/user';


const App = () => {
  return (
    <div>
      <NavBar />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
      <Home username={user.name} city={user.city} color={user.color} />
      {/* Add other components and content as needed */}
    </div>
  );
};

export default App;
