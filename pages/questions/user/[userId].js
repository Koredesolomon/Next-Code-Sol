
import { useRouter } from "next/router";
import ErrorAlert from "@/components/ui/error-alert";
import Layout from "@/components/layout/layout";
import QuestionList from "@/components/questions-details/question-list";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Footer from "@/components/questions-details/footer";

function GetUserQuestions(props) {

    const router = useRouter();
    const  eventId = router.query.userId;
    // const event =  getQuestionsByuserId(eventId);

    const { name, location } = props;

    const [question, setQuestion] = useState();

    // useEffect(() => {
    //    if (router.isReady) {
    //        fetch(`/api/questions/user/${router.query.userId}`)
    //        .then(res => res.json())
    //        .then(res => {
    //            if (res.data) setQuestion(res.data)
    //        })
    //    }   
    // }, [router.isReady])

    if(!event) {
        return(
            <ErrorAlert>
                    <p>No Question found for this user!</p>
            </ErrorAlert>
        )
    }
    return (
        <Layout>
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between mx-24">
                <div className="flex flex-row gap-3 ">
                    <Icon icon="ic:baseline-switch-account" fontSize={150} className="text-[#808080]" />
                    <div className="flex flex-col gap-2 mt-4">
                        <h2>{name}</h2>
                        <p className="font-medium text-4xl text-gray-700">Web Designer</p>
                        <Icon icon="material-symbols:card-membership-outline" fontSize={30}className="text-[#808080]" />
                        <div className="flex flex-row"><Icon icon="material-symbols:location-on-rounded" className="text-[#808080]" fontSize={30}/><p>{location}</p></div>
                    </div>
                </div>
                <button className="flex flex-row items-center gap-3 rounded-lg bg-gray-200 p-3 text-sm">
                    <p>Profiles</p>
                    <Icon icon="ic:outline-arrow-drop-down-circle" fontSize={22}/>
                </button>
            </div>
            {/* <QuestionList items={event} /> */}
            <Footer/>
        </div>
        </Layout>
    )
}
export default GetUserQuestions;