import Layout from "@/components/layout/layout";
import Footer from "@/components/questions-details/footer";
import QuestionList from "@/components/questions-details/question-list";
import { Fragment, useEffect, useState } from "react";
import useApi from '@/hooks/useApi';

function AllQuestionsPage() {
    const {data, request} = useApi();

    useEffect(() => {
        request('http://localhost:3000/question');
    }, [])
    
    return (
        <Fragment>
        <Layout>
        <h2 className="flex justify-center mt-7 text-2xl text-black font-extrabold">All Questions</h2>
        <QuestionList items={data}/>
        <Footer/>
        </Layout>
        </Fragment>
    )
}
export default AllQuestionsPage;