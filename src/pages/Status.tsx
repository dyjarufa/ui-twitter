import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

const answers = [
  'I agree with that 👌',
  "Yes, it's make sense 💡",
  'congrats about your progress!👏',
]

import './Status.css'

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum? Nihil, suscipit tempora harum, ipsum cum maxime iure corrupti unde consequuntur dolorem maiores perferendis quos dolore animi laborum dolores accusantium." />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/dyjarufa.png" alt="Jady Rufino" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  )
}
