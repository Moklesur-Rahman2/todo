import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Welcome from './pages/Welcome/Welcome';
import Header from './share/Header/Header';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/home' element={
          <RequireAuth>
            <Home />
          </RequireAuth>


        }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
