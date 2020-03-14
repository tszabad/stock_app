import React, { Component } from 'react'
import {connect} from "react-redux";
import {createStock} from '../../store/actions/projectActions'

class CreateStock extends Component {
  state = {
    stockName: '',
    stockSymbol: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createStock(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='stockName' onChange={this.handleChange} />
            <label htmlFor="stockName">Stock name</label>
          </div>
          <div className="input-field">
            <input type="text"  id="stockSymbol"  onChange={this.handleChange}></input>
            <label htmlFor="stockSymbol">Stock symbol</label>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (dispatch) =>{
  return{
    createStock: (stock) =>dispatch(createStock(stock))

  }
}

export default connect(null,mapStateToProps)(CreateStock)
