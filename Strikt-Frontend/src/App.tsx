import {BrowserRouter as Router} from 'react-router-dom'
import { LoginPage } from './components'
function App() {


  return (
    <Router>
      <div>
        <LoginPage />
      </div>
    </Router>
  )
}

export default App
