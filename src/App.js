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
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>show number:{number}</p>
//         <div style={personstyle}>
//           <h2>singer section</h2>
//           <p>performer:{person1.name} {person1.profession}</p>
//           <p>chef:{person2.name} {person2.profession} </p>
//         </div>

//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <p>Friend show</p>
      <Friend></Friend>
    </div>
  );
}
function Person() {
  return (
    <div className='Person'>
      <h1>welcome to my site</h1>
      <h4>Professional developer</h4>
    </div>
  )
}

function Friend() {
  return (
    <div className='Person'>
      <h1>Friend</h1>
      <p>kono kajer na</p>
    </div>
  )
}

export default App;
