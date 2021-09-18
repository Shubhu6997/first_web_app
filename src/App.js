import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Posts from "./Posts";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
    <div>
    <Navbar bg = "light">
      <BrowserRouter>
        <Link exact to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/posts">Posts</Link>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/posts" component = {Posts}/>
        </Switch>
      </BrowserRouter>
    </Navbar>
    </div>
    
   </>
  );
}

export default App;
