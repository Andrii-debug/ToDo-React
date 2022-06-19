import './Task.css'
import React, {useState, useEffect} from 'react'

function Task(props) {
 
   
    function DeleteTask() {
        props.onDelete(props.id)
        
    }



    return (
        <div className='task_block'>
            {props.children}
            <button className='delBtn' onClick={DeleteTask}></button>
        </div>    
    )
}

export default Task;