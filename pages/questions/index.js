import Layout from "@/components/layout/layout";
import QuestionHeader from "@/components/layouts/question-header";
import Footer from "@/components/questions-details/footer";
import QuestionList from "@/components/questions-details/question-list";
import { Fragment, useEffect, useState } from "react";

function AllQuestionsPage() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch('/api/questions')
            .then(res => res.json())
            .then(res => setQuestions(res.data));
    }, [])
    
    return (
        <Fragment>
        <Layout>
        <QuestionHeader/>
        <QuestionList items={questions}/>
        <Footer/>
        </Layout>
        </Fragment>
    )
}

export default AllQuestionsPage;