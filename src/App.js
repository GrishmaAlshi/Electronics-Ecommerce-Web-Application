import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ElectronicsAdd from "./components/ElectronicsAdd";
import ElectronicsUpdate from "./components/ElectronicsUpdate";
import Admin from "./components/Admin";
import { combineReducers, createStore } from "redux";
import electronics from "./reducers/electronics";

const reducer = combineReducers({electronics:electronics});
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Route path="/admin/add" exact={true}>
        <ElectronicsAdd />
      </Route>
      <Route path="/admin/update" exact={true}>
        <ElectronicsUpdate />
      </Route>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
