export const createStock = (stock) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('stocks').add({
      ...stock,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_STOCK', stock });
    }).catch(err => {
      dispatch({ type: 'CREATE_STOCK_ERROR' }, err);
    });
  }
};