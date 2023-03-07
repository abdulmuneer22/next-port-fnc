import { BrowserRouter as Router,Switch,Route,HashRouter} from "react-router-dom";
import Login from './pages/Login';


const App=()=>{
    return(
        <>
      <Router history={HashRouter} >
            <Switch>
                <Route path="/" component={Login}  exact/>
            </Switch>
        </Router>
        </>
    )
}
export default App;