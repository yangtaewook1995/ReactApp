
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./components/EmptyPage";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/day/:day">
            </Route>
            <Route path="/create_word">
            </Route>
            <Route path="/create_day">
            </Route>
            <Route>
                <EmptyPage />
            </Route>
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;