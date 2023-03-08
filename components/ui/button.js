import Link from "next/link";
import { QuestionForm } from '@/components/question/QuestionForm';

function Button(props) {
    // if(props.link){
    //     return (
    //         <Link className= {styles.btn} href={QuestionForm}>{props.children}</Link>
    //     );
    // }
    return (
        <button className="bg-neutral-500 hover:bg-neutral-700 rounded-sm p-2 mt-0 text-white" onClick={QuestionForm}>{props.children}</button>
    )
}
export default Button;