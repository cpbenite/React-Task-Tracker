import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = e => {
      // Prevent refresh
      e.preventDefault()

      // Validate task
      if(!text) {
          alert('Please add a task')
          return
      }

      // Add task
      onAdd({ text, day, reminder })

      // Clear input fields
      setText('')
      setDay('')
      setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input 
              type='text' 
              placeholder='Add Task' 
              value={text} 
              onChange={e => setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Day</label>
            <input 
              type='text' 
              placeholder='Add Day'
              value={day}
              onChange={e => setDay(e.target.value)} 
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input 
              type='checkbox' 
              value={reminder}
              onChange={e => setReminder(e.currentTarget.checked)}
            />
        </div>
        <input 
          type='submit' 
          value='Save Task' 
          className='btn btn-block' 
          checked={reminder}
        />
    </form>
  )
}

export default AddTask