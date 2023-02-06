import { getQuestionsById } from "@/dummy-data"

const getQuestionById = (req, res) => {
    const { questionId } = req.query
    const data = getQuestionsById(questionId)
    if (data) res.status(200).json({message: "Question found", data})
    else res.status(404).json({message: "Question not found"})
}

export default getQuestionById