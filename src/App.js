import React, { Component } from 'react';
import CardContainer from './containers/card_container'
// import Chart from './components/charts';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        Data: {},
      };
    }
    

    render(){
      const {Data} = this.state;
      console.log(Data[0]);
      return(
        <div>
          <CardContainer />
        </div>
      )
    }
  }

export default App;
