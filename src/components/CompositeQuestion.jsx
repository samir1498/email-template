import React from "react"
import SimpleQuestion from "./SimpleQuestion"

export default function CompositeQuestion({ question_cmplx, index }) {
  return (
    <div>
      <span>
        {index}.{" " + question_cmplx.txt_qst_cmplx}
      </span>
      <div style={subQuestionsStyle}>
        {question_cmplx.sub_qsts.map((sub_qst, i) => {
          return (
            <SimpleQuestion
              question={sub_qst.question}
              key={`sub-simple-q-${sub_qst.question.id_qst}`}
              isSub={true}
              subIndex={i + 1}
              index={index}
            />
          )
        })}
      </div>
    </div>
  )
}
const subQuestionsStyle = {
  margin: "1rem auto",
  marginLeft: "1.5rem",
  fontWeight: "normal",
}
