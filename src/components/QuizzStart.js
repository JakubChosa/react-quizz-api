import React, {useContext} from 'react'
import {Context} from '../Context'

export default function QuizzStart() {
  const {setQuizzState} = useContext(Context)

  return (
    <div className="quizz-content">
      <div className="quizz-stage">
        <h3 className="quizz-stage--text">Questions</h3>
        <p className="quizz-start-subtitle">Can you guess everything ?</p>
      </div>
      <button className="primary-btn"
        onClick={()=>setQuizzState('game')}
      >Let's begin!</button>
    </div>
  )
}
