const initState = {
    question: [],
    answer: []
}
const rootReducer = (state = initState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'add':
            return {
                ...state,
                question: [...state.question, action.payload]
            }
        case 'clear':
            return {
                ...state,
                question: action.payload
            }
        default:
            return state
    }
}
export default rootReducer