import './App.scss'
import HookCalculator from './hooks/HookCalculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Calculator
      </header>
      <div className="body">
        <p>
          Redux
        </p>
        <p>
          Context & Hooks
        </p>
        <HookCalculator />
      </div>
    </div>
  );
}

export default App;
