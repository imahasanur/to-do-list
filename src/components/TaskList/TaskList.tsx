import React from 'react';

interface IProps{
    task:string,
    date:string,
    time:string,
    email:string,
    handleRemove: (email:string) => void
}
const TaskList:React.FC<IProps>=({task, date, time, email, handleRemove}:IProps) => {
    // console.log("got ", task, date, time, email);
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Email: {email}</h5>
                    <p className="card-text">Task:{task}</p>
                    <p className="card-text">Date:{date}</p>
                    <p className="card-text">Time:{time}</p>
                    <button  onClick={()=>handleRemove(email)} className="btn btn-primary">Remove Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskList;