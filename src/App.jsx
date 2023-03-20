import mountains from "../public/images/mountains.jpg";

const App = () => {
  return (
    <div className="App">
      <img src={mountains} alt="mountains" width="350" />
      <header className="App-header">
        <h1>Online Book Store</h1>
        <p>
          An app for selling and buying books with user friendly interface
          compatible for all divices
        </p>
      </header>
    </div>
  );
};

export default App;
