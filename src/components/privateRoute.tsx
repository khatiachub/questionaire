
import { Navigate, useLocation } from "react-router-dom";
import CovidStatus from "./CovidStatus";
import Vaccination from "./Vaccionation";


export default function PrivateRoute(){

    const location=useLocation();
    if (location.state.name?location.state.name:null&&location.state.lastname?location.state.lastname:null&&location.state.email?location.state.email:null) {
      return <CovidStatus/>;
    }else if( ((location.state.selectedOption?location.state.selectedOption:null &&
      location.state.select?location.state.select:null &&
      location.state.numbers?.number &&
      location.state.numbers?.quantity) ||
      location.state.numbers?.date)||location.state.selectedOption?location.state.selectedOption:null==='no'||location.state.selectedOption?location.state.selectedOption:null==='now'){
      return <Vaccination/>
    }else{
      return <Navigate to="/privateroute" replace />;
    }
    return(
      <></>
    )
}

