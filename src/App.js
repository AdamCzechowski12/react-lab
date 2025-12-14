import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() 
{
  const [title, setTitle] = useState('Wall-E');

let message;

if (title.length < 5) {
    message = "Tutuł jest za krótki. Nagrywają takie filmy?";
} else if (title.length < 15) {
    message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
} else {
    message = "Tytuł jest za długi, nikt tego nie zapamięta.";
}
    function handleChange(event) {
        setTitle(event.target.value);
    }
const movies = [

    {title: "Wall-E"},

    {title: "Pulp Fiction"},

    {title: "Matrix"},

    {title: "1670"},

];
    return (
      
        <div >
            <h1>My favourite movies to watch</h1>
            <h1>Titles</h1>
             <ul>
 
    {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}

</ul>

            <h2>My favourite movie for today is {title}</h2>
              {
              title.length > 0 && <div>{message}</div>
              }
            <input type="text" onChange={handleChange}/>
            <button type="button" onClick={() => alert(title)}>Pokaż tytuł filmu</button>
      
        </div>
    );
}

export default App;


//test 123
