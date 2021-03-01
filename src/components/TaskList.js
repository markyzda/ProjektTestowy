import React from 'react';
import Task from './Task'
import './TaskList.css'


const TaskList = (props) =>{

 
    let activeTasks = [...props.tasks].filter(task => task.active === true);

    let doneTasks = [...props.tasks].filter(task => task.active === false);

  

    activeTasks.sort((a,b) => {
        if(a.text[0].toLowerCase() < b.text[0].toLowerCase()){
            return -1;
        }
        if(a.text[0].toLowerCase() > b.text[0].toLowerCase()){
            return 1;
        }
        return 0;
    });

    doneTasks.sort((a,b) => {
        if(a.date < b.date){
            return -1;
        }
        if(a.date > b.date){
            return 1;
        }
        return 0;
    });


    activeTasks = activeTasks.map(task =>{
        return(
            <Task 
                key ={task.id} 
                id={task.id}
                important = {task.important}
                text ={task.text}
                finish = {task.finish}
                date ={new Date(task.date).toISOString().slice(0,10)} 
                done ={props.done} 
                delete = {props.delete}
             />
             div    
        )
    })

    doneTasks = doneTasks.map(task =>{
        return(
            <Task 
                key ={task.id} 
                text ={task.text} 
                date ={new Date(task.date).toISOString().slice(0,10)} 
                finish = {task.finish}
                done ={props.done} 
                id={task.id}
                delete = {props.delete}
            />
        )
    })


    return(
        <div className="tasklist">
            <table>
            <tr>
                <td>{activeTasks.length === 0 ? "Brak żadnych zadań": activeTasks}<td>
                <td></td>
                <hr></hr>
                </td>{doneTasks.length === 0? "TU pojawią się twoje ukończone zadania": doneTasks}</td>
            </tr>
            </table>
        </div>
        
        
        
        
    )
}
export default TaskList;