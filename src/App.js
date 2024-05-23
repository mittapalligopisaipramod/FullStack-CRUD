import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
//import {GoogleLogin} from 'react-google-login'
const clientId="30381816463-4fksmg0ngp7aa46gtme8rsgl0vk12m4p.apps.googleusercontent.com";
function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  })



  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <Logout/>
      </header>
    </div>
  );
}

export default App;