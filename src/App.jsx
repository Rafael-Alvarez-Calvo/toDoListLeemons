import { ToDoListContainer } from "./components/ToDoListContainer/ToDoListContainer"
import './App.scss'

import leemonsLogo from "./assets/img/leemonsLogo.png"

function App() {

  return (
    <div className='main-container'>
      <div className='header'>
        <h1 className="header__title">TO DO LIST</h1>
        <img className="header__logo" src={leemonsLogo} alt="leemons logo" />
      </div>
      <ToDoListContainer />
    </div>
  )
}

export default App
