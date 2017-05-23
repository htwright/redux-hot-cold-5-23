import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {newGuess} from '../actions';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     guesses: [],
        //     feedback: 'Make your guess!',
        //     correctAnswer: Math.round(Math.random() * 100),
        //     showInfoModal: false
        // };
    }

    // newGame() {
    //     this.setState({
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         correctAnswer: Math.round(Math.random() * 100)
    //     });
    // }

    // guess(guess) {
    //     guess = parseInt(guess, 10);
    //     if (isNaN(guess)) {
    //         this.setState({
    //             feedback: 'Please enter a valid number'
    //         });
    //         return;
    //     }

    //     const difference = Math.abs(guess - this.state.correctAnswer);

    //     let feedback;
    //     if (difference >= 50) {
    //         feedback = 'You\'re Ice Cold...';
    //     }
    //     else if (difference >= 30) {
    //         feedback = 'You\'re Cold...';
    //     }
    //     else if (difference >= 10) {
    //         feedback = 'You\'re Warm';
    //     }
    //     else if (difference >= 1) {
    //         feedback = 'You\'re Hot!';
    //     }
    //     else {
    //         feedback = 'You got it!';
    //     }

    //     this.setState({
    //         feedback,
    //         guesses: [...this.state.guesses, guess]
    //     });
    // }
    // newGame() {
    //     this.setState({
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         correctAnswer: Math.round(Math.random() * 100)
    //     });
    // }

    // guess(guess) {
    //     guess = parseInt(guess, 10);
    //     if (isNaN(guess)) {
    //         this.setState({
    //             feedback: 'Please enter a valid number'
    //         });
    //         return;
    //     }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.props.dispatch(newGuess(guess))} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer,
    showInfoModal: state.showInfoModal
});

// Game.defaultProps = {
//     guesses: [],
//     feedback: 'Make your guess!',
//     correctAnswer: Math.round(Math.random() * 100)
// };

export default connect(mapStateToProps)(Game);


        // this.state = {
        //     guesses: [],
        //     feedback: 'Make your guess!',
        //     correctAnswer: Math.round(Math.random() * 100)
        // };