import "./App.css";
import Nav from "./components/nav.js";
import NavMobile from "./components/navmobile.js";

function App() {
  if (window.innerWidth >= 426) {
    return <Nav></Nav>;
  } else if (window.innerWidth <= 425) {
    return <NavMobile></NavMobile>;
  }
  return (
    <div className="App">
      <NavMobile></NavMobile>
    </div>
  );
}

export default App;
