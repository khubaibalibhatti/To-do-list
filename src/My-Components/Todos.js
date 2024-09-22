import React from "react";
import { TodoItem } from "./TodoItem";

 export const Todos = (props) => {
    let mystyle ={
        minHeight:"100vh"
    }
  return (
    <div className="container w-50" style={mystyle}>
      <h3 className="text-center my-4">Todos List</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
        return  ( 
            <>
        <TodoItem todo={todo} key={todo.desc} onDelete={props.onDelete}/><hr/>
        </>
        )
      })
    }
    </div>
  )
}

export default Todos;
