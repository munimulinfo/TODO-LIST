import React, { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BiTrash } from 'react-icons/Bi';
import { MdDoneAll } from 'react-icons/Md';

import TaskProvider from '../provider/TaskProvider';
import TaskUpdate from './TaskUpdate';


const TaskCard = ({ task }) => {
    const { onDelete, onUpdate, onUpdateStatus } = useContext(TaskProvider)


    const handleOnDelete = () => {
    onDelete(task.id);
    };

    let [isOpen, setIsOpen] = useState(false)

    function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    }

    
    return (

                <div className={task.status === "completed" ? "card w-96 bg-green-600 bg-opacity-20" : " card w-96 bg-rose-600 bg-opacity-30"} >
                    <div className="card-body ">
                <div className="topbar flex justify-between">
                    <h3 className='text-sm'> <span>#</span> {task.id}</h3>
                     <button className="btn btn-sm px-5" disabled={task.status == 'completed'} onClick={() => onUpdateStatus(task)}><MdDoneAll />Done!</button>
                    </div>
                    
    <h2 className="text-xl font-bold text-blue-900">Task Title</h2>
                        <p className='text-xl'>{task.title}</p>
                         <h2 className="text-xl font-bold text-blue-900">Task Detail</h2>
    <p>{task.taskDetail}</p>
    <div className="card-actions justify-between mt-5">
                    <button className="btn btn-primary btn-sm px-5" onClick={handleOnDelete}><BiTrash/>  Delete</button>
                    <button className="btn btn-primary btn-sm px-5" onClick={openModal}  disabled={task.status == 'completed'}><FaEdit /> Edit
                        <TaskUpdate
                            isOpen={isOpen}
                            closeModal={closeModal}
                            task={task}
                            onUpdate={onUpdate}
                        />
                    </button>
    </div>
  </div>
</div>

    );
};

export default TaskCard;