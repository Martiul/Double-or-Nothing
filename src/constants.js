export const HAND_SIZE = 5;
export const PHASE = {
    START: "Start",
    BET: "Bet",
    SWAP: "Swap",
    EVALUATION_WIN: "Evaluation_WIN",
    EVALUATION_LOSE: "Evaluation_LOSE",
    DOUBLE: "Double",
    DOUBLE_WIN: "Double_Win",
    DOUBLE_LOSE: "Double_Lose",
    LOST_GAME: "Lost_Game"
};

export const PHASE_TEXT = {
    [PHASE.START]: "Would you like to see the tutorial?",
    [PHASE.BET]: "Enter your bet",
    [PHASE.SWAP]: "Choose which cards to hold or swap",
    [PHASE.EVALUATION_LOSE]: "Nothing. Would you like to play again?",
    [PHASE.DOUBLE]: "Low or High?",
    [PHASE.DOUBLE_WIN]: "You won! Continue?",
    [PHASE.DOUBLE_LOSE]: "You lost, too bad!",
    [PHASE.LOST_GAME]: "You ran out of chips! Try again next time"
}

export const SELECTION = {
    "LOW": 0,
    "HIGH": 1
};

export const MAX_DOUBLES = 10;
