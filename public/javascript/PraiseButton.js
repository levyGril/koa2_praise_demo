'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by levy on 2018/3/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _API = require('./API.js');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    /**
     * [constructor description]
     * @param  {Number} num  [初始值]
     * @return {[type]}      [description]
     */
    function PraiseButton(num, element) {
        _classCallCheck(this, PraiseButton);

        this.num = num;
        this.element = element;
    }
    /**
     * [praise 该方法返回当前实例的点赞次数]
     * @return {[type]} [description]
     */


    _createClass(PraiseButton, [{
        key: 'clickAction',
        value: function clickAction() {
            var _this = this;

            // this.praise_num = this.praise_num+1;
            this.element.click(function () {
                $("#animation").addClass('num');
                _this.num = add(_this.num);
                setTimeout(function () {
                    $("#animation").removeClass('num');
                }, 1000);

                // 页面的点赞更新
                $("#animation").text('+' + _this.num);

                // 调用API
                new _API2.default().savePraise(_this.num);
            });
        }
    }]);

    return PraiseButton;
}();

exports.default = PraiseButton;