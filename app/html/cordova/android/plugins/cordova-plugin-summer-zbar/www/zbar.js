cordova.define("cordova-plugin-summer-zbar.ZBar", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    exec      = require('cordova/exec');

function ZBar () {};

ZBar.prototype = {

    scan: function (params, success, failure)
    {
        params = params || {};
		if(params.type=="zxingscan"){
            exec(success, failure, 'ZBar', 'zxingscan', [params]);
        }else{
            exec(success, failure, 'ZBar', 'scan', [params]);
        }
    },

};

module.exports = new ZBar;

});
