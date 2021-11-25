import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

import ElectronicsAdd from "./components/ElectronicsAdd";
import ElectronicsUpdate from "./components/ElectronicsUpdate";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Route path="/admin/add" exact={true}>
        <ElectronicsAdd />
      </Route>
      <Route path="/admin/update" exact={true}>
        <ElectronicsUpdate />
      </Route>
    </BrowserRouter>
  );
}

export default App;
