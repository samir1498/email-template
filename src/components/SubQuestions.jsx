import React from "react"
import SimpleQuestion from "./SimpleQuestion"

export default function SubQuestions({ answer }) {
  return (
    <>
      {/* showing sub questions */}
      {answer?.sub_question_answer &&
        answer?.sub_question_answer.map((q, i) => {
          return (
            <div style={subQuestionsStyle} key={q.id_qst}>
              <SimpleQuestion
                question={q?.question}
                index={i + 1}
                isSub={true}
              />
            </div>
          )
        })}
    </>
  )
}

const subQuestionsStyle = {
  margin: "1rem auto",
  marginLeft: "1.5rem",
  fontWeight: "normal",
}
