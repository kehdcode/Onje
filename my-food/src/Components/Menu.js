import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Media} from 'reactstrap';
import { DISHES } from '../shared/dishes'



class Menu extends Component {
    constructor(props){
        super(props)
        

       
    }
    addToCart=(id, price) => {
        console.log(id);

        console.log(price);
    }
    
    render(){
        const menu = this.props.dishes.map((dish) =>{
            return(
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-3" key={dish.id}>
                <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                <CardSubtitle> ${dish.price}</CardSubtitle>
                <Button color="success" onClick={()=>this.addToCart(dish.id, dish.price)}>Place Order</Button>
                </CardBody>
                </Card>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>

            </div>
        )
    }

}

export default Menu;
