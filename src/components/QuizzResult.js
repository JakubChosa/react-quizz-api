import React, {useContext, useEffect} from 'react'
import QuestionDisplay from './QuestionDisplay'
import {Context} from '../Context'

export default function QuizzStart() {
  const {questions, setQuizzState, setGetNewData, setQuestions} = useContext(Context)
  const [score, setScore] = React.useState(0)

  useEffect(() => {
    setScore(questions.filter(question => (
      question.user_answer === question.correct_answer
    )).length)
  },[questions])
  const questionElements = questions.map(question => (
      <QuestionDisplay optionBackground='result' item={question} key={question.id}/>
  ))

  return (
    <div className="quizz-content">
      <h3 className="quizz-stage--text">Results</h3>
      {questionElements}
      <div className="quizz-results">
        <p className="quizz-results--text">Correct Anwers {score}/5</p>
          <button className="primary-btn"
            onClick={()=>{
              setQuestions([])
              setGetNewData(prevState => !prevState)

                setQuizzState('game')

            }}
          >Start Again</button>
      </div>
    </div>
  )
}
