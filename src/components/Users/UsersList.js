import Card from "../UI/Card/Card"
import UserItem from "./UserItem"

import styles from "./UsersList.module.css"

const UsersList = ({users}) => {
  return(
    <Card className={styles.container}>
      <ul className="">
        {users.map( user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  )
}

export default UsersList;