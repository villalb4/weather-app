import './App.css';
import { getData, getFiveDaysData } from './redux/thunks/getData';
import { useDispatch } from 'react-redux';
import Panel from './components/Panel/Panel';
import Weather from './components/Weather/Weather';

function App() {

  const dispatch = useDispatch()

  dispatch(getData())
  dispatch(getFiveDaysData())

  return (
    <div className="App">
      <Panel />
      <Weather />
    </div>
  );
}

export default App;
