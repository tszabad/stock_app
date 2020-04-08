import React  from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import {Link} from 'react-router-dom'

import Stock from './Stock'


const ProjectDetails = (props) => {
  

  const { stock, auth } = props;
  
  if (!auth.uid) return <Redirect to='/signin' /> 

  if (stock) {
  return (
    <div className="container section project-details">
    <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{stock.stockName}</span>
            <p>{stock.stockSymbol}</p>
          </div>
          <Stock stockSymbol = {stock.stockSymbol}></Stock>
          
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {stock.authorFirstName} {stock.authorLastName}</div>
            <div>{moment(stock.createdAt.toDate()).calendar()}</div>
            <Link className='secondary-content' to='/'  >
            <i className="material-icons" style={{color:"#44a6c6"}}>arrow_back</i>
            </Link>
          </div>
        </div>
    </div>
  )
} else {
  return (
    <div className="container center">
      <p>Loading stock...</p>
    </div>
  )
}
}


const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const stocks = state.firestore.data.stocks;
  const stock = stocks ? stocks[id] : null
  return {
    stock: stock,
    auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'stocks'
  }])
)(ProjectDetails)
