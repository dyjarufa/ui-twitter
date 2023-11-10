import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'I agree with that 👌',
    "Yes, it's make sense 💡",
    'congrats about your progress!👏',
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum? Nihil, suscipit tempora harum, ipsum cum maxime iure corrupti unde consequuntur dolorem maiores perferendis quos dolore animi laborum dolores accusantium." />

      <Separator />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/dyjarufa.png" alt="Jady Rufino" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  )
}
