import React, {useState} from 'react'
import ResultCart from "./ResultCart";

const Add = () => {
const [query, SetQuery] = useState("");
const [results,setResults] = useState([]);

function onChange (e){
    SetQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4d71eac5d3f1a72564a09ad457e7bfd&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((res)=>res.json() )
    .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  
}
  return (
    <div className='add-page' >
        <div className='container' > 
        <div className='add-content' >
            <img src='https://64.media.tumblr.com/60d40dcf8b890fa9278e6d0658b80f72/58e5a6f8f2be5db3-58/s1280x1920/40cbce0f93616aa0ead8ca3c6367d3c26ac3e82e.jpg'/>
        <div className='titles'>
            <h1>Hoş Geldiniz..</h1>
            <h2>
            Kaliteli zaman, değerli içerik.
            Dizi, film, belgesel, program, ve sadece XX’de bulabileceğiniz yapımları keşfedin.

            </h2>
            {query}
        </div>
        <div className='input-wrapper' >
            <input type="text"
            value={query}
            onChange={onChange} 
            placeholder='ara..' />
            
        </div>
        {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
        )}
        </div>
        </div>
      
    </div>
  )
}

export default Add
