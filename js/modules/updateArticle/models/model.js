define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Model.extend({

        url:function(){
            return "http://localhost:8083/service/article/" + this.id;
        }


    });

});