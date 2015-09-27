define(function(require, exports, module) {
    var Backbone = require('backbone');
    var ItemModel=require('./Item');


    module.exports = Backbone.Collection.extend({
        url:'http://localhost:8082/skaboosh/api/group'
        ,model:ItemModel
    });
});