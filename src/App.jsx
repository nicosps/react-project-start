import Header from './Components/Header';
import Footer from './Components/Footer';
import {ReactRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="content">
      <Header />
      <p className="m-3 p-3 border-2 border-dashed">
        This is the main content of the app.
      </p>

      <Router>
        
      </Router>
      <Footer />
      

    </div>

  );
};

export default App;
