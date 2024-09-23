import { useEffect } from "react";
import {useState}  from 'react';

function Todo(){
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("taskItems")) || []
      });
    const [newTasks, setNewTasks] = useState("");

    const [comTasks, setComTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("doneItems")) || []
      });

    useEffect(() => {
        localStorage.setItem('taskItems', JSON.stringify(tasks));  
    }, [tasks]); 

    useEffect(() => {
        localStorage.setItem('doneItems', JSON.stringify(comTasks));  
    }, [comTasks]);

    function handleInputChange(e){
        setNewTasks(e.target.value)
    }

    function addTask(){
        if(newTasks.trim() === ""){
            alert("Please input some task...")
        } else {
            setTasks(t => [...t, newTasks])
            setNewTasks("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function deleteTaskCompt(index){
        const updatedTasks = comTasks.filter((_, i) => i !== index);
        setComTasks(updatedTasks);
    }

    function handleEdit(index){
        const doneTask = tasks.filter((_, i) => i !== index);
        setNewTasks(tasks[index]);
        setTasks(doneTask)  
    }

    function handleDoneTask(index){
        const taskToMove = tasks[index];
        const doneTask = tasks.filter((_, i) => i !== index);
        const comTaskCont = (c => [...c, taskToMove]);

        setTasks(doneTask);
        setComTasks(comTaskCont);
    }

    function handleRevert(index){
        const taskToRevert = comTasks[index];
        const revertedTask = comTasks.filter((_, i) => i !== index);
        const revertedTaskCont = (t => [...t, taskToRevert]);

        setComTasks(revertedTask);
        setTasks(revertedTaskCont)
    }

    return(
        <div className='mx-auto max-w-[90%] flex flex-col justify-center items-center sm:max-w-[400px] bg-orange-400 border-yellow-200 border-2 rounded-3xl text-center'>
            <h1 className='text-3xl font-black m-3 tracking-widest'>To-Do-List</h1>
            <div className='flex flex-row m-3'>
                <input className='p-1 rounded-md font-bold m-1 border-orange-500 border-2' type="text" placeholder='Enter tasks to do...' value={newTasks} onChange={handleInputChange} /> 
                <button className='px-1 text-[14px] bg-orange-700 rounded-md h-[33px] relative top-1 border-orange-600 border-2 text-white font-semibold' onClick={addTask}>Add Task</button>
            </div> 
            <ol className='m-2 max-w-[100%]'>
                {tasks.map((task, index) => 
                    <li className='mb-3 max-w-full flex flex-1 items-center bg-white p-1 rounded-full' key={index}>
                       <button className='mr-3 font-semibold h-[33px] p-1 rounded-m text-black pl-1'  onClick={() => deleteTask(index)}>&#x2716;</button>
                       <span className='font-bold mr-3 w-[150px] ml-1'>{task}</span>
                       <button className='mr-3 h-[33px] p-1 rounded-md bg-white' onClick={() => handleEdit(index)}><img src='./src/assets/edit.png' className='h-6'/></button>
                       <button className='mr-3 font-semibold h-[33px] p-1 rounded-md bg-white' onClick={() => handleDoneTask(index)}><img src='./src/assets/checked.png' className='h-6'/></button>
                    </li>
                )}
            </ol>
            <hr className='w-full'/>
            <h3 className='font-bold text-slate-700 p-2'>Complete Tasks</h3>
            <ol>
                {comTasks.map((comTask, index) => {
                    return (
                    <li className='mb-3 max-w-full flex flex-1 items-center bg-white p-1 rounded-full' key={index} >
                        <span className='font-bold mr-3 w-[150px] line-through text-gray-400 ml-1'>{comTask}</span>
                        <button className='mr-3 font-semibol h-[33px] p-1 rounded-md bg-white' onClick={() => handleRevert(index)}><img src='./src/assets/revert.png' className='h-6'/></button>
                        <button className='mr-3 font-semibold h-[33px] p-1 rounded-m text-black' onClick={() => deleteTaskCompt(index)}>&#x2716;</button>
                    </li>)
                }     
                )}
            </ol>
        </div>
    );
}

export default Todo