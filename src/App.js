
import './App.css';

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

    </>
  );
}

export default App;
