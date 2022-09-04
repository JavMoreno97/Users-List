import styles from "./UserItem.module.css"

const UserItem = ({user}) => {
  return (
    <li>  
      <div className={styles.item}>
        {user.username} ({user.age} years old)
      </div>
    </li>
  )
}

export default UserItem;