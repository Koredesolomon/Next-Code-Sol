import AnswerItems from "./answer-items";
import styles from '../questions-details/question-list.module.css'

function AnswerList(props) {
    const {items} = props;
    return (
        <div className="flex flex-row p-20 flex-wrap gap-3 border-x-2 shadow-xl h-fit border-x-gray-100 mb-6">
            <ul className={styles.list}>
                {items.map(event => 
                <AnswerItems
                    key={event.id}
                    id={event.id} 
                    name={event.name} 
                    date={event.date}
                    question={event.question} 
                    />
                    )}
                    <div className='flex flex-row justify-between'>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-100 p-4'>Prev</button>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-100 p-4'>Next</button>
                    </div>
            </ul>
        </div>
    )
}
export default AnswerList;