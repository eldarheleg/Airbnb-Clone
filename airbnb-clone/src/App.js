import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  let newData = data.map((single) => {
    return (
      <Card id={single.id} img={single.coverImg} status={single.stats} location={single.location} />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{newData}</section>
      
    </div>
  );
}

export default App;
