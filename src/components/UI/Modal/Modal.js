import { color } from "echarts";
import "./ModalBackdrop.scss"

const ModalBackdrop = (props) => {
  const classes = "backdrop-container" + (props.className ? ' ' + props.className : '')
  
  return(
    <div className={classes}>
      <div onClick={props.onClick} className="backdrop" style={{backgroundColor: props.backgroundColor}}></div>
      {props.children}
    </div>
  )
}

export default ModalBackdrop;