define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ItemView =require('./groupItemView')

    module.exports = Marionette.CollectionView.extend({
      tag:'ul'
          ,itemView:ItemView
    });
});