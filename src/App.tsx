import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@routing/router';
import { AuthMenu } from '@components/containers/AuthMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthMenu />
      </Router>
    </div>
  );
}

export default App;
