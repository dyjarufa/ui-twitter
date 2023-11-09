import React from 'react'
import ReactDOM from 'react-dom/client'

import './globals.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

const tweets = ['my first tweet', 'Test', 'Its works!']

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/dyjarufa.png" alt="Jady Rufino" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map((tweet) => (
            <Tweet key={tweet} content={tweet} />
          ))}
        </main>
      </div>
    </div>
  </React.StrictMode>
)
