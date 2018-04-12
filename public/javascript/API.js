'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by levy on 2018/4/10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _axios = require('./axios.js');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function () {
    function API() {
        _classCallCheck(this, API);
    }

    _createClass(API, [{
        key: 'savePraise',

        //获取当前的点赞数
        value: function savePraise(param) {
            return _axios2.default.get('/praise', {
                params: {
                    num: param
                }
            });
        }
    }]);

    return API;
}();

exports.default = API;