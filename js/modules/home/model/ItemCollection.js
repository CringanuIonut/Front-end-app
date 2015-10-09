define(function(require, exports, module) {
    var Backbone = require('backbone');
    var ItemModel=require('./Item');


    module.exports = Backbone.Collection.extend({
        url:'http://localhost:8083/service/article'
        ,model:ItemModel
    });
});