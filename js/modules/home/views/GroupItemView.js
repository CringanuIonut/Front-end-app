define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ItemCollection=require('../model/ItemCollection');


    module.exports = Marionette.ItemView.extend({
        tag: 'li',
        template: '#home-group'



    });
});