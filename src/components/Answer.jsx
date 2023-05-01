import React from "react"
import SubQuestions from "./SubQuestions"

export default function Answer({ answer }) {
  return (
    <div
      style={{
        fontWeight: "bold",
        fontSize: "1.15rem",
        marginLeft: "2rem",
        padding: "0.5rem 1rem",
        textAlign: "left",
        marginTop: " 0.75rem",
      }}
    >
      <span>{answer.txt_ans}</span>

      <SubQuestions answer={answer} />
    </div>
  )
}
