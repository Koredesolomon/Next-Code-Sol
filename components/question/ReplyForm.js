import { useState, useEffect } from 'react';
import usePostQuery from '@/hooks/usePostQuery';
import  useAuth  from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import TextBox from './Textbox';


function ReplyForm({onReply}) {
    const router = useRouter();
    const eventId = router.query.questionId;
    const [answer, setAnswer] = useState("");
    const { getToken } = useAuth();
    const { request, data } = usePostQuery();
    
    const submit = () => {
        request(`http://localhost:3000/question/${router.query.questionId}/answer`, {reply: answer}, {
            Authorization: `Bearer ${getToken()}`
        })
    }

    useEffect(() => {
        if (data) {
            onReply?.(data)
            setAnswer("")
            window.scrollTo(0, 0, {smooth: true})
        }
    }, [data])
    return (
        <div>
            <TextBox onChange={setAnswer}/>
            <button className="bg-blue-900 text-white text-lg hover:bg-blue-500 p-3 mt-24 w-fit transition ease-in-out delay-100 rounded-xl"
            onClick={submit}>Submit</button>
        </div>  
    )
}
export default ReplyForm;