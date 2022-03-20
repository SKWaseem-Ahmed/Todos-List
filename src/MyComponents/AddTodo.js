import React from 'react'
import  { useState } from 'react';


export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot given')
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
         
    }


    return (
        <div  className="container text-center my-3">
            <h3><strong>Add a Todo</strong></h3>
            <form onSubmit={submit}>
                <div className="mb-3" >
                    <label htmlFor="title" className="form-label"><strong>Todo Title</strong></label>
                    <input type="text"  style={{
                    border:"2px solid #666"
                }} value={title} onChange = {(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"><strong>Todo Description</strong></label>
                    <input type="text"  style={{
                    border:"2px solid #666"
                }} value={desc} onChange = {(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
                    )
}
