import Link from "next/link";
import styles from './button.module.css'

function Button(props) {
    if(props.link){
        return (
            <Link className= {styles.btn} href={props.link}>{props.children}</Link>
        );
    }
    return (
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-4" onClick={props.onClick}>{props.children}</button>
    )
}
export default Button;