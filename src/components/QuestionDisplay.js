import React, {useContext} from 'react'
import {Context} from '../Context'

export default function QuizzDisplay(props) {
  const { item, optionBackground } = props
  const { user_answer, correct_answer } = item
  const { userAnswerChange } = useContext(Context)

  function decodeHTML(text) {
  let textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
  }

  let displayOpitons
  if(optionBackground === 'quizz'){
    displayOpitons = item.options.map(option => (
      <button
        onClick={() => userAnswerChange(option, item.id)}
        className={`option-btn ${user_answer === option ? 'chosen-option' : ''}`}
        key={option}
      >{decodeHTML(option)}</button>
    ))
  } else if(optionBackground === 'result'){

    displayOpitons = item.options.map(option =>
      {
        let wrongAnswerBackground = option !== correct_answer && option === user_answer ? 'result-wrong-answer' : ''
        let correctAnswerBackground = option === correct_answer ? 'result-correct-answer' : ''
        return (
          <button
            className={`option-btn ${correctAnswerBackground} ${wrongAnswerBackground}`}
            key={option}
          >{option}</button>
        )
      })
  }

  return (
    <div className="question-container">
      <p className="question">{decodeHTML(item.question)}</p>
      <div className="question-options">
        {displayOpitons}
      </div>
      <span className="line"></span>
    </div>
  )
}
