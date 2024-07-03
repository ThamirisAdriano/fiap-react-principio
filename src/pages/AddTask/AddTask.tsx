import React, { useState } from 'react';
import './AddTask.css';

interface AddTaskProps {
  onAddTask: (taskName: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName(''); // Limpa o campo após adicionar
  };
  return (
    <form onSubmit={handleSubmit} className='add-task-form'>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        className='add-task-input'
      />
      <button type="submit" className='add-task-button'>Adicionar</button>
    </form>
  );
}
export default AddTask;

