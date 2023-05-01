import React from "react"
import SimpleQuestion from "./SimpleQuestion"
import CompositeQuestion from "./CompositeQuestion"
import questionsData from "../data/questions.json"

export default function EmailTemplate() {
  const Questions = questionsData

  return (
    <div style={container}>
      {Questions.map((question, i) => {
        if (question?.type_qst) {
          if (
            question?.type_qst === "qst" ||
            question?.type_qst === "sub_qst"
          ) {
            return (
              <div style={questionContainerStyle} key={question?.id_qst}>
                <h2 style={{ textAlign: "center" }}>
                  {Questions?.length
                    ? `${i + 1} of ${Questions?.length || ""}`
                    : ""}
                </h2>
                <SimpleQuestion
                  question={question}
                  index={i + 1}
                  key={`simple-q-${question.id_qst}`}
                />
              </div>
            )
          }
        }

        return (
          <div style={questionContainerStyle}>
            <h2 style={{ textAlign: "center" }}>
              {Questions?.length
                ? `${i + 1} of ${Questions?.length || ""}`
                : ""}
            </h2>
            <CompositeQuestion
              question_cmplx={question}
              index={i + 1}
              key={`composite-q-${question.id_qst}`}
            />
          </div>
        )
      })}
    </div>
  )
}

const questionContainerStyle = {
  width: "40rem",
  minHeight: "fit-content",
  padding: "2rem",
  paddingTop: "0",
  margin: "0.5rem",

  borderRadius: "1rem",
  border: "1px solid",

  boxShadow: "0px 0px 3px #333",
}

const container = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
}
