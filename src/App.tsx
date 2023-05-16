import { Reset } from "styled-reset"
import Questionary from "./components/Questionaire"
import { HashRouter,Routes,Route } from "react-router-dom"
import Private from "./components/Private"
import CovidStatus from "./components/CovidStatus"
import Vaccination from "./components/Vaccionation"
import CovidPolice from "./components/CovidPolice"
import Gratitude from "./components/Gratitude"

 function App() {
  return (
      <div>
        <Reset/>
        <HashRouter>
          <Routes>
            <Route path="/"element={<Questionary/>}/>
            <Route path="/private"element={<Private/>}/>
            <Route path="/covidstatus"element={<CovidStatus/>}/>
            <Route path="/vaccination"element={<Vaccination/>}/>
            <Route path="/covidpolice"element={<CovidPolice/>}/>
            <Route path="/gratitude"element={<Gratitude/>}/>
          </Routes>
        </HashRouter>
      </div>
  )
}

export default App