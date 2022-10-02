import "./App.css";
import { Route, Switch } from 'react-router-dom';
// import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Feature from "./components/Feature";
// import Menu from "./components/Menu";
// import Client from "./components/Client";
// import Prize from "./components/Prize";
function App() {
  return (
    <div>
<Header/>
<About/>
<Feature/>
</div>
    );
}

export default App;
