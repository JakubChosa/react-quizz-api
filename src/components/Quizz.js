import React, {useContext} from 'react'
import {Context} from '../Context'
import QuizzStart from './QuizzStart'
import QuizzQuestions from './QuizzQuestions'
import QuizzResult from './QuizzResult'

export default function Quizz() {
  const { quizzState, error } = useContext(Context)

  return (
    <div className="quiz-container">
      {quizzState === 'start' && <QuizzStart />}
      {quizzState === 'game' && error && <h1 className="error">Sorry it seems like there was a problem</h1>}
      {quizzState === 'game' && !error && <QuizzQuestions />}
      {quizzState === 'result' && !error && <QuizzResult />}
    </div>
  )
}
