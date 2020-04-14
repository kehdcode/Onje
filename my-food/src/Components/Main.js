import React, { Component, useContext} from 'react'
import { DISHES } from '../shared/dishes'
import Home from './Home'
import Menu from './Menu'
import Footer from './Footer'
import Navigation from './NavBar'
import Contact from './Contact'
import { Switch, Route, Redirect, __RouterContext} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';
import AbsoluteWrapper from './AbsoluteWrapper'


const Main = () => {
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: {opacity: 0, transform: "translate(100%, 0)"},
        enter: {opacity: 1, transform: "translate(0%, 0)"},
        to: {opacity: 0, transform: "translate(-50%, 0)"},
    });
         

       return(
           <AbsoluteWrapper>
           <div>
             <Navigation />
             { transitions.map(({ item, props, key}) =>(
                 <animated.div key={key} style={props}>

            <Switch location={item}>
                <Route path="/home" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/home" />
             </Switch>

                 </animated.div>
             ))}
            


               
             ))}
             
            
             <Footer />
           </div>
           </AbsoluteWrapper>
       )
   }


export default Main;