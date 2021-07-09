import "./App.css";
import Nav from "./components/nav.js";
import NavMobile from "./components/navmobile.js";

function App() {
  if (window.innerWidth >= 1026) {
    return <Nav></Nav>;
  } else if (window.innerWidth <= 1026) {
    return <NavMobile></NavMobile>;
  }
  return (
    <div className="App">
      <Nav></Nav>
    </div>
  );
}

export default App;
