import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import './App.css';
import RegistrationPage from './components/auth/RegistrationPage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ProfilePage from './components/userpage/ProfilePage';
import UserService from './components/service/UserService';
import UserManagementPage from './components/userpage/UserManagementPage';
import UpdateUser from './components/userpage/UpdateUser';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/register' element={<RegistrationPage />}/>
          <Route path='/admin/user-management' element={<UserManagementPage />}/>
          <Route path='/update-user/:userId' element={<UpdateUser />} />
          <Route path='*' element={<Navigate to="/login" />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;