/* eslint-disable react/prop-types */
import { useState } from "react"



const Addtask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please enter a task')
            return
        }

        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label className="text-white">Task</label>
                <input type="text" name="" id="" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label className="text-white">Day & Time</label>
                <input type="text" name="" id="" placeholder="Add Day and time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control-check">
                <label className="text-white">Set Reminder</label>
                <input type="checkbox" name="" id="" className="accent-green-500" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block bg-green-800" />
        </form>
    )
}

export default Addtask