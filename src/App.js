import List from "./components/productsList";
import TopBarre from "./components/topBarre";
import "./style.scss";
const App = () => {
  return (
    <div className="App">
      <TopBarre />
      <List />
    </div>
  );
};

export default App;
