
import styles from './generalButton.module.css';
const CustomButton = (props) => {
    
    return <button className={styles.buttonBackground}>
        <span className={styles.buttonContext}>{props.content}</span>
    </button>
   
}
export default CustomButton;