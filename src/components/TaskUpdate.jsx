import React, { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const TaskUpdate = ({ closeModal, isOpen ,task, onUpdate }) => {

    const [title, setTitle] = useState(task ? task.title : "");
    const [taskDetail, setTaskDetail] = useState(task ? task.taskDetail : "");

    const handleSubmit = (event) => {
        event.preventDefault();
        const taskId = task.id
        const titles = title
        const taskDetails = taskDetail
        const statuses = task.status
        onUpdate(taskId, titles, taskDetails, statuses);
                    
    };


    
    return (
              <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Edit Your Task
                                </Dialog.Title>
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="form-area">
                                          <label htmlFor="" className='block mb-1 mt-3 text-base font-bold'>Task Name:</label>   
        <input type="text"  className='p-2 w-full mb-3 bg-slate-300 bg-opacity-30' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title.."/>   
        <label htmlFor="" className='block mb-1 text-base font-bold'>Description:</label>   
                    <textarea rows="3" cols="2" type="text" value={taskDetail} name='description' onChange={(e) => setTaskDetail(e.target.value)} className='p-3 w-full mb-3 bg-slate-300 bg-opacity-30' placeholder="Enter task detail.." /> 
                    </div>
                <hr className='mt-8 ' />
                <div className='mt-2 flex mt-2 justify-around'>
                    
                  <button
                    type='submit'  onClick={closeModal}
                    className='disable:bg-text-600 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2' 
                    
                  >
                    Confirm
                                        </button>
                                        
                                     <button
                    
                    className='disable:bg-text-600 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                     onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
                                </form>
                                

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    );
};

export default TaskUpdate;