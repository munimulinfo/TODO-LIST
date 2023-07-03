import React, { useContext, useState } from 'react';
import TaskProvider from '../provider/TaskProvider';

const TaskBox = () => {

    const { createTask } = useContext(TaskProvider)
    const [title, setTitle] = useState()
    const [taskDetail, setTaskDetail] = useState()
    const [errorMessage, setErrorMessage] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();
        if (title, taskDetail) {
            createTask(title, taskDetail)
            setTitle("")
            setTaskDetail("")
            setErrorMessage(false)
        }
        else {
            setErrorMessage(true)
        }

    }



    return (
        <div className='max-w-md py-6 px-6 rounded-md mx-auto bg-base-200 shadow-xl'>
            
  <div className=" p-5">
                <h2 className="text-3xl font-bold mb-5 text-center">Todo List</h2>
                {
          errorMessage && <span className="text-base text-center mx-auto mb-3 font-bold text-rose-600">Please fill all fields</span>
        }
    <form  className='mx-auto'>
        <label htmlFor="" className='block mb-1 mt-3 text-base font-bold'>Task Name:</label>   
        <input type="text" name="name" className='p-2 w-full mb-3' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title.."/>   
        <label htmlFor="" className='block mb-1 text-base font-bold'>Description:</label>   
                    <textarea rows="3" cols="2" type="text" value={taskDetail} name='description' onChange={(e) => setTaskDetail(e.target.value)} className='p-3 w-full mb-3' placeholder="Enter task detail.." /> 
        <button className="btn btn-primary btn-sm w-full mt-5" onClick={handlesubmit} type='submit'> Add Task</button>            
     </form>
      
    </div>
  </div>
    );
};

export default TaskBox;