import { formatDistanceToNow } from 'date-fns'
import { Fragment, useMemo } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';


function AnswerItem(props) {
    const { datePosted, reply, questionId, user } = props.answer;

    const readableDate = useMemo(() => {
        return formatDistanceToNow(new Date(datePosted), {addSuffix: true})
    }, [datePosted])

    return (
        <Fragment>
        <div className="flex flex-col bg-white flex-wrap container mx-auto h-min p-2 border-2 border-slate-300">
                <div className="flex flex-row justify-between">
                    <Link href={'/'} className='text-[gray] flex flex-row'>
                    <Icon icon="material-symbols:account-circle-outline" fontSize={30}/>
                        {user?.firstname} {user?.lastname}
                    </Link>
                    <div className="text-[gray]">
                        <time>{readableDate}</time>
                    </div>
                </div>
                    <div className='break-all px-20' dangerouslySetInnerHTML={{__html: reply}} ></div>
                <div className="flex flex-row justify-between gap-2 mt-7">
                    <div className='flex flex-row gap-2'>
                        <Icon icon="bx:like" fontSize={40} className='rounded-2xl bg-[#e9d5ff] p-2 text-[#5b21b6]'/>
                        <Icon icon="bx:dislike" fontSize={40} className='rounded-2xl bg-[#e9d5ff] p-2 text-[#5b21b6]'/>
                    </div>
                    <div>
                        <Icon icon="heroicons:chat-bubble-oval-left-ellipsis" fontSize={40} className='rounded-2xl bg-[#e9d5ff] p-2 text-[#5b21b6]'/>
                    </div>
                </div>
       </div>
       </Fragment>
    )
}

export default AnswerItem;