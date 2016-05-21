/**
 * Created by Lucien on 16/05/20.
 */
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        _super.call(this);
        this.video = new egret.Video();
        this.video.x = 0; //设置视频坐标x
        this.video.y = 0; //设置视频坐标y
        this.video.width = 640; //设置视频宽
        this.video.height = 320; //设置视频高
        this.video.fullscreen = true; //设置是否全屏（暂不支持移动设备）
        this.video.load("http://media.w3.org/2010/05/sintel/trailer.mp4");
        this.addChild(this.video); //将视频添加到舞台
        //监听视频加载完成
        this.video.once(egret.Event.COMPLETE, this.onLoad, this);
        //监听视频加载失败
        this.video.once(egret.IOErrorEvent.IO_ERROR, this.onLoadErr, this);
    }
    var d = __define,c=GameView,p=c.prototype;
    p.onLoad = function (e) {
        this.video.play();
        //获取视频长度
        console.log(this.video.length);
    };
    p.onLoadErr = function (e) {
        console.log("video load error happened");
    };
    return GameView;
}(egret.DisplayObjectContainer));
egret.registerClass(GameView,'GameView');
