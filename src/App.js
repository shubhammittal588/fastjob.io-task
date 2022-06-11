import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import SecondPage from './components/pages/SecondPage'
import ForthPage from './components/pages/ForthPage'
import ThirdPage from './components/pages/ThirdPage'
import FirstPage from './components/pages/FirstPage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/second" component={ SecondPage } />
                    <Route path="/forth" component={ ForthPage } />
                    <Route path="/third" component={ ThirdPage } />
                    <Route path="/first" component={ FirstPage } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by Shubham Mittal</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}