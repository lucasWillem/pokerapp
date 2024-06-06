import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./navigation/Navigator";
import { Alert } from "./components/containers/Alert";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Alert />
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
