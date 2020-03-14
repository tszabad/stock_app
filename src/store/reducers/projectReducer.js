

const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_STOCK':
      console.log('create stock', action.stock);
      return state;
    case 'CREATE_STOCK_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
