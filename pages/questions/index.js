import Layout from "@/components/layout/layout";
import QuestionHeader from "@/components/layouts/question-header";
import Footer from "@/components/questions-details/footer";
import QuestionList from "@/components/questions-details/question-list";
import { Fragment, useEffect, useState } from "react";
import useApi from '@/hooks/useApi';

function AllQuestionsPage() {
    const [questions, setQuestions] = useState([]);
    const {data, request} = useApi();

    useEffect(() => {
        request('http://localhost:3000/question');
    }, [])
    
    return (
        <Fragment>
        <Layout>
        <QuestionHeader/>
        <QuestionList items={data}/>
        <Footer/>
        </Layout>
        </Fragment>
    )
}

export default AllQuestionsPage;