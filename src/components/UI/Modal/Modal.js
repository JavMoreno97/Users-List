import Button from "../Button/Button"
import Card from "../Card/Card"

import styles from "./Modal.module.css"

const Modal = (props) => {
  const classes = styles.container + (props.className ? ' ' + props.className : '')
  
  return(
    <div className={classes}>
      <div onClick={props.onClick} className={styles.backdrop} style={{backgroundColor: props.backgroundColor}}></div>
      <Card className={styles.modal}>
        <div className={styles.header}>
          Invalid Input
        </div>
        <div className={styles.body}>
          <span className={styles.message}>
            {props.errorMessage}
          </span>
          <div className={styles.actions}>
            <Button type="button" onClick={props.onClick}>Okay</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Modal;