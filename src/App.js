import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        Coded by Aleksandra Rudyak, OpenSource available on{" "}
        <a
          href="https://github.com/AleksRu21/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
