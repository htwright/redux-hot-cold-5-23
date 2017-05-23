import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {newGuess, newGame, toggleInfoModal} from '../actions';

export function Game(props){
    return (
            <div>
                <Header onNewGame={() => props.dispatch(newGame())} onShowModal={()=>props.dispatch(toggleInfoModal())} modalShowing={props.showInfoModal}/>
                <GuessSection feedback={props.feedback}
                    onGuess={(guess) => props.dispatch(newGuess(parseInt(guess)))} />
                <GuessCount count={props.guesses.length} />
                <GuessList guesses={props.guesses} />
            </div>
    );
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer,
    showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(Game);
