import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ElectronicsAdd from "./components/ElectronicsAdd";
import ElectronicsUpdate from "./components/ElectronicsUpdate";
import Admin from "./components/Admin";
import { combineReducers, createStore } from "redux";
import electronics from "./reducers/electronics";
import UpdateDetails from "./components/ElectronicsUpdate/UpdateDetails";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
      <Route path = "/admin/update/:id" exact={true}>
        <UpdateDetails />
      </Route>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
