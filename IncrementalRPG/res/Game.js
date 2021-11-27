class Game {
    previousTimeStamp = 0;

    constructor() {

        window.requestAnimationFrame(this.update.bind(this));
    }

    update(timeStamp) {
        let elapsedSeconds = (timeStamp - this.previousTimeStamp) / 1000;
        this.previousTimeStamp = timeStamp;



        window.requestAnimationFrame(game.update.bind(this));
    }
}