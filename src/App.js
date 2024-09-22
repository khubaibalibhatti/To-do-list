import "./App.css";
import Header from "./My-Components/Header";
import Todos from "./My-Components/Todos";
import Footer from "./My-Components/Footer";
import AddTodo from "./My-Components/AddTodo";
import React, { useState, useEffect } from 'react';


function App() {
  let initTodos;
  if(localStorage.getItem("Todos")==null){
    initTodos = [];
  }
  else{
    initTodos = JSON.parse(localStorage.getItem("Todos"));
  }

  const onDelete = (todo)=>{
    console.log("i am ondelete of todo",todo);
    
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("Todos", JSON.stringify(todos));
  }

  const addTodo = (title,desc,)=>{
    console.log("i am adding this todo", title, desc, )
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
       sno = todos[todos.length-1].sno + 1;
    }

    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo) 
  }
  const [todos, setTodos] = useState([initTodos]);
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
   </>
  );
}

export default App;
