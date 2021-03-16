import React, { Component } from 'react';
import CardContainer from './containers/card_container'
import BarChart from './containers/chart_container';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        Data: {},
      };
    }
    

    render(){
      return(
        <div>
          <CardContainer />
          <BarChart />
        </div>
      )
    }
  }

export default App;
