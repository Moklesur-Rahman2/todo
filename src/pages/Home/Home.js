import React, { useEffect, useState } from 'react';
import Task from './Task';

const Home = () => {


    // handle Add task
    const handleAddTask = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const des = event.target.des.value

        const newTask = { title, des }

        // Post new Book to server
        const url = 'https://todobd.herokuapp.com/task'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(result => {

            })
        event.target.reset()
    }




    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const url = 'https://todobd.herokuapp.com/task'
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])


    return (
        <div>


            <section className=' min-h-screen flex flex-col justify-center items-center bg-orange-100'>
                <div className="lg:container mx-auto flex flex-col justify-center items-center px-8">
                    <form onSubmit={handleAddTask} className=' flex flex-col justify-center items-center pt-12 w-11/12 lg:w-5/12'>
                        <input type="text" placeholder="Task name" className="input input-bordered w-full mb-4" name='title' required />

                        <textarea className="textarea textarea-bordered mb-4 w-full" placeholder="Task description" name='des' required></textarea>

                        <input type="submit" value='Add' className='btn btn-primary' />
                    </form>

                    <div className="my-32">
                        <div className="tasks grid lg:grid-cols-3 gap-8">
                            {
                                tasks.map(task => <Task task={task} key={task._id} tasks={tasks} setTasks={setTasks} />)
                            }
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;