import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './navigation/Navigator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
