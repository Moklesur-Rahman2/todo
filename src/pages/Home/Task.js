import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Task = ({ task, tasks, setTasks }) => {
    const { _id, title, des } = task
    const [complete, setComplete] = useState(false)


    // handle delete book
    const handleDeleteTask = (id) => {
        const process = window.confirm('Would you like to DELETE?')
        if (process) {
            const url = `https://todobd.herokuapp.com/task/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const restTasks = tasks.filter(task => task._id !== id)
                    setTasks(restTasks)
                })
        }
    }

    // handle complete task
    const handleCompleteTask = () => {
        const process = window.confirm('Would you like to Complete the task?')
        if (process) {
            setComplete(true)
        }
    }


    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    {
                        complete ?
                            <del className="card-title">{title}</del> :
                            <h2 className="card-title">{title}</h2>
                    }


                    {
                        complete ?
                            <del>{des}</del> :
                            <p>{des}</p>
                    }
                    <p></p>
                    <div className="card-actions justify-end mt-8">
                        <button onClick={handleCompleteTask} className="btn btn-success btn-xs">Mark as a complete</button>
                        <button onClick={() => handleDeleteTask(_id)} className="btn btn-error btn-xs">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;