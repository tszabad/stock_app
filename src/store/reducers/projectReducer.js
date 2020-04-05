

const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_STOCK':
      console.log('create stock', action.stock);
      return state;
    case 'CREATE_STOCK_ERROR':
      console.log('create stock error');
      return state;
      case 'DELETE_STOCK_SUCCESS':
        console.log('delete stock success');
        return state;
      case 'DELETE_STOCK_ERROR':
        console.log('delete stock error');
        return state;
    default:
      return state;
  }
};

export default projectReducer;
