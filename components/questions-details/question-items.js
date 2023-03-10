import { formatDistanceToNow } from 'date-fns'
import { Fragment, useMemo } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';


function QuestionItem(props) {
    const { datePosted, content, id, user } = props.question;

    const readableDate = useMemo(() => {
        return formatDistanceToNow(new Date(datePosted), {addSuffix: true})
    }, [datePosted])

    return (
        <Fragment>
        <div className={`bg-white container shrink w-auto h-auto p-2 ${props.shadow ? "border-2 border-slate-300": ""}`}>
                <div className="flex flex-row justify-between">
                    <Link href={`questions/user/${id}`} className='text-[gray] flex flex-row'>
                    <Icon icon="material-symbols:account-circle-outline" fontSize={30}/>
                        {user?.firstname} {user?.lastname}
                    </Link>
                    <div className="text-[gray]">
                        <time>{readableDate}</time>
                    </div>
                </div>
                <Link className="flex justify-center flex-wrap" href={`questions/${id}`}>
                    <div className={`text-xl px-20 ${props.truncate ? "truncate" : "break-all"}`} dangerouslySetInnerHTML={{__html: content}} ></div>
                </Link>
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

export default QuestionItem;