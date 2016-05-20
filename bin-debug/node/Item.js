/**
 * Created by jack on 15/7/24.
 */
var Item = (function (_super) {
    __extends(Item, _super);
    function Item(texture) {
        _super.call(this, texture);
    }
    var d = __define,c=Item,p=c.prototype;
    d(p, "type"
        ,function () {
            return this._type;
        }
        ,function (value) {
            this._type = value;
        }
    );
    Item.VEGETABLE = 1;
    Item.FRUIT = 2;
    return Item;
}(egret.Bitmap));
egret.registerClass(Item,'Item');
