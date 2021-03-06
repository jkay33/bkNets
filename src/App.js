import React, { Component } from 'react';
import CardContainer from './containers/card_container'
import BarChart from './containers/chart_container';
import ShootingChart from './containers/shooting_container';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

    render(){
      return(
        <div>
          <Header />
          <CardContainer />
          <ShootingChart />
          <BarChart />
        </div>
      )
    }
  }

export default App;
