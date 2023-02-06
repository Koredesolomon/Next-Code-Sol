import { Icon } from '@iconify/react';
import QuestionItem from "./question-items";
import styles from './question-list.module.css'

function QuestionList(props) {
    const {items} = props;
    return (
        <div className="flex flex-row p-20 flex-wrap gap-3">
            <div className="flex flex-col mt-3 p-14 gap-8 shadow-2xl shadow-emerald-700 h-fit   sticky top-0 left-0 right-0 transition duration-150 ease-out md:ease-in">
                <div className="items-center flex flex-row gap-2 font-extrabold">
                <Icon icon="mdi:arrow-down-bold-outline" fontSize={22} className="animate-bounce"/>
                <p>Check Us Out on</p></div>
                <button className="flex flex-row gap-2 p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-xl">
                <Icon icon="logos:facebook" fontSize={22}/>
                <p>Facebook</p></button>
                <button className="flex flex-row gap-2 bg-gradient-to-r from-gray-500 to-black-200 p-3 rounded-xl">
                <Icon icon="skill-icons:github-light" fontSize={22} />
                <p>GitHub</p></button>
                <button className="flex flex-row gap-2 text-white bg-[#e9d5ff] p-3 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-500">
                <Icon icon="skill-icons:instagram" fontSize={22}/>
                <p>Instagram</p></button>
                <button className="flex flex-row gap-2 bg-gradient-to-r from-blue-400 to-white-500 p-3 rounded-xl">
                <Icon icon="logos:linkedin-icon" fontSize={22}/>
                <p>LinkedIn</p></button>
            </div>
            <ul className={styles.list}>
                {items.map(event => 
                <QuestionItem
                    key={event.id}
                    id={event.id} 
                    name={event.name} 
                    date={event.date}
                    question={event.question} 
                    />
                    )}
                    <div className='flex flex-row justify-between'>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600  focus:outline-none focus:ring focus:ring-black-100 p-4'>Prev</button>
                        <button className='text-gray-700 font-bolder shadow-2xl rounded-2xl hover:bg-black-600 focus:outline-none focus:ring focus:ring-black-100 p-4'>Next</button>
                    </div>
            </ul>
                <div className="flex flex-col mt-12">
                    <div className="flex flex-col gap-7 shadow-2xl p-10 rounded-md border-x-2 border-black border-y-2 border-y-red-700">
                        <button className="text-lg text-gray-600  hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-100">Home</button>
                        <button className="flex flex-row text-lg text-gray-600 gap-1 font-extrabold  hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-100">
                        <Icon icon="bx:world" fontSize={22}/>
                        <p>Questions</p></button>
                        <button className="text-lg text-gray-600  hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-100">Tags</button>
                        <button className="text-lg text-gray-600  hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-100">Users</button>
                    </div>
                    <div className="flex flex-col mt-80 gap-6 sticky top-0 left-0 right-0">
                        <p className="text-lg">Related Tags</p>   
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#html</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#css</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#javascript</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#php</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#python</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#nestJs</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#nextJs</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#reactJs</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#c++</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#pyscript</button>
                        <button className="rounded-xl bg-[#e9d5ff] text-[#1e40af]">#typescript</button>
                    </div>
                </div>
        </div>
    )
}
export default QuestionList;