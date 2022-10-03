import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Dictionary</h1>
          <Dictionary defaultKeyword=" " />
        </div>
      </header>
      <footer>Project coded by Alice Yang and it is open-sourced on <a href="https://github.com/Ayang471/homework-dictionary-project" target="_blank" rel="noreferrer">
        GitHub
      </a> and hosted on <a href="https://creative-tiramisu-c25be9.netlify.app" target="_blank" rel="noreferrer">Netlify</a>.</footer>
    </div>
  );
}

