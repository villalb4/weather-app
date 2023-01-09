import './App.css';
import { getData, getFiveDaysData } from './redux/thunks/getData';
import { useDispatch } from 'react-redux';
import Panel from './components/Panel/Panel';

function App() {

  const dispatch = useDispatch()

  dispatch(getData())
  dispatch(getFiveDaysData())

  return (
    <div className="App">
      <Panel />
    </div>
  );
}

export default App;
