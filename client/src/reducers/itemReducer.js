import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'a'},
        { id: uuid(), name: 'b'},
        { id: uuid(), name: 'c'},
        { id: uuid(), name: 'd'}
    ]
}


export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}