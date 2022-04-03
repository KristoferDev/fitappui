import './App.css';
import Exercises from './Components/Exercises';
import Users from './Components/User';
import Workouts from './Components/Workout';

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Exercises />
      <Users />
      <Workouts />
    </div>
  );
}

export default App;
