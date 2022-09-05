import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import Login from './pages/Login';
import Logout from './components/Logout';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          {/* <Route exact path="/" component={Login}/> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/rooms/" component={Rooms}/>
          <Route path="/rooms/:slug" component={SingleRoom} />
          <Route path="/booknow/:slug" component={Booknow} />
          <Route path='/login' component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path='/register' component={Register}/>
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
