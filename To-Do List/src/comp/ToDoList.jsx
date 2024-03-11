import React from 'react';
import './ToDoList.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function ToDoList() {
    let [toDos,setToDos] = useState([{task:"sample task" ,id:uuidv4()}]);
    let [newToDo,setNewToDo] = useState("");
    function addNewTask() {
        setToDos( prevToDos => [...prevToDos,{task:newToDo,id:uuidv4(),isDone:false}] );
        setNewToDo("");
    }
    function handleOnToDo(event) {
        setNewToDo(event.target.value);
    }
    function deleteToDo(id) {
        setToDos( prevToDos => prevToDos.filter( prevToDo => prevToDo.id != id));
    }
    let handleOnUpperCase = () => {
        setToDos( prevToDos => 
            prevToDos.map( prevToDo => {
                return {
                    ...prevToDo,
                    task : prevToDo.task.toUpperCase(),
                }
            })
        );
    };
    let upperCaseOne = (id) => {
        setToDos( prevToDos => 
            prevToDos.map( prevToDo => {
                if(prevToDo.id == id){
                    return {
                        ...prevToDo,
                        task : prevToDo.task.toUpperCase(),
                    }
                }else{
                    return prevToDo;
                }
            })
        );
    };
    let marked = (id) => {
        setToDos( prevToDos => 
            prevToDos.map( prevToDo => {
                if(prevToDo.id == id){
                    return {
                        ...prevToDo,
                        isDone : true,
                    }
                }else{
                    return prevToDo;
                }
            })
        );
    };
    let markedAll = () => {
        setToDos( prevToDos => 
            prevToDos.map( prevToDo => {
                return {
                    ...prevToDo,
                    isDone : true,
                }
            })
        );
    };
    return (
        <div className='ToDoList'>
            <input type="text" placeholder='Enter Task to be Done' value={newToDo} onChange={handleOnToDo}/>
            <button onClick={addNewTask}>Add Task</button>
            <ul>{
                toDos.map( toDo => 
                    <li key={toDo.id}>
                        <span style={toDo.isDone?{"textDecorationLine" : "line-through"}:{}}>{toDo.task}</span>&nbsp;
                        <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
                        <button onClick={() => upperCaseOne(toDo.id)}>UppercaseOne</button> 
                        <button onClick={() => marked(toDo.id)}>Mark as Done</button>
                    </li> 
                )
            }</ul>
            <button onClick={handleOnUpperCase}>Uppercase All</button>
            <button onClick={markedAll}>Mark all as Done</button>
        </div>
    )
}
