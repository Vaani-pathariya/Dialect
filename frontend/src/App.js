import {Routes,Route} from 'react-router-dom' 
import Main from './pages/Main';
import "./app.css"
import Display from './pages/Display';
import Translate from './pages/Translate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}>
          <Route path="" element={<Display/>}></Route>
          <Route path="/translate" element={<Translate/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
