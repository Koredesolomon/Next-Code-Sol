import AnswerItem from "./answer-item";

function AnswerList(props) {
    const {body} = props;

    return (
            <ul className='flex flex-col p-20 flex-wrap gap-3 text-center'>
                {body?.map(answer => 
                <AnswerItem
                key={answer.id}
                   answer ={answer} 
                    />
                    )}
                    <div className='flex flex-row justify-evenly'>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600  focus:outline-none focus:ring focus:ring-black-100 p-4'>Prev</button>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600 focus:outline-none focus:ring focus:ring-black-100 p-4'>Next</button>
                    </div>
            </ul>
    )
}
export default AnswerList;