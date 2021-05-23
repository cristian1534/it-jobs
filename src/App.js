import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import DevsDetails from './pages/DevsDetails';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Faq from './pages/Faq';
import Jobs from './pages/Jobs';
import NewProfile from './pages/NewProfile';
import { Account } from './components/Account';
import NewJob from './components/NewJob';
import EditJob from './pages/EditJob';
import Chatroom from './pages/Chatroom';
import { API } from 'aws-amplify';
import './App.css';

function App() {
 
  async function fetchMessage() {
    API.get("itjobs", "/api/",{})
        .then( res => {
          console.log(res.success)
        })
        .catch(err => {
          console.log(err)
        })
  }

  useEffect(() => {
    fetchMessage();
  },[]);

  return (
    <div>
    <Router>
      <Switch>
        <Account>
          <Layout>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/register" component={ Register }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/contact" component={ Contact }/>
            <Route exact path="/about" component={ About }/>
            <Route exact path="/faq" component={ Faq }/>
            <Route exact path="/dev" component={ DevsDetails }/>
            <Route exact path="/jobs" component={ Jobs }/>
            <Route exact path="/profile" component={ EditProfile }/>
            <Route exact path="/newprofile" component={ NewProfile }/>
            <Route exact path="/newjob" component={ NewJob }/>
            <Route exact path="/editjob" component={ EditJob }/>
            <Route exact path="/chatroom" component={ Chatroom }/>
          </Layout>  
        </Account> 
      </Switch>
    </Router>
    </div>
  );
}

export default App;
