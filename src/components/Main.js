import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Dashboard from './Dashboard';

export default function Main(){
    return(
    <main>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/aboutMe' component={AboutMe}/>
        <Route exact path='/projects' component={Projects}/>
      </Switch>
    </main>
  )
}
  