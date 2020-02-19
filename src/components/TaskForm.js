import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
    const [title, setTitle] = useState('')
  
    const handleSubmit = e => {
      e.preventDefault()
      if (!editItem) {
        addTask(title)
        setTitle('')
      } else {
        editTask(title, editItem.id)
      }
    }
  
    const handleChange = e => {
      setTitle(e.target.value)
    }
  
    useEffect(() => {
      if (editItem) {
        setTitle(editItem.title)
        console.log(editItem)
      } else {
        setTitle('')
      }
    }, [editItem])
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Добавить задачу..."
          value={title}
          onChange={handleChange}
          required
          className="task-input"
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            {editItem ? 'Edit Task' : 'Добавить'}
          </button>
          <button className="btn clear-btn" onClick={clearList}>
            Удалить
          </button>
        </div>
      </form>
    )
  }
  
  export default TaskForm