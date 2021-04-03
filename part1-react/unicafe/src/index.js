import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => <h1>{text}</h1>

const Stadistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Buttons = ({ handleAddBad, handleAddGood, handleAddNeutral }) => (
  <div>
    <Button text="good" onClick={handleAddGood}/>
    <Button text="neutral" onClick={handleAddNeutral} />
    <Button text="bad" onClick={handleAddBad} />
  </div>
)

const Stadistics = ({ stadistics }) => {
  const [good, neutral, bad] = stadistics
  const absNumber = number => Math.abs(number)
  const all = stadistics.reduce((prev, item) => (prev + absNumber(item)), 0)
  const average = (good - bad) / all
  const positive = `${(good / all) * 100} %`

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <Stadistic text="good" value={good} />
        <Stadistic text="neutral" value={neutral} />
        <Stadistic text="bad" value={bad} />
        <Stadistic text="all" value={all} />
        <Stadistic text="average" value={average} />
        <Stadistic text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stadistics = [good, neutral, bad]

  const handleAddGood = () => setGood(good + 1)
  const handleAddNeutral = () => setNeutral(neutral + 1)
  const handleAddBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text="Give feedback" />
      <Buttons
        handleAddGood={handleAddGood}
        handleAddNeutral={handleAddNeutral}
        handleAddBad={handleAddBad}
      />
      <Title text="Stadistics" />
      <Stadistics stadistics={stadistics} /> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)