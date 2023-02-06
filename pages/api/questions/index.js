import { getAllQuestions } from "@/dummy-data";

const getQuestions = (req, res) => {
    // console.log(req);
    res.status(200).json({data: getAllQuestions(), message: "Questions fetched successfully"})
}

export default getQuestions;