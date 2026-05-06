
import './App.css'
import Parents from './components/Parents.jsx'
import Api from './apifetch/Api.jsx'

function App() {
  return (
    <>
      <section id="center">
      
        <div>
          <h1>Get started</h1>
          <Parentcomponent />
          <Api />
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
      </section>
    </>
  )
}

export default App
