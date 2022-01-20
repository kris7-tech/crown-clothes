import React from 'react'
import './App.css';
import { Switch, Route }  from 'react-router-dom';
import HomePage from  './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
  <h1>HATS PAGE</h1>
  </div>
);


const JacketsPage = () => (
  <div>
  <h1>JACKETS PAGE</h1>
  </div>
);



function App() {
  return (
    <div>
  <Switch>  
  <Route exact path='/' component={HomePage} />
  <Route path='/hats' component={HatsPage} />
  <Route path='/jackets' component={JacketsPage} />

  </Switch>
    </div>
  );
}

export default App;
