import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const githubLink = "https://github.com/liza";
  const linkedinLink = "https://www.linkedin.com/in/liza/";
  return (
    <div>
      <NavBar />
      <Home color={user.color} name={user.name} city={user.city}/>
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;