import {BrowserRouter as Router, Routes, Route} from 'react-router'
import './App.css'

import UsersList from './features/users/UserList';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import DeleteUser from './features/users/DeleteUser';

function App() {

  return (
   <section>
    <Router>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/delete/:id' element={<DeleteUser />} />
      </Routes>
    </Router>
   </section>
  )
}

export default App
