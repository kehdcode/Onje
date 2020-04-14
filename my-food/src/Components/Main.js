import React, { Component} from 'react'
import { DISHES } from '../shared/dishes'
import Home from './Home'
import Menu from './Menu'
import Footer from './Footer'
import Navigation from './NavBar'
import Contact from './Contact'
import { Switch, Route, Redirect } from 'react-router-dom'



class Main extends Component {
   constructor(props){
       super(props)
       this.state = {
           dishes : DISHES.items
       }

   }
   render(){
       return(
           <div>
             <Navigation />
             <Switch >
                <Route path="/home" component={Home} />
                <Route exact path="/menu" component={() =><Menu dishes={this.state.dishes} />} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/home" />
             </Switch>
            
             <Footer />
           </div>
       )
   }
}

export default Main;