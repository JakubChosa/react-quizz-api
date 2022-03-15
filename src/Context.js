import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider({children}) {
  const [error, setError] = useState(false)
  const [questions, setQuestions] = useState([])
  const [quizzState, setQuizzState] = useState('start')
  const [getNewData, setGetNewData] = useState(false)

  useEffect(()=> {
    const url = `https://opentdb.com/api.php?amount=5`
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch data')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        const questionsObj = data.results.map((obj, index) => {
          const shuffledOptions = [ ...obj.incorrect_answers, obj.correct_answer]
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
          return {options: shuffledOptions, question: obj.question, id: index+1, correct_answer: obj.correct_answer, user_answer: ''}
        })
        setQuestions(questionsObj)
      })
      .catch(err => {
        setError(true)
      })
  },[getNewData])

  function userAnswerChange(option, id){
    setQuestions(prevState => prevState.map(question => {
        if(question.id === id) {
            return {...question, user_answer: option}
        }
        return question
    }))
  }

  return (
    <Context.Provider value={{questions, setQuestions, quizzState, setQuizzState, userAnswerChange, setGetNewData, error}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
