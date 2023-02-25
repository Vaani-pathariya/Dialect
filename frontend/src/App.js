import {Routes,Route} from 'react-router-dom' 
import Main from './pages/Main';
import "./app.css"
import Display from './pages/Display';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}>
          <Route path="" element={<Display/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
