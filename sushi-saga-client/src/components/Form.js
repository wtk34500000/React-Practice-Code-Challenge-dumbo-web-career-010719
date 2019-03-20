import React from 'react'

class Form extends React.Component {
    state={
        userInput: 0
    }

    handleInputChange=(e)=>{
        this.setState({
            userInput: e.target.value
        })
      }

      handleClick=()=>{
        this.props.handleInputeSubmit(this.state.userInput)
        this.setState({
            userInput: 0
        })
      }
      

render(){
    return (
        <div>
            <input type="number" name="userInput" value={this.state.userInput} onChange={this.handleInputChange}/>
            <button onClick={this.handleClick}>Refill</button>
        </div>
    )}
}

export default Form