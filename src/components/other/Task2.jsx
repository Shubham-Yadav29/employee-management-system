import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'


const Task2 = () => {

    const [data , setdata] = useContext(Authcontext)
    
    return (
        <div className='cover-task'>
            <div className="header-data" id='task-1'>
                <p  className='same1'>Employee Name</p>
                <p  className='same1' id='diff1'>New Task</p>
                <p  className='same1' id='diff2'>Completed Task</p>
                <p  className='same1' id='diff3'>Active Task</p>
                <p  className='same1' id='diff4'>Failed Task</p>
            </div>
            {data.map(function(elem , idx){
                return   <div className="same-2" id='task-2' key={idx}>
                <p  className='same1'>{elem.name}</p>
                <p  className='same1' id='diff1'>{elem.task_count.new_task}</p>
                <p  className='same1' id='diff2'>{elem.task_count.completed}</p>
                <p  className='same1' id='diff3'>{elem.task_count.active}</p>
                <p  className='same1' id='diff4'>{elem.task_count.failed}</p>
                
            </div>
            })}
        </div>
    )
}

export default Task2