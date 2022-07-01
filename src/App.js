import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './Pages/ToDoList/ToDoList';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Calendar from './Pages/Calendar/Calendar';
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<ToDoList/>}/>
        <Route path='/todo' element={<ToDoList/>}/>
        <Route path='/completedTask' element={<CompletedTask/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
