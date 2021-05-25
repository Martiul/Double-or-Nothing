import {VIEW} from './constants';

function StartScreen(props) {
    return (
        <div className="start-screen">
            <h1> Double or Nothing </h1>
            <div className="vertical">
                <button class="button" onClick={() => props.changeView(VIEW.GAME)}>Start Game</button>
                <button class="button" onClick={() => props.changeView(VIEW.TUTORIAL)}>View Tutorial</button>
            </div>
        </div>
    )
}
export default StartScreen;
