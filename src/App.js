import logo from './logo.svg';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { deleteTodo,addTodo, saveTodo } from './actions/todoActions';
import {useState,useEffect} from 'react'
function App() {
  const todos =useSelector((state)=>state.todoReducer.todos)
  const [input,setInput] =useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if(save) setInput(save.title);
  },[save]);
  const save = useSelector((state)=>state.todoReducer.save)
  return (
    <div className="App-header">
      <header></header>
<div>
 <input type="text" placeholder=' add a todo' onChange={(e)=> setInput(e.target.value)}></input>     
 <button onClick={
()=> 
dispatch(
addTodo({
id:uuidv4(),
title:input,
 }),
 setInput("")

 )
 }
 >
  Add
  </button>
</div>     
      
{todos.map ((el)=>
<div>
<h1> {el.title}</h1>
<button onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
<button onClick={()=>dispatch(saveTodo(el.title))}>Edit</button>
</div>)}
    </div>
  );
}

export default App;
