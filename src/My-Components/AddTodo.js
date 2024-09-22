import React, { useState } from 'react';

const AddTodos = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  

  const submit = (e)=>{
  e.preventDefault();
  if(!title || !desc){
    alert("Title or Description cannot be blank")
  }
  else{
  addTodo(title, desc);
  setTitle("");
  setDesc("");
  }

  }
  return (
    <div className="container my-3 w-50">
      <h3 className="text-center">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group my-3">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title} onChange={(e)=>setTitle(e.target.value)}
            className="form-control my-2"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            value={desc} onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control my-2"
            id="desc"
            placeholder="Enter Todo Description"
          />
         
        </div>

        <button type="submit" className="btn btn-sm btn-success my-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
