import Homepage from "./components/Homepage";
import { Route, Switch } from "wouter";


const App = () => {


  return (
    <>
      <Switch>
        <Route path="/" component={Homepage} />

        <Route path="/users/:name">
          {(params) => <p className="p-4">{params.name}'s Page!</p>}
        </Route>

        {/* Throw a 404 error is the path doesn't match anything */}
        {
        <Route>
          <p className="p-4">404: Page Not Found!</p>
        </Route>
        }
      </Switch>


    </>
  )
}

export default App;
