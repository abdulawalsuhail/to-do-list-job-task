import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Calendar from './Pages/Calendar/Calendar';
import Footer from './Pages/Footer/Footer';
import SignUp from './Pages/LoginComponent/SignUp';
import { Toaster } from 'react-hot-toast';
import Todo from './Pages/Todo/Todo';
import Login from './Pages/LoginComponent/Login';
import RequireAuth from './Pages/LoginComponent/RequireAuth';
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<RequireAuth>
              <Todo />
            </RequireAuth>} />
        <Route path='/todo' element={<RequireAuth>
          <Todo />
        </RequireAuth>} />
        <Route path='/login' element={<SignUp />} />
        <Route path='/signUp' element={<Login />} />
        <Route path='/completedTask' element={<RequireAuth>
          <CompletedTask />
        </RequireAuth>} />
        <Route path='/calendar' element={<RequireAuth>
              <Calendar />
            </RequireAuth>} />
      </Routes>
      <Footer/>
      <Toaster />
    </div>
  );
}

export default App;
