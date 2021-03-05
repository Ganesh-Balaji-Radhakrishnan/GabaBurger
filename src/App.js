import React from "react"

import Layout from "./Hoc/layout/Layout.jsx"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"

function App() {
  return (
    <div className="App">
      <Layout>
          <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
