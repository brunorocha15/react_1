import "./styles.css";
import Header from "./header";
import Soma from "./Soma";
import Sub from "./Sub";
import Div from "./Div";
import Mult from "./Mult";

export default function App() {
  return (
    <div className="App">
      <h1>Bruno Gonçalves</h1>
      <h2>Desafio 22</h2>
      <Header />
      <Soma a={15} b={15} />
      <Sub a={15} b={15} />
      <Mult a={18} b={4} />
      <Div a={15} b={15} />
    </div>
  );
}
