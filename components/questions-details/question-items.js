import { formatDistanceToNow } from 'date-fns'
import { Fragment } from 'react';
import { Icon } from '@iconify/react';

function QuestionItem(props) {
    const { name, date, question } = props;
    const readableDate = formatDistanceToNow(new Date(date), {addSuffix: true})

    return (
        <Fragment>
        <hr></hr>
        <li className="flex flex-row gap-3 divide-x divide-neutral-800 bg-white shadow-2xl">
        <div className="flex flex-col gap-1">
            <div className="font-extrabold p-1">votes</div>
            <div className="flex flex-row bg-[#006400] rounded-2xl text-white p-1 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>answers</div>
            <div className="text-[#9a3412] font-extrabold p-1">views</div>
        </div>
        <div className="flex flex-col gap-3 p-2">
            <div className="flex flex-row justify-between">
                <div className="">
                <Icon icon="material-symbols:account-circle-outline" fontSize={50} />
                    {name}
                </div>
                <div className="text-[gray]">
                    <time>{readableDate}</time>
                </div>
            </div>
            <div className="flex-wrap text-[blue]">
                {question}
            </div>
            <div className="flex flex-row justify-evenly gap-2">
                <Icon icon="heroicons:heart" fontSize={40} className='text-[#5b21b6] rounded-2xl bg-[#e9d5ff] p-2' />
                <Icon icon="heroicons:chat-bubble-oval-left-ellipsis" fontSize={40} className='rounded-2xl bg-[#e9d5ff] p-2 text-[#5b21b6]'/>
                <Icon icon="bx:like" fontSize={40} className='rounded-2xl bg-[#e9d5ff] p-2 text-[#5b21b6]'/>
                <Icon icon="bx:dislike" fontSize={40} className='rounded-2xl bg-[#e9d5ff] p-2 text-[#5b21b6]'/>
            </div>
        </div>
       </li>
       <hr></hr>
       </Fragment>
    )
}

export default QuestionItem;