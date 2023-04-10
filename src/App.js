import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Tender from './components/Tender';
function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/Tender" component={Tender} />
        
        <Redirect from="/" to="/Login" />
      </Switch>
    </>
  );
}

export default App;
