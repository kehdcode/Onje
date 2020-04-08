import React, { Component } from 'react'



class Menu extends Component {
    constructor(props){
        super(props)
            this.state ={
                dishes: [
                    {
                        id: 0,
                        name: 'Uthhappizza',
                        image: 'assests/images/food 1.jpg',
                        category: 'mains',
                        label: 'hot',
                        price: '4.99',
                        description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                        
                    },
                    {
                        id: 1,
                        name: 'Wamilothpo',
                        image: 'assests/images/food 2.jpg',
                        category: 'desert',
                        label: 'hot',
                        price: '5.39',
                        description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                        
                    },
                    {
                        id: 2,
                        name: 'Ottawamilo',
                        image: 'assests/images/food 3.jpg',
                        category: 'mains',
                        label: 'hot',
                        price: '2.99',
                        description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                        
                    },
                    {
                        id: 3,
                        name: 'Uthhappizza',
                        image: 'assests/images/food 4.jpg',
                        category: 'mains',
                        label: 'hot',
                        price: '4.99',
                        description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                        
                    },
                    {
                        id: 4,
                        name: 'Uthhappizza',
                        image: 'assests/images/food 5.jpg',
                        category: 'appetizzer',
                        label: 'hot',
                        price: '6.99',
                        description: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'
                        
                    }
                ]
            
        }
    }
    render(){
        const menu ='';
        return(
            <div>

            </div>
        )
    }

}

export default Menu;