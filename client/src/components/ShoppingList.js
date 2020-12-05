import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {v1 as uuid} from 'uuid';


class ShoopingList extends Component {
    state = {
        item: [
            { id: uuid(), name: 'a'},
            { id: uuid(), name: 'b'},
            { id: uuid(), name: 'c'},
            { id: uuid(), name: 'd'}
        ]
    }

    render() {
        const { items } = this.state;

        return(
            <Container>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={()=> {
                    const name = prompt('Enter Item');
                    if(name) {
                        this.setState(state => ({
                            item: [...state.item, { id: uuid(), name}]
                        }));
                    }
                }}
                >Add Item</Button>
            </Container>

        )
    }
}

export default ShoopingList;