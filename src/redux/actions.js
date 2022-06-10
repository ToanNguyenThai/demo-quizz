export const actionAdd = (data) => {
    return {
        type: 'add',
        payload: data
    }
}
export const actionAddAnswer = (data) => {
    return {
        type: 'add_answer',
        payload: data
    }
}