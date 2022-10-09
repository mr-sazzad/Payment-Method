import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
      <div className="dark:bg-slate-600 w-full bg-slate-50 text-black dark:text-white">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
