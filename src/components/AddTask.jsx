import { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState();
  const [day, setDay] = useState();
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('PLease enter Task');
      return;
    }

    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='Add Task'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='date-time'>Day & Time</label>
        <input
          type='text'
          name='date-time'
          id='date-time'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input
          type='checkbox'
          name='reminder'
          id='reminder'
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input type='submit' className='btn btn-block' value='Save Task' />
    </form>
  );
}

export default AddTask;
