import React from 'react'

const AcceptTaskCount = ({data}) => {
    return (
        <div className="task-box accepted">
                    <p id='accepted-task' className='same'>{data.task_count.completed}</p>
                    <p>Accepted</p>
                </div>

                
    )
}

export default AcceptTaskCount