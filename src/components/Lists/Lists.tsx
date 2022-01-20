import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import './Lists.css';

interface IData {
    task:string,
    date:string,
    time:string,
    email:string
}

const Lists = () => {
    const [taskData, setTaskData] = useState<IData>({} as IData)
    const [tasksData, setTasksData] = useState<IData[]>([])


    const handleData = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTaskData({...taskData,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e: React.SyntheticEvent) =>{
        e.preventDefault()
        setTasksData([...tasksData,taskData])
        console.log(tasksData)
    }

    const handleRemove = (email:string)=>{
        const newTasksList = tasksData.filter(task => task.email !== email)
        setTasksData(newTasksList)
    }

    return (
        <div className = "container">
            <div className=" input-group-sm m-3 p-2 ">
                <form>
                    <span className=" p-3" id="inputGroup-sizing-sm"><strong>Tasks </strong></span>
                    <input type="email" onChange={handleData} name = "email" className="m-2 form-control" placeholder="your email "  required />
                    <input type="text" onChange={handleData} name = "task" className="m-2 form-control" placeholder="task you will do"  required />
                    <input type="date" onChange={handleData} name = "date" className="m-2 form-control" placeholder=" date " required/>
                    <input type="time" onChange={handleData} name="time" className="m-2 form-control" placeholder=" time " required />
                    <input type="submit" onClick ={handleSubmit} className="m-2 form-control btn btn-success" placeholder=" time " value="Add Task"  />
                </form>
            </div>
            <div className = "row"> 
                <div className="col-md-5 col-sm-5 col-10 p-2">
                    {tasksData?.map(task => <TaskList key={task.email} handleRemove={handleRemove} {...task} ></TaskList> )}
                </div>
            </div>
        </div>
    );
};

export default Lists;