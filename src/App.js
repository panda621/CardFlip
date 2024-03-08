import "./App.css";
import { MyProvider } from "./context/MyContext";
import Body from "./components/Body";

function App() {
  return (
    <MyProvider> 
       <div className="App">
          <h1>Card Flip</h1>
          <Body />
        </div>
    </MyProvider>
  );
}

export default App;
