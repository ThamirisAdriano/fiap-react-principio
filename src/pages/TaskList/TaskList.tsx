import React from 'react';
interface TaskListProps {
  tasks: { id: number; name: string }[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}
export default TaskList;

