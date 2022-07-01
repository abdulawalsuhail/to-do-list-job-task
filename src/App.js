import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './Pages/ToDoList/ToDoList';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Calendar from './Pages/Calendar/Calendar';
import Footer from './Pages/Footer/Footer';
import RequireAuth from './Pages/LoginComponent/RequireAuth';
import SignUp from './Pages/LoginComponent/SignUp';
import SIgnOut from './Pages/LoginComponent/SIgnOut';
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<RequireAuth><ToDoList/></RequireAuth>}/>
        <Route path='/todo' element={<RequireAuth><ToDoList/></RequireAuth>}/>
        <Route path='/login' element={<SignUp />} />
        <Route path='/signUp' element={<SIgnOut />} />
        <Route path='/completedTask' element={<RequireAuth><CompletedTask/></RequireAuth>}/>
        <Route path='/calendar' element={<RequireAuth><Calendar/></RequireAuth>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
