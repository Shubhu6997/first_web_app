import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import About from "./About";
import Posts from "./Posts";
import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    return(
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
            <p>Home Page</p>
         <img src = ""/>
    </>
    )
}

export default Home;