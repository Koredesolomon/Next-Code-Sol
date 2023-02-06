import QuestionForm from '@/components/question/QuestionForm';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import usePostQuery from '@/hooks/usePostQuery';

const AskQuestion = () => {
    const [question, setQuestion] = useState("");
    const { getToken } = useAuth();
    const { request } = usePostQuery();

    const submit = () => {
        request("http://localhost:3000/question", {content: question}, {
            Authorization: `Bearer ${getToken()}`
        })
    }
    return (
        <div className='relative'>
            <QuestionForm text={question} onChange={setQuestion} />
            <button className="p-4 bg-gray block mt-3" onClick={submit}>Submit</button>
        </div>
    )
}

export default AskQuestion