import { useState } from 'react'; import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not.
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>

      <Navbar title="TextUtils01" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>

      {/* <Router>

        <Navbar title="TextUtils01" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >

          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />}>
            </Route>

            <Route exact path="/About" element={<About />}>
            </Route>
          </Routes>

        </div>
      </Router> */}
    </>
  );
}

export default App;

