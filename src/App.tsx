import { Reset } from "styled-reset"
import Questionary from "./components/Questionaire"
import { HashRouter,Routes,Route } from "react-router-dom"
import PrivateRoute from "./components/privateRoute"
import Private from "./components/Private"
import Gratitude from "./components/Gratitude"
 function App() {
  return (
      <div>
        <Reset/>
        <HashRouter>
          <Routes>
          <Route path="/" element={<Questionary/>}/>
            <Route path="/private" element={<Private/>}/>
            <Route path="/privateroute" element={<PrivateRoute/>}/>
            <Route path="/gratitude" element={<Gratitude/>}/>
          </Routes>
        </HashRouter>
      </div>
  )
}

export default App