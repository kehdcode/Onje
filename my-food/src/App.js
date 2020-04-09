import React, { useState, Component } from 'react';
import Navigation from './Components/NavBar'
import './App.css';
import { DISHES } from './shared/dishes'
import Menu from './Components/Menu'
import Footer from './Components/Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dishes: DISHES.items
    }
  }
  render(){
    return(
      <div>
        <Navigation />
        <Menu dishes={this.state.dishes}/>
        <Footer />
      </div>
    )
  }

}

export default App;