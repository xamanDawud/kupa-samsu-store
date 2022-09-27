import logo from "./logo.svg";
import "./App.css";
import LoadGun from "./components/Load_Gun/LoadGun";
import NavBar from "./components/NavBar/NavBar";
import DisplayGun from "./components/Load_Gun/DisplayGun/DisplayGun";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoadGun />
    </div>
  );
}

export default App;
