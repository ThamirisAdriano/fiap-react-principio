import React from 'react';
import styled from 'styled-components';

interface TaskListProps {
  tasks: { id: number; name: string }[];
  onRemoveTask: (taskId: number) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
`;

const ListItem = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #ed145b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c10e49;
  }
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          {task.name}
          <Button onClick={() => onRemoveTask(task.id)}>Remover</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
