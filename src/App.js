import React, { Component } from 'react';


//Layout
import Layout from './components/Layout/Layout';

//BurgerBuilder
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
