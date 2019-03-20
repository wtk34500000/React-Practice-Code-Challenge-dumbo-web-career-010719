import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
    state={
      start: 0,
      end: 4
    }

    handleSushiCount = () => {
      if(this.state.start <= 92){
        this.setState({
          start: this.state.start+4,
          end: this.state.end+4
        })
      }else{
        this.setState({
          start: 0,
          end: 4
        })
      }
    }

  render(){
    const arrOfSushis = this.props.sushis.map(sushi => <Sushi  sushiEaten={this.props.sushiEaten} handlePrice={this.props.handlePrice} key={sushi.id} sushi={sushi}/>).slice(this.state.start, this.state.end)

    return (
      <Fragment>
        <div className="belt">
          
          {arrOfSushis}
          <MoreButton handleSushiCount={this.handleSushiCount}/>
        </div>
      </Fragment>
    )}
}

export default SushiContainer