import React from 'react';
import './App.scss';
import './partials/_reset.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import UploadPage from './Components/UploadPage/UploadPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
      <Header />

       <Switch>
         <Route exact path="/" component={Main}/>
         <Route path="/upload"  component={UploadPage}/>
         <Route path="/videos/:vidId" component={Main}/>
       </Switch>
      </BrowserRouter>
    );
  }
 
}

export default App;
