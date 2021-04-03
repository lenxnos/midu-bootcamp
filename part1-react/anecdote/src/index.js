import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const { anecdotes } = props
  const initialPoints = 
  new Array(anecdotes.length + 1)
    .join('0')
    .split('')
    .map(parseFloat)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initialPoints)

  const randomNumber = () => Math.floor(Math.random() * anecdotes.length)

  const handleRandom = () => setSelected(randomNumber())
  
  const votePoint = () => setPoints(prev => {
    const copy = [...prev]
    copy[selected] += 1
    return copy
  })

  const Description = ({ anecdote, point }) => <>
    <p>{anecdote}</p>
    <p>has {point} votes</p>
  </>

  const Title = ({ text }) => <h1>{text}</h1>
  const mostVote = points.indexOf(Math.max(...points))

  return (
    <div>
      <Title  text="Anecdote of the day"/>
      <Description anecdote={anecdotes[selected]} point={points[selected]} />
      <button onClick={votePoint}>Vote</button>
      <button onClick={handleRandom}>next anecdote</button>

      <Title  text="Anecdote with most vote"/>
      <Description anecdote={anecdotes[mostVote]} point={points[mostVote]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)