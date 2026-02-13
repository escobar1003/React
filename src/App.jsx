
import Punto1 from "./components/Punto1";
import Punto2 from "./components/Punto2";
import Punto3 from "./components/Punto3";
import Punto4y5 from "./components/Punto4y5";
import Punto6 from "./components/Punto6";
import Punto7 from "./components/Punto7";
import Punto8 from "./components/Punto8";
import Punto9 from "./components/Punto9";
import Punto10 from "./components/Punto10";
import "./App.css";



export default function App() {

  return (
    <div>
      <h1>Taller React Completo</h1>

      <Punto1 />
      <Punto2 />
      <Punto3 />
      <Punto4y5 />
      <Punto6 />
      <Punto7 />
      <Punto8 />
      <Punto9 />
      <Punto10 />

    </div>
  );
}

import EliminarDato from "./EliminarDato";


function App() {
  let edad=15;

  return (
    <div>
    {/*operador ternario en react*/}
    <EliminarDato></EliminarDato>
      [edad==18?(<p>mayor edad</p>):(<p>menor de edad</p>)] 
    </div>
    
  )
}

export default App

