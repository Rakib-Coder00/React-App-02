import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [nayoks, setNayoks] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])


  // const nayoks = [{name:'Jhon', age:35}, {name:'Wick', age: 34}, {name:'Tom', age:23}, {name:'Jasmin', age:19},{name:'Malkova', age: 23}]


  return (
    <div className="App">
      <MovieCounter></MovieCounter>

      {
        nayoks.map(nayok=> <Nayok name={nayok.name} key={nayok.id} age={nayok.id}>{nayok}</Nayok>)
         
        }



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Rakib
        </a>
      </header>
    </div>
  );
}

function MovieCounter() {
  let [count, setCount] = useState(0)

  const handleClick =()=>setCount(count+=1)
  const handledClick =()=>setCount(count-=1)


  return (

    <div>

      <h3>Numbers Of movie: {count}</h3>
      <button onClick={handleClick}>Add Movie</button>
      <button onClick={handledClick}>Remove Movie</button>
      <MovieDisplay count={count}></MovieDisplay>

    </div>
  )
}
function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.count}</h4>
}

function Nayok(props) {
  console.log(props.name);
  const nayokStyle = {
    border: "2px solid purple",
  };


  return (
      <div style={nayokStyle}>
        <h1>{props.name} is a React Person</h1>
        <h3>I've Done 100 Project in {props.age || 25} year</h3>
      </div>
      )
}


export default App;
