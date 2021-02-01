import './App.css';
import Header from './components/header'
import Text from './components/text'
import Collection from "./components/collection";
import Record from "./components/record";
import Footer from "./components/footer";
import "./style/tools.scss";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Text></Text>
      <Collection></Collection>
      <Record></Record>
      <Footer></Footer>
    </div>
  );
}

export default App;
