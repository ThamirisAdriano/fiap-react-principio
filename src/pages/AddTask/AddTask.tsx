import React, { useState } from 'react';
import styled from 'styled-components';

interface AddTaskProps {
  onAddTask: (taskName: string) => void;
}

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 50vw;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ed145b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c10e49;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName(''); // Limpa o campo após adicionar
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default AddTask;
