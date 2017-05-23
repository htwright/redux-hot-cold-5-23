import {NEW_GAME, NEW_GUESS, TOGGLE_INFO_MODAL} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false
};

export const reducer = (state = initialState, action) => {

    if (action.type === NEW_GAME){
        return initialState;
    } else if (action.type === NEW_GUESS){
        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback: feedbackGenerator(Math.abs(action.guess - state.correctAnswer))
        });
    } else if (action.type === TOGGLE_INFO_MODAL){
        return Object.assign({}, state, {showInfoModal: !state.showInfoModal});
    }
    return state;
};

function feedbackGenerator(difference) {
    // const difference = Math.abs(action.guess - state.correctAnswer);
    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }
    return feedback;
}