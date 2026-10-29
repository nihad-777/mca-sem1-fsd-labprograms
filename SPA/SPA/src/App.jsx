import React from 'react';
import './App.css';
const App=()=>{
  return(
    <div className="app-container">
      <div className="card">
        <header className="header">
          <h1>Welcome to my React SPA</h1>
          <p>So this is my Single Page Application</p>
        </header>
        <section className="content">
          <p>Everything you see here comes from my coding</p>
          <p>Now lets start with the Contents</p>
          <ul>
            <li>Resume</li>
            <li>Github</li>
            <li>Portfolio</li>
          </ul>
        </section>
        <footer className="footer">
          <p>Copyright Content. Don't take without permission</p>
        </footer>
      </div>
    </div>
  )
}

export default App