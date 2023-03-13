import { Fragment, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import usePostQuery from '@/hooks/usePostQuery';
import MainHeader from '@/components/layout/main-header';
import Footer from '@/components/questions-details/footer';
import { Icon } from '@iconify/react';
import  TextBox  from '@/components/question/Textbox';


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
        <div className='flex flex-col gap-5 justify-center h-full'>
            <MainHeader/>
            <div className='flex flex-col mt-24 mx-auto '>
                <div className='flex flex-col justify-center'>
                    <h2 className='p-7 text-center text-lg'>Drop your Questions below</h2>
                    <Icon icon="material-symbols:arrow-downward" fontSize={30} color='blue' className='animate-bounce w-10 h-10'/>
                </div>
                <div className='flex flex-col gap-6'>
                    <TextBox text={question} onChange={setQuestion}/>
                </div>
                <button className="bg-blue-900 text-white text-lg hover:bg-blue-500 p-3 mt-24 w-fit transition ease-in-out delay-100 rounded-xl"
                     onClick={submit}>Submit</button>
            </div>
            <div className='mt-28'>
            <Footer/>
            </div>
        </div>
    )
}

export default AskQuestion;