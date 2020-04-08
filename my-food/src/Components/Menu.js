import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Media} from 'reactstrap';



class Menu extends Component {
    constructor(props){
        super(props)

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthhappizza',
                    image: '/assests/images/food 1.jpg',
                    category: 'mains',
                    label: 'hot',
                    price: '4.99',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                },
                {
                    id: 1,
                    name: 'Wamilothpo',
                    image: '/assests/images/food 2.jpg',
                    category: 'desert',
                    label: 'hot',
                    price: '5.39',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                },
                {
                    id: 2,
                    name: 'Ottawamilo',
                    image: '/assests/images/food 3.jpg',
                    category: 'mains',
                    label: 'hot',
                    price: '2.99',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                },
                {
                    id: 3,
                    name: 'Uthhappizza',
                    image: '/assests/images/food 4.jpg',
                    category: 'mains',
                    label: 'hot',
                    price: '4.99',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                },
                {
                    id: 4,
                    name: 'Uthhappizza',
                    image: '/assests/images/food 5.jpg',
                    category: 'appetizzer',
                    label: 'hot',
                    price: '6.99',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                },
                {
                    id: 5,
                    name: 'Uthhappizza',
                    image: '/assests/images/food 2.jpg',
                    category: 'appetizzer',
                    label: 'hot',
                    price: '6.99',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                },
                {
                    id: 6,
                    name: 'Uthhappizza',
                    image: '/assests/images/food 3.jpg',
                    category: 'appetizzer',
                    label: 'hot',
                    price: '6.99',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                },
                {
                    id: 7,
                    name: 'Uthhappizza',
                    image: '/assests/images/food 4.jpg',
                    category: 'appetizzer',
                    label: 'hot',
                    price: '6.99',
                    description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                    
                }


            ]
        }

    }
    render(){
        const menu = this.state.dishes.map((dish) =>{
            return(
                <div className="col-md-3" key={dish.id}>
                <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                <CardSubtitle> ${dish.price}</CardSubtitle>
                <Button className="success">Place Order</Button>
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
