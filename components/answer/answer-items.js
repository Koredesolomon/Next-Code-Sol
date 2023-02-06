import { formatDistanceToNow } from 'date-fns'
import { Fragment } from 'react';
import { Icon } from '@iconify/react';

function AnswerItems(props) {
    const { name, date, question } = props;
    const readableDate = formatDistanceToNow(new Date(date), {addSuffix: true})

    return (
        <Fragment>
        <li className="flex flex-row gap-3 divide-x divide-neutral-800 bg-white shadow-sm rounded-2xl border-y-2 border-y-gray-100">
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
            <div className="flex flex-row gap-2">
                <Icon icon="heroicons:heart" fontSize={30} className='text-[#5b21b6] rounded-2xl bg-[#e9d5ff] p-2' />
                <Icon icon="heroicons:chat-bubble-oval-left-ellipsis" fontSize={30} className='rounded-2xl bg-[#e9d5ff] p-2 text-[#5b21b6]'/>
                <Icon icon="material-symbols:upload" fontSize={30} className='text-[#5b21b6] rounded-2xl bg-[#e9d5ff] p-2' />
            </div>
        </div>
       </li>
       </Fragment>
    )
}
export default AnswerItems;