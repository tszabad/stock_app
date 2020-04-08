import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { deleteStock } from '../../store/actions/projectActions'

class Dashboard extends Component {

  constructor(props){
    super(props);
  
    this.state = this.props;
    this.handleDelete=this.handleDelete.bind(this);
    
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState !== nextProps ) {
      return { stocks: nextProps.stocks };
    }
    else{ 
      return null;
    }
  }
  handleDelete(id){
    this.props.deleteStock(id);
    console.log(id);
    this.props.history.push('/');
  }



  render() {
    
    const { stocks, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <ProjectList stocks={this.state.stocks} handleDelete={this.handleDelete.bind(this)} />
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.firestore.ordered.stocks,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    
    deleteStock: (id) => dispatch(deleteStock(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'stocks', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
