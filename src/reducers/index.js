const InitialState = {
  count: 0
};

export default mainReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count:state.count + 1}
    default:
      return state
  }
}
