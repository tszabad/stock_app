import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



const ProjectDetails = (props) => {
  const { stock } = props;
  if (stock) {
  return (
    <div className="container section project-details">
    <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{stock.stockName}</span>
            <p>{stock.stockSymbol}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {stock.authorFirstName} {stock.authorLastName}</div>
            <div>2nd September, 2am</div>
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
    stock: stock
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'stocks'
  }])
)(ProjectDetails)
