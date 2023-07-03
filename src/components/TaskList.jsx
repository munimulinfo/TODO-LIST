import React, { useContext } from 'react';
import TaskProvider from '../provider/TaskProvider';
import TaskCard from './TaskCard';

const TaskList = () => {
    const { taskList, currentStatus, changeStatus } = useContext(TaskProvider)
    
    const filterList = taskList.filter((item) => 
        item.status === currentStatus || currentStatus == 'all'
    )

    return (
        <div className="tasklist-area">
             <div className='all-btn max-w-md mx-auto text-center mt-5 p-6 w-full'>
            <div className="filer-btn flex justify-around text-center mx-auto ">
                <button className={currentStatus === 'all' ? 'btn btn-primary py-2 btn-sm' : 'btn btn-ghost py-2 btn-sm'}
                    onClick={()=> changeStatus('all')}
                > All</button>
                <button className={currentStatus === 'pending' ? 'btn btn-primary py-2 btn-sm' : 'btn btn-ghost py-2 btn-sm'}
                    onClick={()=> changeStatus('pending')}
                > Pending</button>
                <button className={currentStatus === 'completed' ? 'btn btn-primary py-2 btn-sm' : 'btn btn-ghost py-2 btn-sm'}
                    onClick={()=> changeStatus('completed')}
                > Completed</button>
                </div>
                    <h3 className='mt-6 text-xl font-bold border border-2 p-2 border-gray-700 rounded-md shadow-xl'>{currentStatus.toUpperCase()} Task List</h3>
            </div>

            <div className="task-list mt-10 max-w-6xl mx-auto items-center gap-8 grid lg:grid-cols-3 justify-items-center">
                 {
                filterList.length > 0 ? (
                    filterList.map((task, index) => 
                    currentStatus === task.status || currentStatus == 'all' ?
                            (
                            
                                <TaskCard
                                key={index} task = {task}
                                ></TaskCard>
                            
                            ) : null
                    ) 
                ): (
                            <div className="div text-center mx-auto">
                                <h2 className="empty-message text-xl text-center mx-auto">You have no {currentStatus} task yet</h2>
                            </div>
                )
            }
           </div>
       </div>
    );
};

export default TaskList;