const initialState = {
    broads: [],
    user: ['Nhan, Nghia, Linh, Jimmy'],
  };
  
const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case "CREATE_BROAD":
    return {
        ...state,
        broads: [...state.broads, action.payload],
    };
    default:
    return state;
}
};

export default rootReducer;