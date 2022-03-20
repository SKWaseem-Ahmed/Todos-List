import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return ( (<>
    
        <div >
            <h4><strong>{todo.title}</strong></h4>
            <p><strong><em>{todo.desc}</em></strong></p>
            <button className="btn btn-danger" onClick = {()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
    </>)
    )
}