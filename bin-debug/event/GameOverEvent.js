/**
 * Created by jack on 15/7/24.
 */
var GameOverEvent = (function (_super) {
    __extends(GameOverEvent, _super);
    function GameOverEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
        this.score = 0;
    }
    var d = __define,c=GameOverEvent,p=c.prototype;
    d(p, "score"
        ,function () {
            return this._score;
        }
        ,function (value) {
            this._score = value;
        }
    );
    return GameOverEvent;
}(egret.Event));
egret.registerClass(GameOverEvent,'GameOverEvent');
