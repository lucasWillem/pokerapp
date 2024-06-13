import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@routing/router';
import { HamburgerSidebar } from '@components/library/HamburgerSideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <HamburgerSidebar />
      </Router>
    </div>
  );
}

export default App;
