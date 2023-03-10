import QuestionItem from "./question-items";

function QuestionList(props) {
    const {items} = props;
    return (
            <ul className='flex flex-col p-20 flex-wrap gap-3 text-center'>
                {items?.map(event => 
                <QuestionItem
                    key={event.id}
                    question={event} 
                    shadow = {true}
                    truncate ={true}
                    />
                    )}
                    <div className='flex flex-row justify-evenly'>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600  focus:outline-none focus:ring focus:ring-black-100 p-4'>Prev</button>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600 focus:outline-none focus:ring focus:ring-black-100 p-4'>Next</button>
                    </div>
            </ul>
    )
}
export default QuestionList;