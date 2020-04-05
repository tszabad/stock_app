export const createStock = (stock) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('stocks').add({
      ...stock,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_STOCK', stock });
    }).catch(err => {
      dispatch({ type: 'CREATE_STOCK_ERROR' }, err);
    });
  }
};

export const deleteStock = (id) => {
 
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('stocks').doc(id).delete().then(() => {
      dispatch({ type: 'DELETE_STOCK_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'DELETE_STOCK_ERROR' }, err);
    });
    
    
  }
  
};