import React, { useEffect, useState } from 'react'
import './styleing/App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import ContactUs from './ContactUs'
import AbutUs from './AbutUs';



function App() {

  return (
    <main>
    
      <Switch>
        <Route path='/Login' exact>
          <Login />
        </Route>
        <Route path='/' exact component={Home} />
        <Route path='/ContactUs' exact component={ContactUs} />
        <Route path='/AbutUs' exact component={AbutUs} />
      </Switch>
    </main>
  )
}

export default App;
