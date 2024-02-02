import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrueComponent from './Components/TrueComponent';
import FalseComponent from './Components/FalseComponent';

function App() {
  const condition = false; 
  return(
  <>
    {condition ? <TrueComponent /> : <FalseComponent />}
  </>
  );
}

export default App;
