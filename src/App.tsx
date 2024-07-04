import React, { useReducer, useEffect } from 'react';
import api from './api'; // Importando a configuração do Axios
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/Main/MainContent';
import AddTask from './pages/AddTask/AddTask';
import TaskList from './pages/TaskList/TaskList';
import taskReducer from './reducers/taskReducer';
import './App.css';

const initialState = { tasks: [] };

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    api.get('/tasks')
      .then(response => {
        dispatch({ type: 'SET_TASKS', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const addTask = (taskName: string) => {
    api.post('/tasks', { name: taskName, completed: false })
      .then(response => {
        dispatch({ type: 'ADD_TASK', payload: response.data });
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  };

  const removeTask = (taskId: number) => {
    api.delete(`/tasks/${taskId}`)
      .then(() => {
        dispatch({ type: 'REMOVE_TASK', payload: taskId });
      })
      .catch(error => {
        console.error('Error removing task:', error);
      });
  };

  const toggleTask = (taskId: number) => {
    const task = state.tasks.find(task => task.id === taskId);
    if (task) {
      api.put(`/tasks/${taskId}`, { ...task, completed: !task.completed })
        .then(response => {
          dispatch({ type: 'TOGGLE_TASK', payload: taskId });
        })
        .catch(error => {
          console.error('Error toggling task:', error);
        });
    }
  };

  return (
    <div className="app-container">
      <Header />
      <MainContent>
        <h1>Pendências</h1>
        <AddTask onAddTask={addTask} />
        <TaskList tasks={state.tasks} onRemoveTask={removeTask} onToggleTask={toggleTask} />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
