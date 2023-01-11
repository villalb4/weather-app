import './App.css';
import { getData } from './redux/thunks/getData';
import { useDispatch } from 'react-redux';
import Panel from './components/Panel/Panel';
import Weather from './components/Weather/Weather';

function App() {

  const dispatch = useDispatch()

  dispatch(getData())

  return (
    <div className="App">
      <Panel />
      <Weather />
    </div>
  );
}

export default App;
