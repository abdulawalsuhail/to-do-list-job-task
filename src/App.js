import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './Pages/ToDoList/ToDoList';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Calendar from './Pages/Calendar/Calendar';
import Footer from './Pages/Footer/Footer';
// import RequireAuth from './Pages/LoginComponent/RequireAuth';
import SignUp from './Pages/LoginComponent/SignUp';
import SIgnOut from './Pages/LoginComponent/SIgnOut';
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<ToDoList/>}/>
        <Route path='/todo' element={<ToDoList/>}/>
        <Route path='/login' element={<SignUp />} />
        <Route path='/signUp' element={<SIgnOut />} />
        <Route path='/completedTask' element={<CompletedTask/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
