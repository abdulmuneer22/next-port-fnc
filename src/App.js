import { BrowserRouter as Router,Switch,Route,HashRouter} from "react-router-dom";
import Login from './pages/Login';
import Service from './pages/Service';


const App=()=>{
    return(
        <>
      <Router history={HashRouter} >
            <Switch>
                <Route path="/" component={Login}  exact/>
                <Route path="/service" component={Service}  exact/>
            </Switch>
        </Router>
        </>
    )
}
export default App;