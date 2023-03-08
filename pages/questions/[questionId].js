import Layout from "@/components/layout/layout";
import ErrorAlert from "@/components/ui/error-alert";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";                                            
import BackButton from "@/components/ui/backbutton";
import Footer from "@/components/questions-details/footer";
import useApi from '@/hooks/useApi';
import  QuestionItem  from '@/components/questions-details/question-items';
import ReplyForm from "@/components/question/ReplyForm";
import AnswerList from "@/components/answer-details/answer-list";


function GetQuestionById() {
    // const {  datePosted, id, user, reply } = answer;
     const router = useRouter();
     const eventId = router.query.questionId;
     
     const {request, data, loading} = useApi();
     const { request:requestAnswer, data: answerData} = useApi();
     const [answers, setAnswers] = useState([])


    //  const readableDate = useMemo(() => {
    //     return formatDistanceToNow(new Date(datePosted), {addSuffix: true})
    // }, [datePosted])
    

     useEffect(() => {
        if (router.isReady) {
            request(`http://localhost:3000/question/${router.query.questionId}`)
            requestAnswer(`http://localhost:3000/question/${router.query.questionId}/reply`)
        }   
     }, [router.isReady])

     useEffect(() => {
        if (answerData) {
            setAnswers(answerData);
        }
     }, [answerData])

    if (loading) {
        return <p>Loading</p>
    }

    if(!loading && !data) {
        return (
            <ErrorAlert>
                <p>No Question found!</p>
            </ErrorAlert>
        )
    }
    if (data && answerData) {
        return (
            <Layout>
                <div className="flex flex-col flex-wrap items-center text-xl">
                    <BackButton/>
                    <QuestionItem  shadow={false} question={data}/>
                    <div className="font-extrabold text-sm mt-24 w-full">
                        <p className="flex justify-center w-full">View Answers</p>
                         <AnswerList body={answers}/>
                    </div>
                </div>
                <div className="mt-24 flex flex-col gap-9 justify-between">
                    <div className="mx-auto">
                    <ReplyForm onReply={(data) => setAnswers([data, ...answers])}/>
                    </div>
                <Footer/>
                </div>
            </Layout>
        )
    }
}
export default GetQuestionById;