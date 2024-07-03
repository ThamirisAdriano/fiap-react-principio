import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/Main/MainContent';
import './App.css';
import AddTask from './pages/AddTask/AddTask';
import TaskList from './pages/TaskList/TaskList';

interface Task {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
  };

  return (
    <div className="app-container"> {/* Pode adicionar estilos ou classes conforme necessário */}
    <Header />
    <MainContent>
      <h1>Pendências</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </MainContent >
    <Footer />
  </div>
  );
}

export default App;
