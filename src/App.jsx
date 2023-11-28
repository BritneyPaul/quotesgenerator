import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function App() {
  const [pagetoEra, setPageToEra] = useState('')

  const handlePageToEraClick = () =>{
    setPageToEra()
  }

  return (
    <div>
      {/* <h2>Aesthetically a swiftie</h2>
      <Link to={'/about'} style={{ marginRight: '25px', textDecoration: 'none', color: '#000', textAlign: 'right' }}>About</Link>
      <p>insert some ts quote here oh an idea.... insert blondies world pinterest board photos.</p> */}

      <section>
        <article style={{ textAlign: 'center' }}>
          <h1>Quotes based on your era</h1>
          <p>Choose your era.</p>
        </article>

        <ol>
          <div className="albumsFlexcontainer">
            <li>
              <Link to={'/album-debut'}>
                <button onClick={handlePageToEraClick}>Debut</button>
              </Link>
            </li>

            <li>
            <Link to={'/album-fearless'}>
                <button onClick={handlePageToEraClick}>Fearless</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-speaknow'}>
                <button onClick={handlePageToEraClick}>Speak now</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-red'}>
                <button onClick={handlePageToEraClick}>Red</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-1989'}>
                <button onClick={handlePageToEraClick}>1989</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-reputation'}>
                <button onClick={handlePageToEraClick}>Reputation</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-lover'}>
                <button onClick={handlePageToEraClick}>Lover</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-folklore'}>
                <button onClick={handlePageToEraClick}>Folklore</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-evermore'}>
                <button onClick={handlePageToEraClick}>Evermore</button>
              </Link>
            </li>

            <li>
              <Link to={'/album-midnights'}>
                <button onClick={handlePageToEraClick}>Midnights</button>
              </Link>
            </li>

          </div>
        </ol>

      </section>
    </div>
  )
}

export default App;


//   < div >
// <h2>Aesthetically a swiftie</h2>
// <a href="About.html" style={{ marginRight: '25px', textDecoration: 'none', color: '#000', textAlign: 'right' }}>About</a>
// <p>insert some ts quote here oh an idea.... insert blondies world pinterest board photos.</p>

// <header>
//   <h2>Taylor swift quotes</h2>
// </header>

// <section>
//   <article style={{ textAlign: 'center' }}>
//     <h1>Quotes based on your era</h1>
//     <p>Choose your era.</p>
//   </article>

//   <ol>
//     <div className="albumsFlexcontainer">
//       <li>
//         <a href="Debut.html">
//           <button id="debBtn" type="button">Debut</button>
//         </a>
//       </li>
//       {/* Add other era buttons similarly */}
//     </div>
//   </ol>
// </section>
