import styles from "./UserForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState } from "react";

const UserForm = ({onUserAdd}) => {
  const [newUsername, setNewUsername] = useState("");
  const [newAge, setNewAge] = useState("");
  const [userCount, setUserCount] = useState(0);

  const handleUsernameChange = (e) => { setNewUsername(e.target.value) }

  const handleAgeChange = (e) => { setNewAge(e.target.value) }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: userCount + 1,
      username: newUsername,
      age: newAge
    }

    onUserAdd(userData);

    setUserCount(prevUserCount => (prevUserCount + 1));
    setNewAge('');
    setNewUsername('');
  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label>Username</label>
            <input type="text" value={newUsername} onChange={handleUsernameChange}/>
          </div>
          <div className={styles.control}>
            <label>Age</label>
            <input
              type="number"
              value={newAge}
              step="1"
              onChange={handleAgeChange}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button type="submit">Add User</Button>
        </div> 
      </form>
    </Card>
  );
};

export default UserForm;
