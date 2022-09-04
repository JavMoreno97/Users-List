import { useState } from 'react';
import styles from './App.module.css';

import UserForm from './components/NewUser/UserForm';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = user => { setUsers(prevUsers => [...prevUsers,user]) }

  return (
    <div className={styles.App}>
      <UserForm onUserAdd={addUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
