import { v4 as uuidv4 } from 'uuid';
import {DELETE_TODO,ADD_TODO,SAVE_TODO,UPDATE_TODO} from '../actions/types'
const todos=[
{
    id:uuidv4(),
    title:"work"
},
{
    id:uuidv4(),
    title:"eat"
},
{
    id:uuidv4(),
    title:"sleep"
},

]
const todoReducer =(state= {save:null,todos},action)=>{
switch(action.type){
    case DELETE_TODO:
        return {
        ...state,
         todos:[...state.todos.filter((el) => el.id !== action.payload)]
        }
    case ADD_TODO:
    return {...state,todos: [...state.todos,action.payload]};
        
        case SAVE_TODO:
            return {
            ...state,
             save:action.payload
                
            }
            case UPDATE_TODO:
                return {
                save:null,
                todos: state.todos.map(el=>el.id===state.save.id)
                    
                }
            default:
                return state;


}
}
export default todoReducer;