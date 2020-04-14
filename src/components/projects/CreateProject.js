import React, { Component } from 'react'
import {connect} from "react-redux";
import {createStock} from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

import data from '../../assets/nasdaq-listed_json';

class CreateStock extends Component {
  state = {
    stockName: '',
    stockSymbol: '',
    foundSymbol: ''
  }
  componentDidUpdate(){
     
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
      
    })
    this.findSymbol()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createStock(this.state);
    this.props.history.push('/');
  }

  findSymbol =  () =>{
    if(this.state.stockName.length>0){
    const foundName =  data.filter( (el) =>  el.Company.slice(0, this.state.stockName.length) == this.state.stockName
    );
    
   
    const foundSymbol = foundName[0].Symbol;
    this.setState({foundSymbol: foundSymbol});
    
    console.log(foundSymbol)}
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a new stock</h5>
          <div className="input-field">
            <input type="text" id='stockName' onChange={this.handleChange} />
            <label htmlFor="stockName">Stock name</label>
          </div>
          <div style={{color: "red"}}>Stock symbol hint: {this.state.foundSymbol}</div>
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    createStock: (stock) =>dispatch(createStock(stock))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStock)
