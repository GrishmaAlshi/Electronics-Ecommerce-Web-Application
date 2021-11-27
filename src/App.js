import Home from './components/Home/index';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Shop from "./components/Shop/index";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/shop">
                    <Shop/>
                </Route>
                <Route path="/login">
                </Route>
            </div>
        </BrowserRouter>

    );
}

export default App;
