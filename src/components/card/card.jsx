import React, { Component } from 'react';   
import { Card as Tarjeta, CardBody, CardTitle, CardText, CardImg, Col, Button, Row } from 'reactstrap';
import { users } from '../../utils/mock-data';

class Card extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          users,  
        };
    }

    getAlive = a => a ? 'SI' : 'NO';
    getAction = a => a ? 'MATAR' : 'REVIVIR';

    handlerToggleAlive = (user) => {
        const i = this.state.users.findIndex(e => e.id === user.id);
        return (event) => {
            const nL = this.state.users;
            nL[i].alive = !nL[i].alive;

            this.setState({
                users: nL,
            })
        }
    }

    render(){
        return (
            <div>
                <Row>
                
                {
                    this.state.users.map( elm => 
                        <Col xs="3" >
                            <Tarjeta>
                                <CardImg top width="20%" src="https://picsum.photos/50/50" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle> {elm.name} </CardTitle>
                                    <CardText> El id de {elm.name} es {elm.id} y su edad es {elm.age}</CardText>
                                    <CardText>
                                        <Button
                                    block
                                    color={elm.alive ? 'danger' : 'success'}
                                    onClick={this.handlerToggleAlive(elm)}> {this.getAction(elm.alive)} </Button>
                                    </CardText>
                                </CardBody>
                            </Tarjeta>
                            </Col>
                        )
                    }
                </Row>
                    
                   
            </div>
          );
    }

}
export default Card;