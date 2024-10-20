import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <footer>
        <p className="author">
          This dictionary was created by Beatriz Azevedo. It's open sourced on
          Github and hosted on Netlify
        </p>
      </footer>
    </div>
  );
}

export default App;
