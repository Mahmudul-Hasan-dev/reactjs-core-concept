import logo from './logo.svg';
import './App.css';
const number = 333;

const person1 = { name: 'mahfuzur', profession: 'singer' };
const person2 = { name: 'keka afa', profession: 'cook' };

const personstyle = {
  color: 'blue',
  backgroundColor: 'yellow',
  borderRadius: '10px',
  padding: '5px'

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>show number:{number}</p>
        <div style={personstyle}>
          <h2>singer section</h2>
          <p>performer:{person1.name} {person1.profession}</p>
          <p>chef:{person2.name} {person2.profession} </p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
