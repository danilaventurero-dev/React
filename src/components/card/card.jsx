import React, { Component } from 'react';   
import { Card as Tarjeta, CardBody, CardTitle, CardText, CardImg, Col } from 'reactstrap';
import { users } from '../../utils/mock-data';

class Card extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          users,  
        };
    }

    render(){
        return (
            <div>
                <Col xs="3" >
                    <Tarjeta>
                        <CardImg top width="20%" src="https://picsum.photos/50/50" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Tarjeta>
                </Col>
            </div>
          );
    }

}
export default Card;