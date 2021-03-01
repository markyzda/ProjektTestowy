import React from 'react';
import './Task.css'

const Task = (props) =>{

    const style = {color:"red"}

    let finishDate;

    if(props.finish){
        finishDate = new Date(props.finish).toLocaleString();
    }

return(
    <>
     <div className ="task">
        <span style={props.important? style: {}}>{props.text}    _</span><span>{props.date}  </span>
        <button className="done" onClick ={props.done.bind(this, props.id)}>ZROBIONE</button> 
        <button onClick = {props.delete.bind(this, props.id)} className="delete">X</button>
      </div>
        {props.finish? <p className="finishdate">(Ukończono: {finishDate})</p>: null}
    </>
)
}

export default Task;