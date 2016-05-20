/**
 * Created by jack on 15/7/24.
 */

class GameOverEvent extends egret.Event {
    private _score;

    constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
        this.score = 0;

    }

    public get score() {
        return this._score;
    }

    public set score(value) {
        this._score = value;
    }
}