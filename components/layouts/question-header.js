import Button from "../ui/button";

function QuestionHeader() {
    return (
        <header className="flex flex-row justify-evenly items-center mx-24 p-2">
            <p className="text-3xl ">All Questions</p>
            <Button>Ask Question</Button>
        </header>
    )
}
export default QuestionHeader;