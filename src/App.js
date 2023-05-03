import logo from './logo.svg';
import './App.css';
const number = 333;

// const person1 = { name: 'mahfuzur', profession: 'singer' };
// const person2 = { name: 'keka afa', profession: 'cook' };


const person1 = [
  { name: 'mahfuzur', profession: 'singer' },
  { name: 'keka afa', profession: 'cook' },
  { name: 'kurkuri', profession: 'choir' },
  { name: 'keka afa', profession: 'the digital cook' }
];

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

//option 2 static data

// function App() {
//   return (
//     <div className="App">
//       <Person name="halum" profession="dancer"></Person>
//       <Person name="tuktuki" profession="artist"></Person>
//       <Person name="kurkuri" profession="dancer"></Person>
//       <p>Friend show</p>
//       <Friend name="baul" profession="singer"></Friend>
//       <Friend name="sharvai" profession="gutano"></Friend>
//       <Friend name="kukur" profession="dourani"></Friend>
//     </div>
//   );
// }

//option 3 more dynamic data
function App() {
  const nayoks = ["halum", "tuktuki", "kurkuri", "abul"]
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      <p>Friend show</p>
      {
        person1.map(person => <Friend name={person.name} profession={person.profession}></Friend>)
      }
    </div >
  );
}

function Person(props) {
  // console.log(props)
  return (
    <div className='Person'>
      <h1>welcome to my site: {props.name}</h1>
      <h4>Professional {props.profession}</h4>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='Person'>
      <h1>Friend {props.name}</h1>
      <p>kajkormo {props.profession}</p>
    </div>
  )
}

export default App;
