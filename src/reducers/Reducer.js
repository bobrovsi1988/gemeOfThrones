import houses from './../json/game-of-thrones';
const reducer = (state = houses, action) => {
    switch(action.type) {
        case "Peoples":
            return state.concat([action.data])
        default:
            return state;
    }
}

export default reducer;