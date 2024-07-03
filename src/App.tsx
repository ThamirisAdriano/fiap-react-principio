import { useReducer } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/Main/MainContent';
import AddTask from './pages/AddTask/AddTask';
import TaskList from './pages/TaskList/TaskList';
import taskReducer from './reducers/taskReducer';
import './App.css';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const initialState = { tasks: [] };

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (taskName: string) => {
    dispatch({ type: 'ADD_TASK', payload: taskName });
  };

  const removeTask = (taskId: number) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  const toggleTask = (taskId: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
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
