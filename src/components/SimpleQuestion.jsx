import React from "react"
import Answer from "./Answer"

const allAnswers = [
  24, 26, 30, 32, 35, 39, 42, 45, 48, 50, 52, 54, 56, 58, 60, 62,
]

export default function SimpleQuestion({ question, index, subIndex, isSub }) {
  return (
    <div>
      <span style={{ fontSize: "1rem" }}>
        {index}.{isSub ? subIndex : ""}
        {" " + question.txt_qst}
      </span>

      {question.answer.map((answer, i) => {
        return (
          allAnswers?.includes(answer.id_ans) && (
            <Answer
              answer={answer}
              key={`ans-${answer.id_ans}`}
              question={question}
            />
          )
        )
      })}
    </div>
  )
}
