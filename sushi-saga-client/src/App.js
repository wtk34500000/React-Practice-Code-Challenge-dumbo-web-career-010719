import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis: [],
    price: 1000,
    sushiEaten: [],
    userInput: 0
  }

componentDidMount(){
  fetch("http://localhost:4000/sushis")
  .then(resp => resp.json())
  .then(sushis => this.setState({sushis}))
}

handlePrice=(sushiObj)=>{
  let newBalance=this.state.price-sushiObj.price
  if(newBalance > 0){
    this.setState({
      price: newBalance,
      sushiEaten: [...this.state.sushiEaten, sushiObj]
    })
  }else{
    alert("You dont have enough balance, Please refill!")
  }
}



handleInputeSubmit=(input)=>{
    this.setState({
      price: input
    })
}

  render() {
    return (
      <div className="app">
        <Form handleInputeSubmit={this.handleInputeSubmit}/>
        <SushiContainer  sushis={this.state.sushis} handlePrice={this.handlePrice} sushiEaten={this.state.sushiEaten}/>
        <Table price={this.state.price} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;