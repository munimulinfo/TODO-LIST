import { createContext, useEffect, useState } from "react";

const TaskProvider = createContext()

function Provider({ children }) {
    const [taskList, setTaskList] = useState([])
    const [currentStatus, setCurrentStatus] = useState('all')


    const changeStatus = (status) => {
        setCurrentStatus(status)
    }

    const createTask = (title, taskDetail) => {
        const newTaskList = [
            ...taskList, {
                id: Math.round(Math.random() * 9999999),
                title,
                taskDetail: taskDetail.trim(),
                status: 'pending',
            }
        ]
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
        setTaskList(newTaskList)
    }

    const onDelete = id => {
        const newTaskList = taskList.filter((item) => item.id !== id)
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
        setTaskList(newTaskList)
    }

    const onUpdate = (id, title, taskDetail, status) => {
        const newTaskList = taskList.map((item) => {
            if (item.id === id) {
                return { id, title, taskDetail, status }
            }
            return item
        })
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
        setTaskList(newTaskList);
    }

    const onUpdateStatus = (task) => {
        const newTaskList = [...taskList]
        const findTask = newTaskList.find((item) => item.id == task.id)
        findTask.status = findTask.status === 'pending' ? 'completed' : 'pending';
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
        setTaskList(newTaskList)
    }

    const fetchTask = () => {
        let tasks;
        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        else {
            localStorage.setItem('tasks', JSON.stringify([]))
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        setTaskList(tasks)
    }

    useEffect(() => {
        fetchTask()
    }, [])

    const value = {
        taskList,
        createTask,
        onDelete,
        onUpdate,
        onUpdateStatus,
        fetchTask,
        createTask, 
        currentStatus,
        changeStatus
    }

    return (
        <TaskProvider.Provider value={value}>
            {children}
        </TaskProvider.Provider>
    )
}



export { Provider }
export default TaskProvider

