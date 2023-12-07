import './App.css'
import Button from './components/Button/Button'
import Form from './components/Form/Form'

function App() {
  return (
    <>
      <div>
        <h1>Learn to code by watching others </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </div>
      <div>
        <Button txt='Try it free 7 days then $20/mo. thereafter' />
      </div>

      <div>
        <Form />

      </div>

      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>

    </>
  )
}

export default App
