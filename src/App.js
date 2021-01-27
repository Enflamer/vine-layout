import './App.css';
import Header from './components/header'
import Text from './components/text'
import Collection from "./components/collection";
import "./style/tools.scss";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Text></Text>
      <Collection></Collection>
    </div>
  );
}

export default App;
