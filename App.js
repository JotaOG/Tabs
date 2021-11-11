import React, { useState } from "react";
import "./App.css";
import { DisplayTabs } from "./Components/DisplayTabs";
import { Tabs } from "./Components/Tabs";

function App() {

  const tab = [{name:"Tab 1", message: <div>
  <h2>Angular</h2>
  <p>
    Angular es un framework para aplicaciones web desarrollado en
    TypeScript, de código abierto, mantenido por Google, que se utiliza para
    crear y mantener aplicaciones web de una sola página. Wikipedia
  </p>
</div>}, {name:"Tab 2", message: <div>
    <h2>React</h2>
    <p>
      React es una biblioteca Javascript de código abierto diseñada para crear
      interfaces de usuario con el objetivo de facilitar el desarrollo de
      aplicaciones en una sola página. Es mantenido por Facebook y la
      comunidad de software libre. En el proyecto hay más de mil
      desarrolladores libres. Wikipedia
    </p>
  </div>}, {name:"Tab 3", message: <div>
    <h2>Express</h2>
    <p>
      Express.js, o simplemente Express, es un marco de aplicación web de
      back-end para Node.js, lanzado como software gratuito y de código
      abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web
      y API. Se le ha llamado el marco de servidor estándar de facto para
      Node.js. Wikipedia
    </p>
  </div>}]
  
  const [content, setContent] = useState();

  return (
    <div className="App">
      <Tabs tab={tab} setContent={setContent}/>
      <DisplayTabs content={content}/>
    </div>
  );
}

export default App;
