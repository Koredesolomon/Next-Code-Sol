import Layout from "@/components/layout/layout";
import QuestionItem from "@/components/questions-details/question-items";
import ErrorAlert from "@/components/ui/error-alert";
import { useRouter } from "next/router";
import  { getQuestionsById } from '../../dummy-data';
import { useEffect, useState } from "react";
import BackButton from "@/components/ui/backbutton";
import AnswerList from "@/components/answer/answer-list";
import Footer from "@/components/questions-details/footer";


function GetQuestionById() {
    const router = useRouter();
     const eventId = router.query.questionId;
     const event = getQuestionsById(eventId);

     const [question, setQuestion] = useState();

     useEffect(() => {
        if (router.isReady) {
            fetch(`/api/questions/${router.query.questionId}`)
            .then(res => res.json())
            .then(res => {
                if (res.data) setQuestion(res.data)
            })
        }   
     }, [router.isReady])

    if(!event) {
        return (
            <ErrorAlert>
                <p>No Question found!</p>
            </ErrorAlert>
        )
    }
    return (
        <Layout>
            <BackButton/>
            <div className="flex flex-col flex-wrap items-center text-xl rounded-sm">
                <QuestionItem
                id={event.id} 
                name={event.userId.firstnam}
                date={event.datePosted}
                question={event.content} />
                <div className="font-extrabold text-sm mt-16 mr-96">
                    <p>View Answers</p>
                </div>
                <AnswerList items={[event]}/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default GetQuestionById;