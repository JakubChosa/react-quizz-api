import React, {useContext} from 'react'
import QuestionDisplay from './QuestionDisplay'
import { BounceLoader } from 'react-spinners'
import {Context} from '../Context'

export default function QuizzQuestionst() {
  const {questions, setQuizzState} = useContext(Context)
  const questionElements = questions.map(question => (
      <QuestionDisplay optionBackground='quizz' item={question} key={question.id}/>
  ))

  return (
    <div className="quizz-content">
      <h3 className="quizz-stage--text">Questions</h3>
      {questionElements}
      {questions.length === 0 && <BounceLoader />}
      <button className="primary-btn"
        onClick={()=>setQuizzState('result')}
      >Check Answers</button>
    </div>
  )
}
